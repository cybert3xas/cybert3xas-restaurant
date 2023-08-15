import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

/** 
 * withNavigation: is a component that allows you to send the props from high-end parent for a child
 * component. In this case, result list is 3 levels below the main screen, so instead of passing
 * down the props through each parent, we can make use of this component
 * 
 * navigate can take multiple params, it takes the screen you want to navigate to and it can take 
 * an object that contains some injformation that you want to make us of in the other screen.
 */
const ResultList = ({title, results, navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                //horizontal={true} same as
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('ResultsShow', {'id': item.id})}
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>

                    ); 
                        
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

export default withNavigation(ResultList);