import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Logout(){

    const {logout} = useAuth0();

    return(
        <div>
            <button onClick={() => logout({returnTo: window.location.origin})}>
                <p>Logout</p>
            </button>
        </div>
    )
}