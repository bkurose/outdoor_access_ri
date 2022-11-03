import React, { useState } from 'react';
import Login from "./Login"
import Logout from "./Logout"

function Homepage (){

    return (
        <div>
            <h1>Homepage</h1>
                <Login />
                <Logout />
        </div>
    )
}

export default Homepage