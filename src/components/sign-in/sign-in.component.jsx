import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email , password} = this.state;
        
        try {
           await auth.signInWithEmailAndPassword(email, password);
           this.setState({
               email: '',
               password: ''
           });
        } catch (error) {
            console.error(error);
        }

        // Reset the form fields
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        });
    }

    render () {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        handleChange={this.handleChange} 
                        type="email"
                        name="email"
                        value={this.state.email}
                        required />
                    <FormInput
                        label="Password"
                        handleChange={this.handleChange} 
                        type="password"
                        name="password"
                        value={this.state.password}
                        required />
                    <div className="buttons">
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={SignInWithGoogle}  isGoogleSignIn 
                        type="submit" >Sign In With Google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}
export default SignIn;