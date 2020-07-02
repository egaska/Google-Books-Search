  
import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'


function Header() {
    return (
        <Jumbotron>
            <div className="container text-light">
                <h1>Google Books Search</h1>
            </div>
         </Jumbotron>
    );
}

export default Header;