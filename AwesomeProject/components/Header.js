import React from 'react';
import { Text, View } from 'react-native';



const Header = (props) => {

return (

    <View style={styles.headerContainer}>
<Text style={styles.textStyle}>{props.headerText} </Text> 
</View>

   ); 
};


const styles ={

headerContainer: {
   justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
    height: 70,
    shadowColor: 'black',
   shadowOffset: {width: 0, height: 2},
shadowOpacity: 3,
elevation: 2,
    backgroundColor: 'lightslategrey',
       
},

textStyle: {
  
        fontSize: 25,
      color: 'white',
      elevation: 8,
     


    },
}

export default Header;