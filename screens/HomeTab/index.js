import React, { Component } from 'react'
import { Image, StyleSheet, View ,ActivityIndicator,Dimensions} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Swiper from 'react-native-swiper';
import TopHeader from '../../components/TopHeader';
/*import { listAll } from '../../store/api_capa';*/
const parseString = require('react-native-xml2js').parseString;


const dados_capa = [];

export default class HomeTab extends Component {
  state = {
    capas:[],
    loading:true,
  }
  constructor (props) {
    super(props);             
  }
  async getCapas(){
    await fetch('http://www.grupochama.com.br/app/capas.xml?d='+Date.now())
        .then((response) => response.text())
        .then((responseText) => {
            parseString(responseText, function (err, result) {
                result.capas.item.forEach((r)=>{

                  dados_capa.push(r);

                })
            });
            this.setState({
              capas:dados_capa,
              loading:false
            })
        })
        .catch((err) => {
            console.log('Error fetching the feed: ', err)
    })


}

  componentDidMount(){
    this.getCapas() ;
       
   }
    
    static navigationOptions = {
        title: "Home",
        tabBarIcon:<MaterialIcons name="home" style={{color:'#fff'}}  size={24} />,
    }
  renderSwipper = ()   => (
    <View style={{flex:1}}>

    <Swiper style={styles.wrapper} height={240}  autoplay={true}>

    
    {this.state.capas.map((row,index)=>(

      <View key = {index}  style={{flex:1,justifyContent:'center',backgroundColor:'transparent'}} title={<Text numberOfLines={1}>Aussie dourist dies at Bali hotel</Text>}>
      
        <Image  style={{flex:1,width:null,height:null}} resizeMethod="resize"  source={{
          uri: `${row.imagem}`,          
          cache: 'only-if-cached',          
        }}/>   


      </View>      

    ))}
  
    </Swiper>
    </View>
  )
  render() {   

    return (
      <Container>
      <TopHeader title = {"Home"}/>
        <Content>
          <Card >
          <ActivityIndicator animating={this.state.loading} />
              <CardItem bordered>
              <Left>
                <Thumbnail source={require('../../assets/logo_chama.png')} />
                <Body>
                  <Text>Chama Supermecados</Text>
                  <Text note> 12 de setembro de 2018</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style ={{marginTop:10}} >
              {/*SWIPPER*/}
              {this.renderSwipper()}

            </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
          </Card>

          <Card>
            
            <CardItem bordered>
            <Left>
              <Thumbnail source={require('../../assets/logo_chama.png')} />
              <Body>
                <Text>Chama Supermecados</Text>
                <Text note> 12 de setembro de 2018</Text>
              </Body>
            </Left>


            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>

        </Content>            
      </Container>

            

    )
  }
}
const styles = StyleSheet.create({
  

})



