import React, {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

import {
    MDBCard
} from 'mdb-react-ui-kit';
import {LinkContainer} from "react-router-bootstrap";
import {Button, Form} from "react-bootstrap";

const LoginScreen = () =>  {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading, navigate]);

    const form = useRef();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            logInWithEmailAndPassword(email, password);
        }

        setValidated(true);
    };

    return (
        <div className={"Login-Container"}>
            <MDBCard>
                <Form noValidate validated={validated} ref={form} onSubmit={handleSubmit}
                      className={'Form-Contact'}>

                    <Form.Group className="form-content" controlId="formBasicEmail">
                        <Form.Control required type="email" placeholder="Email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="form-content" controlId="formBasicPassword">
                        <Form.Control required type="password" placeholder="Password" name="user_password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <LinkContainer to="/reset">
                    <a>Forgot password?</a>
                    </LinkContainer>
                    <Button variant="secondary" type="submit" className={'Button-Login'}>
                        Login
                    </Button>
                    <p>Not a member? <LinkContainer to="/register"><a>Register</a></LinkContainer></p>
                    <p>or sign up with:</p>
                    <Button onClick={signInWithGoogle} className='Button-Register' variant={'secondary'}>
                        Google
                    </Button>
                </Form>
            </MDBCard>
        </div>
    );
}


export default LoginScreen;
