import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import style from './styles';
import {millisToMinutesAndSeconds} from '../../utils';

export const SongCard = ({data, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={style.containerView}>
      <Image style={style.imageView} source={{uri: data.artworkUrl100}} />
      <View style={style.detailView}>
        <Text
          style={style.titleText}
          numberOfLines={2}
          ellipsizeMode={'tail'}>{`Track: ${data.trackName || ''}`}</Text>
        <Text
          style={style.artistText}
          numberOfLines={2}
          ellipsizeMode={'tail'}>{`Artist Name: ${data.artistName}`}</Text>
        <Text>{`Duration: ${millisToMinutesAndSeconds(
          data.trackTimeMillis,
        )}`}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);
