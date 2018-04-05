import React from 'react';
import { Text, TouchableOpacity, Button } from 'react-native';



const AddButton = () => {

    return (
        <TouchableOpacity  onPress={this.addItem.bind(this)}
       style={styles.addButton}>
        <Text style={styles.buttonText}>Add</Text> 
        </TouchableOpacity>

    );

}


const styles = {
    addButton: {
        backgroundColor: 'lightcyan',
        width: 70,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonText: {
    }
}

export default AddButton;