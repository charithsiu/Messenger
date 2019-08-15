const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get donors
router.get('/',async(req,res) => {
    console.log(req.params.year);
    const donors = await loadPostsCollection();
    res.send(await donors.find({createdAt : {$regex: /2019$/ },"name": { $not: /^Cash Account*/}}).toArray());
});

//Get donors
router.get('/2018',async(req,res) => {
    console.log(req.params.year);
    const donors = await loadPostsCollection();
    res.send(await donors.find({createdAt : {$regex: /2018$/ },"name": { $not: /^Cash Account*/}}).toArray());
});

//Add post
router.post('/', async(req,res) => {
    const donors = await loadPostsCollection();
    await donors.insertOne({
        name: req.body.name,
        createdAt: new Date()
    });
    res.status(201).send();
});

//Delete post

router.delete('/:id', async(req, res) =>{
    const donors = await loadPostsCollection();
    await donors.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb://charith:charitha123@ds261486.mlab.com:61486/messengerdb',{
        useNewUrlParser: true
    });

    return client.db('messengerdb').collection('donor');
}

module.exports = router;