import { USER_SUCCESS } from '../actions/userActions';

const initialState = {
    isLoading: false,
}

const User = (state = initialState, action) =>{
    if(state === null || state === undefined || action === null){
        return { ...state }
    }

    switch(action.type){
        case USER_SUCCESS :
        const userData = action.data;
            return {
                ...state,
                userData
            };
        default:
            return state;
    }

}

export default User;