import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Text } from 'native-base';
import styles from './style';

const TopHeader = ({qtd}) => (

  <Header style = {styles.container}>
  <Left>
    <Button transparent>
      {/*<Icon name='arrow-back' />*/}
    </Button>
  </Left>
  <Body>
    <Title style={{color:"#5F5F5F"}}>Alex - Lanches</Title>
  </Body>
  <Right>
    <Button transparent>
      <Icon name="ios-cart" style={{color:"#5F5F5F"}}/>  
      <Text style={{color:"#5F5F5F"}}> {qtd > 0 ? qtd : ""} </Text>
    </Button>
  </Right>
</Header>

)

export default TopHeader;