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
            'Bearer j0IpZOxnwBfoiK9NCiMyFC1J6Op3J24TrrFgWcLyJOsk5qx-yKPNrk-bLJgTy-26v2lzA_wNlQYtJukfrRWIGawv_MHeocv68jvbJXPn0QxJLkZRb4IYm9o-KK50YXYx'
    }
});