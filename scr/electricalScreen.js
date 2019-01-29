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

      firebase.database().ref('Electrical/').on('value',  (snapshot)=> {
          console.log('hello'+snapshot.val().BatteryPercentage)
        this.setState({batteryPer:snapshot.val().BatteryPercentage});

        console.log('hello'+snapshot.val().temperature)
      this.setState({temp:snapshot.val().temperature});

      console.log('hello'+snapshot.val().SeatBelt)
      this.setState({seatBelt:snapshot.val().SeatBelt});
      });


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
