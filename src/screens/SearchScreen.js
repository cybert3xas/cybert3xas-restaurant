import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const[searchApi, results, erroMessage] = useResults();

  const filterResultsByPrice = (price) =>{
    //price == $, $$, $$$, the way the API sends them

    return results.filter(result => {
      return result.price === price;
    });

  };

  //Component rendering
  return (
    <View style={styles.mainView}>
      <SearchBar 
        searchTerm={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />

      {erroMessage ? <Text>{erroMessage}</Text> : null}
      
      <ScrollView>
        <ResultList results={filterResultsByPrice('$')} title="Cost Effective"/>
        <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
        <ResultList results={filterResultsByPrice('$$$')} title="Big Spender"/>
      </ScrollView>

    </View>
    
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    ...StyleSheet.absoluteFill,
    flex: 1
  }
});

export default SearchScreen;
