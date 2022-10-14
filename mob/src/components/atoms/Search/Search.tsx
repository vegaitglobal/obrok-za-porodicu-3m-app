import React from 'react';
import {TextInput, View} from 'react-native';

const Search = () => {
  return (
    <View>
      <TextInput
        style={{}}
        value={''}
        allowFontScaling
        clearTextOnFocus
        inlineImageLeft="search_icon"
        placeholder="red"
        placeholderTextColor="red"
        returnKeyType="done"
      />
    </View>
  );
};

export default Search;
