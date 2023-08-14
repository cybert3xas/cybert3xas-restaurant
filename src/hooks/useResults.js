/** 
 * Remember that a hook is essentially a function that adds functionallity 
 * to a component we create. 
 * 
 * We create this hook to take care of the resturant search using the yelp API. 
 * We're trying to isolate the component as much as possible. 
 */

import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [erroMessage, setErrorMessage] = useState('');
  
    //Helper Functions
    const searchApi = async (searchTerm) => {
      try{
        //We wait for a response to come back
        const response = await yelp.get('/search',{
          params: {
            limit: 50,
            term : searchTerm,
            location: 'longmont'
          }
        }); //the endpoint we want to hit
      
        setResults(response.data.businesses);
      }catch(err){
        setErrorMessage('Something went wrong');
      }
    };
    
    //This hook allows us to make a on-start random call in order to show
    //some type of resturants before the user types anything. This case, it's pizza.
    useEffect(() => {
      searchApi('pizza');
    }, []);
    
    return [searchApi, results, erroMessage];
};