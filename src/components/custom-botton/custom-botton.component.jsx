import React from "react";

import './custom-button.styles.scss';

const CustomBotton = ({children, isGoogleSignIn, ...other}) => (
    <button
        className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`}
        {...other}
    >
        {children}
    </button>
)

export default CustomBotton;