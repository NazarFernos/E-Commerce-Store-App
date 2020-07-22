export type CurrentUserType = {
    currentUser: {
        id: string, 
        email: string, 
        displayName: string, 
        userRoles: string[], 
        createDate: Date
    }
}

export type UserType = {
    user : {
        currentUser: CurrentUserType,
        resetPasswordSuccess: boolean,
        userErr?: string[]
    }
}

export type ConfigAuthWrapperType = {
    headline: string
}

export type EmailSignInType = {
    payload: {
        email: string,
        password: string
    }
 }

 export type ResetPasswordType = {
    payload: {
        email: string,
    }
 }

 export type SignUpUserType = {
    payload: {
        displayName: string,
        email: string,
        password: string,
        confirmPassword: string
    }
 }