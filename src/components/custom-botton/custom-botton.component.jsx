import React from "react";

import './custom-button.styles.scss';

const CustomBotton = ({children, isGoogleSignIn, inverted = false, ...other}) => (
    <button
        className={`${inverted ? 'inverted':''} ${isGoogleSignIn ? 'google-sign-in':''} custom-button`}
        {...other}
    >
        {children}
    </button>
)

export default CustomBotton;