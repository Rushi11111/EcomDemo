import {userActionTypes} from "./user.types";

export const setCurrentUser = user => ({
    type : userActionTypes.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})

export const signInSuccess = (user) => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
})


export const emailSignInStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})


export const signInFailure = (err) => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: err
})

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (err) => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: err
})

export const signUpStart = (userObj) => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userObj
});

export const signUpSuccess = ({user, additionalData}) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
})

export const signUpFailure = (err) => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: err
})
