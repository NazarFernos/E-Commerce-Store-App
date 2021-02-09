import userTypes, { 
    EMAIL_SIGN_IN_START, SIGN_UP_USER_START, USER_ERROR, CHECK_USER_SESSION, 
    SIGN_OUT_USER_START, SIGN_OUT_USER_SUCCESS, RESET_PASSWORD_START, 
    RESET_PASSWORD_SUCCESS, RESET_USER_STATE, GOOGLE_SIGN_IN_START 
} from "./user.types";


export const emailSignInStart = (userCredentials) => ({
    type: EMAIL_SIGN_IN_START,
    payload: userCredentials
});


export const signInSuccess = (user) => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const checkUserSession = () => ({
    type: CHECK_USER_SESSION,
});

export const signOutUserStart = () => ({
    type: SIGN_OUT_USER_START
});

export const signOutUserSuccess = () => ({
    type: SIGN_OUT_USER_SUCCESS
});

export const signUpUserStart = (userCredentials) => ({
    type: SIGN_UP_USER_START,
    payload: userCredentials
});

export const userError = (err) => ({
    type: USER_ERROR,
    payload: err
});

export const resetPasswordStart = (userCredentials) => ({
    type: RESET_PASSWORD_START,
    payload: userCredentials
});

export const resetPasswordSuccess = () => ({
    type: RESET_PASSWORD_SUCCESS,
    payload: true
});

export const resetUserState = () => ({
    type: RESET_USER_STATE
});

export const googleSignInStart = () => ({
    type: GOOGLE_SIGN_IN_START
});
