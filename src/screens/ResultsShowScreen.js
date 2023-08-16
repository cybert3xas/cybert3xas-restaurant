import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
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

    if(!result){
        return null;
    }

    //Component rendering
    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo} //it's a URl so it has to be unique
                renderItem={({item}) =>{
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
            />
        </View>
    );
};

const styles=StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;