import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Constants } from 'expo'

import Counter from '../component/Counter'
import { container, halfContainer, center } from "../utlis/style";
import { textCenter, giant, big, medium, small, tiny, colorGray } from "../utlis/text";


export default class IndexScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      score: {},
      teamA: 'A-team',
      teamB: 'B-team'
    }
  }
  increase(team) {
    const obj = {}
    obj[team] = this.state.score[team] >= 0 ? this.state.score[team] + 1 : 1
    this.setState({score: {...this.state.score, ...obj}})
  }
  decrease(team) {
    const obj = {}
    obj[team] = this.state.score[team] > 0 ? this.state.score[team] - 1 : 0
    this.setState({ score: { ...this.state.score, ...obj } })
  }
  counter(team) {
    return (
      <View style={container}>
        <Text style={[medium, textCenter]}>{team}</Text>
        <Counter
          increase={() => this.increase(team)}
          decrease={() => this.decrease(team)}
          score={this.state.score[team]}
        />
      </View>
    );
  }
  render() {
    return (
      <>
        <View style={halfContainer} />
        <View style={[container, { flexDirection: "row" }]}>
          {this.counter(this.state.teamA)}
          {this.counter(this.state.teamB)}
        </View>
        <View style={halfContainer} />
      </>
    );
  }
}