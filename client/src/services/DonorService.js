import axios from 'axios';


const url = 'api/donors/';

class PostService {
    //Get Posts
    static getDonors(year){
        return new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(url,{
                    params: {
                        year :this.year
                    }
                });
                const data = res.data;
                
                /*let array = [];
                const count = 1;
                jsonObj = {}
                for(var i=0; i< data.length;i++){
                    //console.log(data[i]['name']);
                    if(count == 1){
                        jsonObj["first"] = data[i]['name'];
                    }
                    array.push(data[i]['name']);
                }*/
                resolve(
                    data.map(donor => ({
                        ...donor,
                        createdAt: new Date(donor.createdAt)    
                    }))
                );
            } catch (error) {
                reject(error);
            }
        });
    }

    static getDonorsOld(){
        return new Promise(async(resolve, reject) => {
            try {

                const res = await axios.get(url+"2018");
                const data = res.data;
                
                resolve(
                    data.map(donor => ({
                        ...donor  
                    }))
                );
            } catch (error) {
                reject(error);
            }
        });
    }

    //Create Posts
    static insertPost(text){
        return axios.post(url, {
            text
        });
    }

    // Delete Posts
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;