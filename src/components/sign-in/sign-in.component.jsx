import React from "react";
import './sign-in.styles.css'
import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-botton/custom-botton.component";
import {emailSignInStart} from "../../redux/user/user.actions";
import {googleSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

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
        const {emailSignInStart} = this.props;

        emailSignInStart(email, password)
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
                        <CustomBotton onClick={this.props.googleSignInStart} type={"button"} isGoogleSignIn>
                            {' ' }Sign In With Google {' '}
                        </CustomBotton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null,mapDispatchToProps)(SignIn);