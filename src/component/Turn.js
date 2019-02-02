import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { container, row } from '../utlis/style'
import color from '../utlis/color';

export default class Turn extends React.Component {
  constructor() {
    super()
    this.state = {
      turn: false
    }
  }
  render() {
    const {turn} = this.state
    return (
      <View style={[container, row]}>
        <TouchableOpacity
          onPress={() => this.setState({turn: !turn})}
          disabled={turn}
          style={[container, {backgroundColor: turn ? color.darkBlue : 'transparent'}]}>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({ turn: !turn })}
          disabled={!turn}
          style={[container, {backgroundColor: !turn ? color.darkBlue : 'transparent'}]}>
        </TouchableOpacity>
      </View>
    )
  }
}
