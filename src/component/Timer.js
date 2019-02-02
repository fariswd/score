import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { Entypo } from "@expo/vector-icons";

import { container, halfContainer, center, row } from '../utlis/style'
import { textCenter, big, medium } from '../utlis/text'
import color from '../utlis/color'

export default class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      status: false,
      timer: 0,
    }
    this.timer = false
  }

  startTimer() {
    this.setState({status: true})
    this.timer = setInterval(() => {
      this.setState({timer: this.state.timer + 1})
    }, 1000)
  }

  stopInterval() {
    this.setState({ status: false }, () => {
      clearInterval(this.timer)
    })
    
  }

  clearInterval() {
    this.setState({ timer: 0 }, () => this.stopInterval())
  }

  toggleHandle(status) {
    this.setState({status: false}, () => {
      if(status) this.stopInterval()
      else this.startTimer()
    })
  }
  
  numbersHandle(){
    const { timer } = this.state
    const second = this.state.timer % 600
    const minute =
      Math.floor(this.state.timer / 600) > 59
        ? Math.floor(this.state.timer / 600) % 60
        : Math.floor(this.state.timer / 600);
    const hour =
      this.state.timer > 36000
        ? Math.floor(this.state.timer / 36000) % 36000
        : Math.floor(this.state.timer / 36000);
    
    return `${hour < 10 ? '0' + hour : hour} : ${minute < 10 ? '0' + minute : minute} : ${second < 10 ? '0' + second : second}`
  }

  render() {
    const {status} = this.state
    return (
      <View style={container}>
        <View style={[container, center]}>
          <TouchableOpacity onPress={() => this.toggleHandle(status)}>
            <Text style={big}>{this.numbersHandle()}</Text>
          </TouchableOpacity>
        </View>
        <View style={[halfContainer, row]}>
          <TouchableOpacity
            style={[container, center, { borderWidth: 2, borderColor: color.gray }]}
            onPress={() => this.startTimer()}
          >
            <Entypo name="controller-play" size={35} color={color.gray} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[container, center, { borderWidth: 2, borderColor: color.gray }]}
            onPress={() => this.stopInterval()}
          >
            <Entypo name="controller-paus" size={25} color={color.gray} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[container, center, { borderWidth: 2, borderColor: color.gray }]}
            onPress={() => this.clearInterval()}
          >
            <Entypo name="trash" size={25} color={color.gray} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}