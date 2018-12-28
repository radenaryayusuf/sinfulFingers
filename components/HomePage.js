import React, { Component } from 'react';
import { Container,CardItem,Content, Header,Button,Card,Footer,FooterTab, Left, Body ,Thumbnail, Right, Title, StyleProvider } from 'native-base';
import {Image,Text, Dimensions,StatusBar,ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from "react-native-easy-grid";
import getTheme from '../native-base-theme/components';
import custom from '../native-base-theme/variables/platform';
import FBSDK , {LoginManager} from 'react-native-fbsdk'
const { width, height } = Dimensions.get("window");
var Sound = require('react-native-sound');
export default class HomePage extends Component {
  _fbAuth(){
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
      if(result.isCancelled){
        console.warn('Login is Cancelled')
      }else{
        console.warn('Login Is Successfull '+ result.grantedPermissions.toString())
      }
    }, function(error){
      console.warn('An error occured : '+ error)
    })
  }
  constructor(props) {
    super(props);
    this.state =
     {
      status: false, 
      images: require('../images/move_0.png'),
      imagess: require('../images/move_1.png'),
      combo_no : 0,
      pause: false, 
      rule: [1,1],
      curtrule :1
    }
  }

  componentWillMount(){
    whoosh = new Sound('re_dua.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.warn('failed to load the sound', error);
        return;
      }
    });
    whooshdua = new Sound('mi_tiga.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.warn('failed to load the sound', error);
        return;
      }
   });
    whooshtiga = new Sound('f_sharp.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.warn('failed to load the sound', error);
        return;
      }
   });
    whooshempat = new Sound('so_lima.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.warn('failed to load the sound', error);
        return;
      }
    });
  }

 
 
  onClick1 (nomor){
    
    let rules = this.state.rule.length
    let counter = this.state.curtrule
    if(counter <= rules){
      this.state.rule.map(kunci  => {
       
        if( kunci == nomor ){
          this.setState({curtrule: this.state.curtrule + 1})
            if( rules ==  counter ){
              this.setState({combo_no: this.state.combo_no+1})
              this.setState({curtrule:1})
                if(this.state.status == true)
  {
    this.setState({status: false})
   
  }
  else
  {
    this.setState({status: true})
   
  

}
            }
        }else{
          this.setState({combo_no: 0})
          this.setState({curtrule:1})
          alert('Mission Failed')
        }
      })
    
        
       
     

    }else{
      this.setState({curtrule:1},function() { this.setState({curtrule: this.state.curtrule + 1})})
    }
  
    
  }
  render() {
  

    // Enable playback in silence mode
    // Sound.setCategory('Playback');
    let nambah = 0;
    let nambahlagi= nambah += 1
    let hay = this.state.combo_no + 1
// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
    
// Play the sound with an onEnd callback
  
   
  
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <StyleProvider style={getTheme(custom)}>
      <Container>
      <StatusBar 
      backgroundColor="#B41D08" 
      barStyle = 'light-content'
      />
        <Header style={{backgroundColor: '#B41D08', shadowColor:'#000', shadowRadius:10,shadowOffset:3, shadowOpacity:5}}>
          <Grid>
          <Col style={{marginRight:20}}>

          <Row>
            
          <Right style={{justifyContent:"center"}}>
            <Text>Rank #1</Text>
            </Right>
          </Row>

          <Row style={{top:-10}}>
          <Button onPress = {() => {this.props.navigation.push('leaderBoard')}}  style={{borderRadius:0, backgroundColor:'#DE7F04'}} small>
            <Text style={{fontWeight:'bold', fontSize:9}}>LeaderBoard</Text>
          </Button>
          </Row>

          </Col>

         <Col style={{justifyContent:"center"}}>
         
          <Image style={{ borderColor:'#fff',width: 60,height:60, borderWidth:2, borderRadius:5}}  source={require('../images/competition.png')} />
          </Col>

          <Col style={{marginLeft:1}}>

          <Row style={{flexDirection:"column"}}>
          <Right style={{justifyContent:"center"}}>
            <Text>Guest#1</Text>
            </Right>
            </Row>

          <Row size={2}>
          <Button onPress={() => {this._fbAuth()} } style={{height:30, backgroundColor:'#4267B2', width:80}} iconLeft>
            <Icon style={{color:'#fff', textAlign:"left",marginLeft:-10}} name='facebook' />
            <Text style={{color:'#fff',marginLeft:8, fontSize:13,textAlign:"center", marginRight:0}}>Login</Text>
          </Button>
          </Row>

          </Col>
          
          <Col style={{justifyContent:"center"}}>
          <Thumbnail style={{alignSelf:"flex-end", borderRadius:10}} square source={require('../images/user.png')} />
          
          </Col>
          </Grid>
        </Header>
        <ImageBackground source={require('../images/bg.jpeg')} style={{flex:1}}>
        <Content padder>
        <Card style={{width:80, height:60, justifyContent:"center"}}>
            <CardItem style={{backgroundColor:"#FF7F00", borderRadius:5, borderColor:'#fff', borderWidth:2}}>
              <Body style={{backgroundColor:"#FF7F00"}}>
                <Text style={{alignSelf:"center",fontFamily:"Avenir", fontSize:30, fontWeight:"bold" }}>
                  {this.state.combo_no}
                </Text>
                <Text style={{alignSelf:"center",fontFamily:"Avenir", fontSize:10, fontWeight:"bold" }}>
                 COMBOS!
                </Text>
              </Body>
            </CardItem>
           
         </Card>
         </Content>
        <Body style={{justifyContent:"center",alignItems:"center"}}>
        {
          !this.state.status ?   <Button style={{flex:1}}  transparent>
          <Image style={{ width: 210, height: 260, marginBottom:150}} source={this.state.images}   />
          </Button> :  <Button style={{flex:1}} transparent>
          <Image style={{ width: 210, height: 300, marginBottom:150}} source={this.state.imagess}   />
          </Button>
        }
       
        </Body>
          <Grid style={{flex:1, justifyContent:"center", marginBottom: -100, marginLeft: 15}}>
       
            <Col>
            <Button  onPress = { () => {this.onClick1(1), 
            
              whoosh.play((success) => {
                if (!success) {
                  console.warn('playback failed due to audio decoding errors');
                } 
              })
            
            }} style={{backgroundColor:'#B41D08', borderColor:'#fff',borderWidth:2, width:70,justifyContent:"center", height:70}} rounded >
            <Text style={{color:'#fff',textAlign:"center"}}>BA{'\n'} (MA) </Text>
          </Button>
            </Col>
            <Col>
            <Button onPress = { () => {this.onClick1(2), 
            
            whooshdua.play((success) => {
              if (!success) {
                console.warn('playback failed due to audio decoding errors');
              } 
            })
          
          }} style={{backgroundColor:'#fff', borderColor:'#B41D08',borderWidth:2, width:70,justifyContent:"center", height:70}} rounded >
            <Text style={{color:'#B41D08',textAlign:"center"}}>BY{'\n'} (MI)</Text>
          </Button>
            </Col>
            <Col>
            <Button onPress = { () => {this.onClick1(3), 
            
            whooshtiga.play((success) => {
              if (!success) {
                console.warn('playback failed due to audio decoding errors');
              } 
            })
          
          }} style={{backgroundColor:'#B41D08', borderColor:'#fff',borderWidth:2, width:70,justifyContent:"center", height:70}} rounded >
            <Text style={{color:'#fff',textAlign:"center"}}>SHARK</Text>
          </Button>
            </Col>
            <Col>
            <Button onPress = { () => {this.onClick1(4), 
            
            whooshempat.play((success) => {
              if (!success) {
                console.warn('playback failed due to audio decoding errors');
              } 
            })
          
          }} style={{backgroundColor:'#fff', borderColor:'#B41D08',borderWidth:2, width:70,justifyContent:"center", height:70}} rounded >
            <Text style={{color:'#B41D08',textAlign:"center"}}>DU</Text>
          </Button>           
            </Col>

          </Grid>
       
               </ImageBackground>
               
      </Container>
      </StyleProvider>
    );
  }
} 