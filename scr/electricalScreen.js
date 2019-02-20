import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {Container,Content,Button,Header} from 'native-base';
import firebase from 'firebase';


class ElectricalScreen extends Component<Props>{

  state = {
      batteryPer: 'nothing',
      temp: '',
      seatBelt: '',

    };

  componentDidMount() {
  // Get data from firebase
this.readUserData()
  }
  readUserData() {

      firebase.database().ref('BatteryPercentage/').on('value',  (snapshot)=> {
          console.log('hello'+snapshot.val())

        this.setState({batteryPer:snapshot.val()});
      });

      firebase.database().ref('temperature/').on('value', (snapshot)=> {
          console.log('hello'+snapshot.val())
          this.setState({temp:snapshot.val()});
        //temp = snapshot.val();

      });

      firebase.database().ref('SeatBelt/').on('value', (snapshot)=> {
          console.log('hello'+snapshot.val())
          this.setState({seatBelt:snapshot.val()});
      //seatBelt = snapshot.val();

      });
      //console.log('message',message);
      //return message
  }
  render(){
    console.log('works')

     //this.readUserData()
    console.log('batteryPer'+this.state.batteryPer)
    console.log('tempr'+this.state.temp)
    console.log('tempr'+this.state.seatBelt)
    return(
      <Container>
      <Content //style = {{flex:1,alignItems:'center',justifyContent:'Top'}}
      >
      <Text style = {{fontSize:30,color:'#000000',alignItems:'center',textAlign:'center'}}>
        Battery Percentage
      </Text>
      <Text style = {{fontSize:20,color:'#000000',alignItems:'center',textAlign:'center'}}>
        {this.state.batteryPer}
      </Text>
      </Content>
      <Content //style = {{flex:1,alignItems:'center',justifyContent:'center'}}
      >

      <Text style = {{fontSize:30,color:'#000000',alignItems:'center',textAlign:'center'}}>
        Battery temp
      </Text>
      <Text style = {{fontSize:20,color:'#000000',alignItems:'center',textAlign:'center'}}>
        {this.state.temp}
      </Text>
      </Content>
      <Content
      //style = {{flex:1,alignItems:'center',justifyContent:'bottom'}}
      >
      <Text style = {{fontSize:30,color:'#000000',alignItems:'center',textAlign:'center'}}>
        Seat belt
      </Text>
      <Text style = {{fontSize:20,color:'#000000',alignItems:'center',textAlign:'center'}}>
        {this.state.seatBelt}
      </Text>
      </Content>
      </Container>
);
}
}

export default ElectricalScreen ;
