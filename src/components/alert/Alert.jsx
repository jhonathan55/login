import React from "react";
//este objeto {message,type} se puede convertir en un props 
const Alert = ({ message, type }) => {
  
    return (
        <>
            <div class={`alert alert-${type}`} role="alert">
                {message}
            </div>
        </>
    )
}
export default Alert;