import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { AntDesign } from "@expo/vector-icons";

import { container, center } from "../utlis/style";
import color from "../utlis/color";
import { textCenter, giant, big, medium, small, tiny, colorGray } from "../utlis/text";

export default (props) => {
  return (
    <View style={[container]}>
      <TouchableOpacity
        onPress={props.increase}
        style={[container, center]}>
        <AntDesign name="pluscircleo" size={25} color={color.gray} />
      </TouchableOpacity>

      <Text style={[giant, colorGray, textCenter]}>
        {props.score ? props.score : '0'}
      </Text>
      
      <TouchableOpacity
        onPress={props.decrease}
        style={[container, center]}>
        <AntDesign name="minuscircleo" size={25} color={color.gray} />
      </TouchableOpacity>
    </View>
  )
}