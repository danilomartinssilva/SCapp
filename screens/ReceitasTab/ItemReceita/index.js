import React, { Component } from 'react'
import { StyleSheet, View,Dimensions,ActivityIndicator,Image , TouchableOpacity , Linking} from 'react-native'
/* import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; */
import { Container,Content, Card, CardItem,  Text, Button,  Left, Body, Right } from 'native-base';


const ItemReceita = props =>{
    handleClick = url => {
        console.log(url);
        
    };
    console.log("PROPS===",props);
    const regex = /(<([^>]+)>)/ig;
    


  return(
        <Card>
  
    <CardItem cardBody>
      <Image source={{uri: `${props.res.image}`}} style={{height: Dimensions.get('window').height/2 , width: Dimensions.get('window').width -10, flex:1}}/>
    </CardItem>
    <CardItem >
      <Left>
        <Text style={{alignSelf:"flex-start",fontWeight:"bold"}}> { props.res.title}</Text>
      </Left>
    </CardItem>
    <CardItem >
      <Left>
        <Text style={{alignSelf:"stretch"}}>
         {new String(props.res.description).replace(regex,"")}</Text>
      </Left>
    </CardItem>
    <CardItem >
        <Body>
            <TouchableOpacity onLongPress = { ()=> handleClick(props.res.link)} >            
            <Button danger style={{alignSelf:'center'}}><Text style={{alignSelf:'center',}}> Ver mais... </Text></Button>            
            </TouchableOpacity>
        </Body>
    </CardItem>

  </Card>
  )
}

export default ItemReceita


