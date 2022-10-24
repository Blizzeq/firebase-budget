import {MDBCard} from "mdb-react-ui-kit";
import React, {useEffect, useRef, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword, signInWithGoogle,
} from "../firebase-config";
import {Button, Form} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import LoadingScreen from "./LoadingScreen";

function RegisterScreen({isLoading, setIsLoading}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) {
            setIsLoading(true);
            return
        }
        if (loading === false) {
            setIsLoading(false);
        }
        if (user) navigate('/dashboard', {replace: true})
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
            register();
        }

        setValidated(true);
    };

    return (
        <>
            {isLoading ? <LoadingScreen/> :
                <div className={"Register-Container"}>
                    <MDBCard>
                        <Form noValidate validated={validated} ref={form} onSubmit={handleSubmit}
                              className={'Form-Contact'}>

                            <Form.Group className="form-content" controlId="formBasicName">
                                <Form.Control required type="name" placeholder="Name" name="user_name" value={name}
                                              onChange={(e) => setName(e.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid name.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="form-content" controlId="formBasicEmail">
                                <Form.Control required type="email" placeholder="Email" name="user_email" value={email}
                                              onChange={(e) => setEmail(e.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="form-content" controlId="formBasicPassword">
                                <Form.Control required type="password" placeholder="Password" name="user_password"
                                              value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="secondary" type="submit" className={'Button-Login'}>
                                Register
                            </Button>
                            <p>Already have account? <LinkContainer to={'/login'}>
                                <a>Login</a>
                            </LinkContainer></p>
                            <p>or sign up with:</p>
                            <Button onClick={signInWithGoogle} className='Button-Login' variant={'secondary'}>
                                Google
                            </Button>
                        </Form>
                    </MDBCard>
                </div>
            }
        </>
    );
}

export default RegisterScreen;
