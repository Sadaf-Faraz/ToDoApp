import React from 'react';
import { View, Text, TouchableOpacity, Button} from 'react-native';
import {CheckBox}from 'native-base';


 export default class CheckButton extends React.Component {
state = { 
   checked: false
}
press = () => {
 this.setState((state) =>({
     checked: !state.checked,
 }));
}



render() {

    return(



<CheckBox

onPress={this.press}
checked={this.state.checked}
style={{height: 40, width:40, borderRadius: 50,borderColor: 'lightslategrey',backgroundColor: 'lightslategrey',justifyContent:'center',alignItems:'center',}}>

</CheckBox>



    ) 
 }
 }

    const styles = {


    allButtonSection:{
flexDirection:'row',
},
container:{
    flexDirection: 'row',
}

}