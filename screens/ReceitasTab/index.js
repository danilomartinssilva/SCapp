import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class ReceitasTab extends Component {
  static navigationOptions = {
    title: "Receitas",
    tabBarIcon:<MaterialIcons name="restaurant" style={{color:'#fff'}}  size={24} />,

  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
