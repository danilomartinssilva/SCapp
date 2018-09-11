import React, { Component } from 'react'
import { Text, StyleSheet, View,Platform,StatusBar } from 'react-native'
import {TabNavigator , createTabNavigator,createBottomTabNavigator,createMaterialTopTabNavigator,createStackNavigator,createSwitchNavigator} from 'react-navigation';
import AboutTab from './AboutTab';
import LikesTab from './LikesTab';
import {Container} from 'native-base';
import TopHeader from '../components/TopHeader';
import TopBanner from '../components/TopBanner';
import CarTab from './CarTab';
import OrderTab from './OrderTab';
import LocationTab from './LocationTab';
import list_products from '../fakers/fakers';
import DetailTab from './DetailTab';
export default class MainScreen extends Component {
  state= {
    qtd:2,
    list_of_products:list_products
  } 
  setProduct=(product)=>{
   console.log(product);
  }
    
  render() {
    return (
      <Container>      
      <TopHeader qtd={this.state.qtd}/>
      <AppTabNavigation screenProps = {{...this.state, setProduct:this.setProduct}}/>
      </Container>
    )
  }
}


const styles = StyleSheet.create({})

const AppTabNavigation = createBottomTabNavigator({
  AboutTab:AboutTab,
  LocationTab:LocationTab,
  OrderTab:OrderTab,
  CarTab:CarTab  

},{
  tabBarOptions:{
    showLabel:true,
    showIcon:true,  
    labelStyle:{
      fontSize:12,
      color:'#fff',
      fontWeight:"900"

    } , 
    style:{    
      /*backgroundColor:"#E8D4D1",      */
      backgroundColor:"#7F1C24",
      paddingBottom:10,
      paddingTop:10,
      height:60
      
    }
  },
})






