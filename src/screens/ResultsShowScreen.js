import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet} from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ( {navigation} ) => {
    const [result, setResult] = useState(null);//we don't want to show anything until the request has been made
    const id = navigation.getParam('id'); //the resturant ID that was passed through params

    console.log(result);

    //Helper method API call
    const getResult = async(id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    //We only want to run the getResturant once at start up
    useEffect(() => {
        getResult(id);
    }, []);

    //Component rendering
    return(
        <View>
            <Text>Resutls Show Screen</Text>
        </View>
    );
};

const styles=StyleSheet.create({

});

export default ResultsShowScreen;