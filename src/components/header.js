import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink,
    Prompt, useHistory
} from "react-router-dom";
import loggedIn from "./loggedin";



 const Header = ({facade})=>{
     const history = useHistory();

     const onClick= () => {
         facade.onLogout()
         facade.setCurrentRoles([])
         history.push('/')
     }

    return (
        <div>
            <ul className="header">

                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/auction">Boat Auctions</NavLink></li>
                {facade.hasUserAccess('user') && <li><NavLink activeClassName='active' to='/user'>User</NavLink></li>}
                {facade.hasUserAccess('admin') && <li><NavLink activeClassName="active" to="/admin">Admin</NavLink></li>} 
                {facade.hasUserAccess('owner') && <li><NavLink activeClassName="active" to="/owner">Owner</NavLink></li>}
           
            </ul>
        </div>
    )
}


export default Header;