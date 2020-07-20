import userTypes from "./user.types";
import { Reducer } from "redux";


type initialStateType = {
    currentUser: null,
    resetPasswordSuccess: boolean,
    userErr: []
};

const INITIAL_STATE: initialStateType = {
    currentUser: null,
    resetPasswordSuccess: false,
    userErr: []
};


const userReducer: Reducer = (state: initialStateType = INITIAL_STATE, action) => {
    switch(action.type) {
        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                userErr: []
            }
        case userTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess: action.payload
            }    
        case userTypes.USER_ERROR: 
            return {
                ...state,
                userErr: action.payload
            }
        case userTypes.RESET_USER_STATE:    
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE
            }    
        default: 
            return state;
    }
};

export default userReducer;