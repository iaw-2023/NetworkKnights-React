import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export default function Login(){
    const {loginWithRedirect, isAuthenticated} = useAuth0(); 
    const navigate = useNavigate();

    React.useEffect(()=>{
        if (isAuthenticated){
            navigate('/componente1')
        }
    },[isAuthenticated, navigate])

    return(
            <div>
                {!isAuthenticated &&(
                    <button onClick={() => loginWithRedirect()}>
                        <p>Login</p>
                    </button>
                )}
            </div>
    )
}