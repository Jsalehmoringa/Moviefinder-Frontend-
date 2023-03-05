import React, { useState } from "react";

function Registerpage() {

    const [user_first, SetUser_first] = useState("")
    const [user_last, SetUser_last] = useState("")
    const [user_email, SetUser_email] = useState("")
    const [user_password, SetUser_password] = useState("")

    function handleAdd() {
    fetch(), {
        method: "POST",
    }
    body: JSON.stringify({
        first_name: user_first,
        last_name: user_last,
        email: user_email,
        password: user_password
    })
    }

    return(
        <form onChange={handleAdd}>
            <input placeholder="Insert your first name" onChange={SetUser_first(user_first)}></input>
            <input type="text" placeholder="Insert your last name" onChange={SetUser_last(user_last)}></input>
            <input type="text" placeholder="Insert your email" onChange={SetUser_email(user_email)}></input>
            <input type="text" placeholder="Create your password" onChange={SetUser_password(user_password)}></input>
            <input type="submit"></input>
        </form>
    )
}

export default Registerpage;