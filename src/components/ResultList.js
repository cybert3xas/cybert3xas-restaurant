import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from "./ResultsDetail";

const ResultList = ({title, results}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                //horizontal={true} same as
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetail result={item} />;
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10
    },
    container: {
        marginBottom: 10
    }
});

export default ResultList;