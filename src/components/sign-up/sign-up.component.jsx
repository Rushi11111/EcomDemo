import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomBotton from "../custom-botton/custom-botton.component";
import './sign-up.styles.css';
import {signUpStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

const SignUp = ({signUp}) => {
    const [formInput,setFormInput] = useState({
                                                  displayName: '',
                                                  email: '',
                                                  password: '',
                                                  confirmPassword: ''
                                              });

    const handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = formInput;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            signUp({email: email, password: password,displayName: displayName})

        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setFormInput({
            ...formInput,
            [name]: value }
        );
    };

    const { displayName, email, password, confirmPassword } = formInput;
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomBotton type='submit'>SIGN UP</CustomBotton>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUp: userObj => dispatch(signUpStart(userObj))
})

export default connect(null,mapDispatchToProps)(SignUp);