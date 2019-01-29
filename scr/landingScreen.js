import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {Container,Content,Button,Header} from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";
import ElectricalScreen from './electricalScreen';
import ICscreen from './icScreen';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const welcome =  'Welcome\n'+' to\n'+ ' Team Volante! '

type Props = {};

class LandingScreen extends Component<Props> {
  render() {
    console.log('landing screen')
    return (
      <Container style={styles.container}>

      <Content style = {{width:'100%','marginTop':40}} >

        <Text style={{color:'#ff0000','fontSize':40,textAlign:'center',fontWeight:'bold'}} >
        {welcome}
        </Text>
        <View style = {{justifyContent: 'center',alignItems: 'center', margin:10}}>
        <Image
          style = {{width:150,height:150}}
          source={require('../resources/images/volante.jpg')}
        />
        </View>
        <Text style={{textAlign:'center','marginTop':20,color:'#fff','fontSize':20}}>To get started, click button below</Text>

        <Button primary rounded block
        style = {{margin:10,'backgroundColor':'#1B5E20'}}
       onPress={() => this.props.navigation.push('Electrical')}
      >
            <Text style={{color:'#fff','fontSize':15}}>
            Electrical
            </Text>

        </Button>

        <Button block danger rounded
        onPress={() => this.props.navigation.push('ICscr')}
        style = {{margin:10,'backgroundColor':'#FF0000'}}
        >
            <Text style = {{color:'#fff','fontSize':15}}>
            IC (internal combustion)
            </Text>
        </Button>

        <Text style={{textAlign:'center',color:'#ffffff'}}>{instructions}</Text>
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#000000',
  }
});

const RootStack = createStackNavigator(
  {//console.log('works till here 1');
    Home:{
      screen: LandingScreen,
    },
    Electrical:{
      screen: ElectricalScreen,
    },
    ICscr:{
      screen: ICscreen,
    }


    },

{
 initialRouteName : 'Home',
}

);

const AppContainer = createAppContainer(RootStack);


export default  AppContainer;
