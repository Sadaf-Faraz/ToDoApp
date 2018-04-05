//Import libraries for making component

import React from 'react';
import { Text, View } from 'react-native';


//Make a component

const Header = (props) => {
    const { textStyle, viewStyle } =styles;


return (
<View style={viewStyle}>
<Text style={textStyle}>{props.headerText}</Text>
</View> 
);
};



const styles =  {
    viewStyle: {
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
    fontSize: 20,
    color: 'white',
}

};

//Make the component available to other parts of the app 


export { Header };