import React from "react";

import './sign-in.styles.css'

import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-botton/custom-botton.component";

import {auth,signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(err) {
            console.log(err);
        }


    }

    handleChange = e => {
        const {value,name} = e.target;
        this.setState({[name]:value});
    }

    render() {
        return (
            <div className={'sign-in'}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name={"email"} type={"email"} value={this.state.email} label="Email" onChange={this.handleChange} required />
                    <FormInput name={"password"} type={"password"} value={this.state.password} label="Password" onChange={this.handleChange} required />

                    <div className={'buttons'}>
                        <CustomBotton type={"submit"}>
                            Sign In
                        </CustomBotton>
                        <CustomBotton onClick={signInWithGoogle} type={"button"} isGoogleSignIn>
                            {' ' }Sign In With Google {' '}
                        </CustomBotton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;