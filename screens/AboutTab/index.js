import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class AboutTab extends Component {
  static navigationOptions = {
    tabBarIcon:<MaterialIcons name="info" style={{color:'#fff'}}  size={24} />,

    title:'Informações'
    
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
