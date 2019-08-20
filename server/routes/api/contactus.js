const express = require('express');
const mongodb = require('mongodb');
var nodemailer = require('nodemailer');

const router = express.Router();

//Get Posts
router.get('/',async(req,res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

//Add post
router.post('/', async(req,res) => {
    const posts = await loadPostsCollection();
    //console.log(req.body.form);
    await posts.insertOne({
        name: req.body.form.name,
        email: req.body.form.email,
        text: req.body.form.text,
        createdAt: new Date()
    });
    res.status(201).send();

    var transporter = nodemailer.createTransport({
        service: 'elasticemail',
        host: 'smtp.elasticemail.com',
        port: 2525,
        auth: {
          user: 'charithnisanka@gmail.com',
          pass: 'c6067aac-3bee-4ddf-8974-ec00899b8953'
        }
      });
      
      const name = req.body.form.name;
      const email = req.body.form.email;
      const text = req.body.form.text;
      const time = new Date();

      var mailOptions = {
        from: 'charithnisanka@gmail.com',
        to: 'rick.stapel@sih.net',
        subject: 'SIH Contact Form Received ',
        //text: `Name : `+ name
         //       `Email:`+ email
         //       `Message:`+text
        html: '<h3>Name:'+name+'</h3><br/><h3>Email:'+email+'<br/>Messsage:'+text+'</h3><br/><p> Sent Time:'+time        
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
});

//Delete post

router.delete('/:id', async(req, res) =>{
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb://charith:charitha123@ds261486.mlab.com:61486/messengerdb',{
        useNewUrlParser: true
    });

    return client.db('messengerdb').collection('contactus');
}

module.exports = router;