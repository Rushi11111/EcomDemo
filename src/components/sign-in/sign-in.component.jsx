import React from "react";
import './sign-in.styles.css'
import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-botton/custom-botton.component";
import {emailSignInStart} from "../../redux/user/user.actions";
import {googleSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";
import {useState} from "react";

const SignIn = ({emailSignInStart,googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email:'',password: ''})

    const handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = userCredentials

        emailSignInStart(email, password)
    }

    const handleChange = e => {
        const {value,name} = e.target;
        setCredentials({
            ...userCredentials,
            [name]:value
        });
    }

    return (
        <div className={'sign-in'}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name={"email"} type={"email"} value={userCredentials.email} label="Email" onChange={handleChange} required />
                <FormInput name={"password"} type={"password"} value={userCredentials.password} label="Password" onChange={handleChange} required />

                <div className={'buttons'}>
                    <CustomBotton type={"submit"}>
                        Sign In
                    </CustomBotton>
                    <CustomBotton onClick={googleSignInStart} type={"button"} isGoogleSignIn>
                        {' ' }Sign In With Google {' '}
                    </CustomBotton>
                </div>
            </form>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null,mapDispatchToProps)(SignIn);