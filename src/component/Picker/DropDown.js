import React from "react";
import {View} from 'react-native';
import {Picker} from "@react-native-picker/picker";
import style from "./styles";

export const DropDown = ({data, selected, setSelected}) => (
  <View style={style.containerView}>
    <Picker
      selectedValue={selected | ""}
      style={style.pickerView}
      onValueChange={(itemValue) => setSelected(itemValue)}>
      {data && data.map((item, index) => (
          <Picker.Item label={item} value={item} />
        ))}
    </Picker>
  </View>
);
