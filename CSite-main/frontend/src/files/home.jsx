import React from "react";
import { useSelector, useDispatch } from 'react-redux'

function Home(){
    
    return(
        <div>

            This is Home route and the email is {useSelector((state) => state.Email)}
        </div>
    )
}

export default Home;