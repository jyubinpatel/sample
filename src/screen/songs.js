import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, FlatList} from 'react-native';
import {handleGetMethod} from '../api';
import {SongCard} from '../component';

function Songs(props) {
  const [songs, setSongs] = useState([]);
  const [isApicalling, setApiCall] = useState(true);

  useEffect(() => {
    getSongs();
  }, []);

  async function getSongs() {
    const result = await handleGetMethod('search?term=Michael+jackson');
    if (result && result.results) {
      setSongs(result.results);
    }
    setApiCall(false);
  }
  const continerStyle = {
    flex: 1,
    justifyContent: 'center',
  };
  const renderItem = ({item}) => (
    <SongCard
      data={item}
      onPress={() => {
        props.navigation.navigate('SongDetails', {
          data: item,
        });
      }}
    />
  );

  return (
    <View style={continerStyle}>
      {isApicalling && <ActivityIndicator size="large" color="#f4511e" />}
      {songs && songs.length > 0 && (
        <FlatList
          data={songs}
          renderItem={renderItem}
          keyExtractor={item => item.trackId}
        />
      )}
    </View>
  );
}
export default Songs;
