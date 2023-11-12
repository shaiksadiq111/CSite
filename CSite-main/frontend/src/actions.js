
export const LogInAction = () => {
    return ({
        type : "LogIn"
    })
    
}

export const LogOutAction = () => {
    return ({
        type: "LogOut"
    })
    
}

export const setEmail = (email) => {
    // console.log("i am called"); 
    return ({
        type : "SetEmail",
        payload: email
    }) 
}