import {React, useEffect, useState} from 'react';
import {View, Text, Image, TextInput, Button} from 'react-native';
import axios from 'axios';
import config from './Apikey';

const setURL = (keyword) => {
  var URL = config.aladinBasicURL + "?ttbkey=" + config.aladinKey + "&Query=" + keyword + "&QueryType=keyword&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20070901";
  console.log(URL);
  return URL;
}

const Search = ({navigation}) => {
  const [keyword, setKeyword] = useState("");
  const [bookData, setBookData] = useState("");

  const processBookData = (data) => {
    data = data.replaceAll('\\', '');
    data = data.substr(0, data.length-1);

    setBookData(JSON.parse(data).item);    
  }

  return (
    <View style={{flex: 1}}>
      <TextInput
        onChangeText={setKeyword}
        placeholder="검색어를 입력해주세요."
      />
      <Button
        title="검색"
        onPress={()=>{
          axios.get(setURL(keyword))
            .then((response) => {
              processBookData(response.data);
            })
            .catch((error) => {
              console.log(error);
            })
        }}
      />

      <View>
        {Object.values(bookData).map((book, index)=>(
          <View key={index}>
            <Text>
              {book.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export {Search};