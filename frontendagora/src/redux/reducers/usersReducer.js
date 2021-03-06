import ACTIONS from "../actions/";

const users = [];

const usersReducer = (state = users, action) => {
    switch(action.type){
        case ACTIONS.GET_ALL_USERS:
            return action.payload
        case ACTIONS.GET_ALL_STUDENTS:
            return action.payload
        default:
            return state
    }
}

export default usersReducer;
