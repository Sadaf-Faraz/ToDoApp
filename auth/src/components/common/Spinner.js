import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = ({size}) =>{
    return (
        <View style={styles.spinnerStyle}> 
            <ActivityIndicator size={size || 'large'} />  //if we did not specify the size of our spinner then we will get a large spinner
            </View>
    );
};


const styles= {
 spinnerStyle: {
 flex: 1, //to fill the whole screen
 jusitfyContent: 'center',
 alignItems: 'center',
 }
};

export { Spinner };


//<ActivityIndicator size={size || 'large'} />  this means that if we did not specify the size of our spinner then we will get a large spinner

