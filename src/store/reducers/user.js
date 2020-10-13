export const userType = {}
userType.SET_USER = "SET_USER"

const initialState = {
    user : {}
}

export default function userReducer  (state = initialState , action) {
    switch (action.type) {
        case userType.SET_USER:
            return{
                ...state,
                user: action.payload
            }
            
    
        default:
            return state
    }
}