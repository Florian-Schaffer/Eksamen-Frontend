import React, {useEffect, useState} from "react";
import {BrowserRouter as Router,
Switch,
Route, 
Link,
useParams,
useRouteMatch,
NavLink,
Prompt,
useHistory} from "react-router-dom";
import loggedIn from "./loggedin";

function Owner({facade}){

    const[userInput, setUserInput] = useState({})

    const onChange = (evt) =>{
        setUserInput({ ...userInput, [evt.target.id]: evt.target.value })
    }


    return (
        <div>
            <ul className="owner">
                <h1>Owner Component</h1>
            </ul>

            <br></br>

            
                      

        </div>
    )




}

export default Owner;