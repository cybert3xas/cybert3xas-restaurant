import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons'; //vector library in expo.github/vector-icons


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.iconStyle}/>
        <TextInput 
            placeholder='Search'
            style={styles.inputStyle}
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={() =>  onTermSubmit()}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 35,
        borderRadius: 5,
        marginHorizontal: 10,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 15
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 5
    }
});

export default SearchBar;
