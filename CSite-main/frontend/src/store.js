import { combineReducers, createStore } from "redux";



function LoggedInReducer(state = false , action){
    switch(action.type){
        case "LogIn":
            return true;
        case "LogOut":
            return false;
        default :
            return state;
    }
}

function EmailReducer(state = null, action){
    switch(action.type){
        case "SetEmail":
            return action.payload;
        case "Logout":
            return null;
        default:
            return state;
    }
}

const rootReducer = combineReducers({LoggedIn: LoggedInReducer, Email: EmailReducer})

const store = createStore(rootReducer);

export default store;


