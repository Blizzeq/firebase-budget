import React, {useEffect, useRef, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import {auth, logInWithEmailAndPassword, sendPasswordReset, signInWithGoogle} from "../firebase-config";
import {Button, Form} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {MDBCard} from "mdb-react-ui-kit";
import LoadingScreen from "./LoadingScreen";

function Reset({isLoading, setIsLoading}) {

    const [email, setEmail] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            setIsLoading(true);
            return
        }
        if(loading === false) {
            setIsLoading(false);
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);

    const form = useRef();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            sendPasswordReset(email);
        }

        setValidated(true);
    };

    return (
        <>
            {isLoading ? <LoadingScreen/> :
                <div className={"Login-Container"}>
                    <MDBCard>
                        <Form noValidate validated={validated} ref={form} onSubmit={handleSubmit}
                              className={'Form-Contact'}>

                            <Form.Group className="form-content" controlId="formBasicEmail">
                                <Form.Control required type="email" placeholder="Email" name="user_email" value={email}
                                              onChange={(e) => setEmail(e.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="secondary" type="submit" className='Button-Register'>Send password reset
                                email</Button>
                            <p>Not a member? <LinkContainer to="/register"><a>Register</a></LinkContainer></p>
                        </Form>
                    </MDBCard>
                </div>
            }
        </>
    );
}

export default Reset;
