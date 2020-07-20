import userTypes, { UserCredentials, EmailSignIn, EMAIL_SIGN_IN_START, SignUpUserCredentials, SignUpUserStart, SIGN_UP_USER_START, Error, UserError, USER_ERROR, CHECK_USER_SESSION, CheckUserSession, SignOutUserStart, SIGN_OUT_USER_START, SignOutUserSuccess, SIGN_OUT_USER_SUCCESS, ResetPasswordStartCredentials, ResetPasswordStart, RESET_PASSWORD_START, ResetPasswordSuccess, RESET_PASSWORD_SUCCESS, ResetUserState, RESET_USER_STATE, GoogleSignInStart, GOOGLE_SIGN_IN_START } from "./user.types";
import { auth, handleUserProfile, GoogleProvider } from "../../firebase/utils";


export const emailSignInStart = (userCredentials: UserCredentials): EmailSignIn => ({
    type: EMAIL_SIGN_IN_START,
    payload: userCredentials
});


export const signInSuccess = (user: any) => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const checkUserSession = (): CheckUserSession => ({
    type: CHECK_USER_SESSION,
});

export const signOutUserStart = (): SignOutUserStart => ({
    type: SIGN_OUT_USER_START
});

export const signOutUserSuccess = (): SignOutUserSuccess => ({
    type: SIGN_OUT_USER_SUCCESS
});

export const signUpUserStart = (userCredentials: SignUpUserCredentials): SignUpUserStart => ({
    type: SIGN_UP_USER_START,
    payload: userCredentials
});

export const userError = (err: Error): UserError => ({
    type: USER_ERROR,
    payload: err
});

export const resetPasswordStart = (userCredentials: ResetPasswordStartCredentials): ResetPasswordStart => ({
    type: RESET_PASSWORD_START,
    payload: userCredentials
});

export const resetPasswordSuccess = (): ResetPasswordSuccess => ({
    type: RESET_PASSWORD_SUCCESS,
    payload: true
});

export const resetUserState = (): ResetUserState => ({
    type: RESET_USER_STATE
});

export const googleSignInStart = (): GoogleSignInStart => ({
    type: GOOGLE_SIGN_IN_START
});
