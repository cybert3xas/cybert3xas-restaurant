import React from "react";
import {Text, Image, View, StyleSheet} from 'react-native';

const ResultsDetail = ({ result }) =>{
    return(
        <View style={styles.mainViewStyle}>
            <Image 
                source={{uri: result.image_url}}
                style={styles.imageStyle}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.nameStyle}>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainViewStyle:{
        marginLeft: 10
    },
    imageStyle:{
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom:5
    },
    nameStyle:{
        fontWeight: 'bold',
        fontSize: 13
    }
});

export default ResultsDetail;