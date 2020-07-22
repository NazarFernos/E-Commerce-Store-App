const userTypes = {
    EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    CHECK_USER_SESSION: 'CHECK_USER_SESSION',
    SIGN_OUT_USER_START: 'SIGN_OUT_USER_START',
    SIGN_OUT_USER_SUCCESS: 'SIGN_OUT_USER_SUCCESS',
    SIGN_UP_USER_START: 'SIGN_UP_USER_START',
    RESET_PASSWORD_START: 'RESET_PASSWORD_START',
    RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
    GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
    USER_ERROR: 'USER_ERROR',
    RESET_USER_STATE: 'RESET_USER_STATE',
};

export interface UserCredentials {
    email: string,
    password: string
}


export interface SignUpUserCredentials {
    displayName: string,
    email: string,
    password: string,
    confirmPassword: string
}


export interface Error {
    err?: string[]
}

export interface ResetPasswordStartCredentials {
    email: string
}


export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const CHECK_USER_SESSION = 'CHECK_USER_SESSION';
export const SIGN_OUT_USER_START = 'SIGN_OUT_USER_START';
export const SIGN_OUT_USER_SUCCESS = 'SIGN_OUT_USER_SUCCESS';
export const SIGN_UP_USER_START = 'SIGN_UP_USER_START';
export const USER_ERROR = 'USER_ERROR';
export const RESET_PASSWORD_START = 'RESET_PASSWORD_START';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_USER_STATE = 'RESET_USER_STATE';
export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';


interface EmailSignInAction {
    type: typeof EMAIL_SIGN_IN_START,
    payload: UserCredentials
};

interface CheckUserSessionAction {
    type: typeof CHECK_USER_SESSION
};

interface SignOutUserStartAction {
    type: typeof SIGN_OUT_USER_START
};

interface SignOutUserSuccessAction {
    type: typeof SIGN_OUT_USER_SUCCESS
};

interface SignUpUserStartAction {
    type: typeof SIGN_UP_USER_START,
    payload: SignUpUserCredentials
};

interface UserErrorAction {
    type: typeof USER_ERROR,
    payload: Error
};

interface ResetPasswordStartAction {
    type: typeof RESET_PASSWORD_START,
    payload: ResetPasswordStartCredentials
};

interface ResetPasswordSuccessAction {
    type: typeof RESET_PASSWORD_SUCCESS,
    payload: boolean
};

interface ResetUserStateAction {
    type: typeof RESET_USER_STATE
};

interface GoogleSignInStartAction {
    type: typeof GOOGLE_SIGN_IN_START
};

export type EmailSignIn = EmailSignInAction;
export type CheckUserSession = CheckUserSessionAction;
export type SignOutUserStart = SignOutUserStartAction;
export type SignOutUserSuccess = SignOutUserSuccessAction;
export type SignUpUserStart = SignUpUserStartAction;
export type UserError = UserErrorAction;
export type ResetPasswordStart = ResetPasswordStartAction;
export type ResetPasswordSuccess = ResetPasswordSuccessAction;
export type ResetUserState = ResetUserStateAction;
export type GoogleSignInStart = GoogleSignInStartAction;

export default userTypes;