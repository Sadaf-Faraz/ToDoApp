import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({onPress, children}) => {
    return ( 
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}> {children} </Text>
    </TouchableOpacity>
    );
};


const styles ={
    textStyle:{
alignSelf: 'center',
color: 'white',
fontSize: 16,
fontWeight: '600',
paddingTop: 10,
paddingBottom: 10
    },

    buttonStyle: {
flex: 1, //expands as content as it can
alignSelf: 'center', //element to position itself using flexbox rules
backgroundColor: 'lightslategrey',
borderRadius: 40, 
borderWidth: 1, 
borderColor: 'lightslategrey',
marginLeft: 5,
marginRight: 5, 
shadowOffset: {width: 0, height: 2},
shadowOpacity: 0.5,
elevation: 2,


    }
}
export { Button };