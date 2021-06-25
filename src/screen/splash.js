import React from "react";
import { View, Button } from "react-native";
import style from "./commanStyle";

function Splash(props) {
  return (
    <View style={style.splashView}>
      <View style={style.buttonView}>
        <Button
          color="#f4511e"
          onPress={() => props.navigation.push("Sample 1")}
          title="Sample 1"
        />
      </View>
      <View style={style.buttonView}>
        <Button
          color="#f4511e"
          onPress={() => props.navigation.push("Sample 2")}
          title="Sample 2"
        />
      </View>
    </View>
  );
}
export default Splash;
