import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import style from './commanStyle';
import {millisToMinutesAndSeconds} from '../utils';

function SongDetails(props) {
  const {params} = props.route;
  const [songDetails, setSongDetails] = useState(params.data || null);
  return (
    <View style={style.containerView}>
      {songDetails.artworkUrl100 && (
        <Image
          style={style.imageView}
          source={{uri: songDetails.artworkUrl100}}
        />
      )}
      <View style={style.detailView}>
        {songDetails.trackName && (
          <Text style={style.titleText}>
            {'Track: ' + songDetails.trackName}
          </Text>
        )}
        {songDetails.artistName && (
          <Text style={style.artistText}>
            {'Artist: ' + songDetails.artistName}
          </Text>
        )}
        {songDetails.trackTimeMillis && (
          <Text style={style.durationText}>
            {'Duration: ' +
              millisToMinutesAndSeconds(songDetails.trackTimeMillis)}
          </Text>
        )}
        {songDetails.trackPrice && (
          <Text style={style.detailText}>
            {'Price: ' + songDetails.trackPrice + '$'}
          </Text>
        )}
      </View>
    </View>
  );
}
export default SongDetails;
