import React, {useEffect, useState} from 'react';
import {View,Text} from 'react-native';
import {getDateBasedOnLng} from '../utils';
import {DropDown} from '../component'
import style from './commanStyle';

function Sample2(props) {
  const [data, setData] = useState(["en-US","en-GB","pt-BR"]);
  const [selected, setSelectedData] = useState('en-US');
  return (
    <View style={style.splashView}>
    <DropDown data={data} selected={selected} setSelected={(data)=> setSelectedData(data)} />
    <Text style={style.dateText}>{`${selected} : ${getDateBasedOnLng(selected, new Date())}`}
    </Text>
    </View>
  );
}
export default Sample2;
