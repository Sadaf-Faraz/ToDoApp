import React from 'react';
import {TextInput, View, Text } from 'react-native';

// the code right below means we are recieving the label, value, and on change text 
const Input =({ label, value, onChangeText, placeholder, secureTextEntry}) => {
return (
    <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}</Text>

<TextInput 
secureTextEntry={secureTextEntry}
placeholder={placeholder}
autoCorrect = {false}
value={value}
onChangeText={onChangeText}
style={styles.inputStyle}
/>

        </View>

      
)
};

const styles={
inputStyle: {
    color: '#000',
    paddingRight: 5, 
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23, //how much space is in between each line of text
    flex: 2, //how we proportion each space for each sibling, 2 + 1 = 3 2/3 of the available space will be allocated to the input style and 1/3 will be allocated to the label style

},
labelStyle:{
    fontSize: 18,
    paddingLeft: 20,
    flex: 1 
},
containerStyle:{
    height: 40,
    flex: 1, 
    flexDirection: 'row', //this lets the text and the label to be in one line
    alignItems: 'center'
},
};



export { Input };

//label is a prop