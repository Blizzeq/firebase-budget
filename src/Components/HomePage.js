import React from 'react';
import {MDBBtn} from "mdb-react-ui-kit";
import {LinkContainer} from "react-router-bootstrap";

function HomePage() {
    return (
        <div className={"Home-Container"}>
            <div className={"Home-Title"}>
                Welcome to the Budget App
            </div>
            <div className={"Home-Subtitle"}>
                Manage your budget with us
            </div>
            <div className={"Home-Text"}>
                Login to continue
            </div>
            <div className={"Home-Login-Button"}>
                <LinkContainer to="/login">
                    <MDBBtn color={"secondary"}>Login</MDBBtn>
                </LinkContainer>
            </div>
        </div>
    );
}

export default HomePage;
