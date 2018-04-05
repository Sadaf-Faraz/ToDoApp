import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './src/components/common/Index';
import LoginForm from './src/components/LoginForm';



export default class App extends React.Component {
state ={
loggedIn: false}; 


   componentDidMount(){ //lifecycles methods are methods that are automatically invoked inside of our component. WE must define a method
firebase.initializeApp({
    apiKey: "AIzaSyAfnNksL-pnDKtgQXPthnM7_73B5JAnyjU",
    authDomain: "authentication-ae9ef.firebaseapp.com",
    databaseURL: "https://authentication-ae9ef.firebaseio.com",
    projectId: "authentication-ae9ef",
    storageBucket: "authentication-ae9ef.appspot.com",
    messagingSenderId: "1021831148401",
  });


//onAuthStateChanged is an event handler that handles either signing in or out
  firebase.auth().onAuthStateChanged((user) =>{
if (user) {
    this.setState({loggedIn: true});
} else{
    this.setState({loggedIn: false})
}
   });

   return <LoginForm />;
}


renderContent() {
    if(this.state.loggedIn){
        return(
            <Button> Log Out </Button>
        )
    }
}
   
    render() {
        return (
<View>
          <Header headerText="Sign In" />
          {this.renderContent()}

            </View>
        );
    }
  
};

