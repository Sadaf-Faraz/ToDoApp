import  React  from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common/Index';


export default class LoginForm extends React.Component{
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
       
};

onButtonPress(){
const {email, password} =this.state; 
//our email and password are available in our state project so we just need to refer this.state.email and this.state.password. Since we are using two properties off the same object, we use the code right above

this.setState({error:'', loading: true }); //resets it to an empty object
//this means that if a user attempts to login a 2nd time, the error message disappears but will come back if its still fails

firebase.auth().signInWithEmailAndPassword(email, password)
.then(this.onLoginSuccess.bind(this)) //clears out spinner
// .catch statement says if this request fails, then we should enter this function into the catch statement
.catch(() => { 
firebase.auth().createUserWithEmailAndPassword(email,password) 
.then(this.onLoginSuccess.bind(this)) 
.catch(this.onLoginFail.bind(this)) 
//shows an error to the user if creating an email and password fails
});
} 
// code above will authenticate our user
//we will use  a method off of firebase to sign the user in 


onLoginFail(){
    this.setState({
        error: 'Authentication FAILED!', loading: false})
};

     onLoginSuccess(){ //when login is sucessful
         this.setState({
email: '', //resets the email and password
password: '', 
loading: false, 
error: ''
         });
     }





//renderButton is another helper function
renderButton () {
if (this.state.loading){ //if currently loading
    return <Spinner size="small" />; //return spinner
}
return ( //OR return button
<Button onPress={this.onButtonPress.bind(this)} > 
Log In 
    </Button>
)};

render(){
    return (
        <Card>
<CardSection>
<Input 
placeholder="username@gmail.com"
label= "Email"
value= {this.state.email}
onChangeText = {email => this.setState ({email})} />


</CardSection>

<CardSection>

    <Input
    secureTextEntry={true}
    placeholder="password"
    label="Password"
    value= {this.state.password}
    onChangeText = {password => this.setState ({password})} />
</CardSection>


<Text
style={styles.errorTextStyle}>
    {this.state.error}</Text> 

<CardSection />

<CardSection>

{this.renderButton()}


</CardSection>

            </Card>
    );
}


}
const styles = {
errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
}
};


//<Button onPress={this.onButtonPress.bind(this)} > 
//the code above is a helper method. We use bind(this) because this function that will be called sometime in the future 
//MORE INFO ON THE MEANING BELOW
//sometime in the future you are going to bind your context to this