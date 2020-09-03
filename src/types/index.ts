export type CurrentUserType = {
    currentUser: {
        id: string, 
        email: string, 
        displayName?: string, 
        userRoles: string[], 
        createDate: Date
    }
}

export type CurrentUSrType = {
    id?: string, 
    email?: string, 
    displayName?: string, 
    userRoles?: string[], 
    createDate?: Date
}

export type UserType = {
    user : {
        currentUser: CurrentUSrType,
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

export type ProductDataType = {
    productsData: {
        products: ProductsDataType[]
    }
}

export type ProductsDataType = {
        createdDate: Date,
        documentID: string,
        productAdminUserUID: string,
        productCategory: string,
        productName: string,
        productPrice: string,
        productThumbnail:  string,
        maxQuantity: number,
        quantity: number
} 

export type HideModalType = {
    code: string, message: string, a: null
}

export type FirebaseConfigType = {
    apiKey: string,
    authDomain: string,
    databaseURL: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string
}

export type FormInputType = {
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    type?: string,
    name?: string,
    value?: number | string | undefined,
    placeholder?: string,
    min?: string,
    max?: string,
    step?: string
}

export type FormSelectType = {
    options: { value: string; name: string; }[]; 
    defaultValue?: string,
    handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    label: string,
  }

  export type UserProfileType = {
    props?: React.ReactNode,
    children?: React.ReactNode,
    currentUser: CurrentUSrType
  }