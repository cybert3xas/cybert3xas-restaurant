import axios from "axios";

/* 
- Some of the api calls we will make use of: 

    - search //gives a list of matched business from keyword
    - {business id} //gives details of specific buisness
*/
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    //auth
    headers:{
        Authorization: 
            //'Bearer {yourApiKey}'
            'Bearer '
    }
});