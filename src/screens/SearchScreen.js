import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'; //api call


const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [erroMessage, setErrorMessage] = useState('');

  //Helper Functions
  const searchApi = async () => {
    try{
      //We wait for a response to come back
      const response = await yelp.get('/search',{
        params: {
          limit: 50,
          term,
          location: 'longmont'
        }
      }); //the endpoint we want to hit
    
      setResults(response.data.businesses);
    }catch(err){
      setErrorMessage('Something went wrong');
    }
  };

  //Component rendering
  return (
    <View style={styles.mainView}>
      <SearchBar 
        searchTerm={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      {erroMessage ? <Text>{erroMessage}</Text> : null}
      <Text>We have found: {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white'
  }
});

export default SearchScreen;
