import React from 'react';
import {Alert, View, Text, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';
import CheckButton from './buttons/CheckButton';
export default class Items extends React.Component {

render() {
    return(
 <View style={styles.container}>

<View key={this.props.keyval} style={styles.Items}>
    
      <View style={styles.allButtonSection}> 
   



     <Text style={styles.itemText}>{this.props.val.items} 
</Text>
 
    

 <TouchableOpacity 
onPress={this.props.deleteMethod} 
style={styles.itemDelete}>
<Icon name='trash'/>
        </TouchableOpacity>


  
     <CheckButton />
   
    
 </View>
</View>
</View>
     

    )
}
 }

const styles = {
    itemText: {
    fontSize: 20,

 },
 
itemDelete:{
justifyContent: 'center',
alignItems: 'center',
width: 50,
height: 50,
borderRadius: 50,
right: 10,
position: 'absolute',

},
allButtonSection:{
flexDirection:'row',
borderBottomWidth: 2,
borderBottomColor: '#ededed',
position: 'relative',
},


container:{
padding: 5, 
}
}


  
    