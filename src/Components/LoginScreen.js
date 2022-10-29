import React, {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { MDBCard } from 'mdb-react-ui-kit';
import {LinkContainer} from "react-router-bootstrap";
import {Button, Form} from "react-bootstrap";
import LoadingScreen from "./LoadingScreen";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {loginScreenValidation} from "./FormValidation";

const LoginScreen = ({isLoading, setIsLoading}) =>  {


    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            setIsLoading(true);
            return;
        }

        if(loading === false) {
            setIsLoading(false);
        }

        if (user){
            navigate("/dashboard", { replace: true });
        }
    }, [user, loading, navigate]);

    const form = useRef();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginScreenValidation)
    });

    const onSubmit = (data) => {
        logInWithEmailAndPassword(data.Email, data.Password);
    }


    return (
        <>
        {isLoading ? <LoadingScreen/> :
                <div className={"Login-Container"}>
                    <MDBCard>
                        <Form noValidate  ref={form} onSubmit={handleSubmit(onSubmit)} className={'Form-Contact'}>

                            <Form.Group className="form-content" controlId="formBasicEmail">
                                <Form.Control required type="text" placeholder="Email" name="user_email" {...register("Email")}/>
                                <p>{errors.Email?.message}</p>
                            </Form.Group>

                            <Form.Group className="form-content" controlId="formBasicPassword">
                                <Form.Control required type="password" placeholder="Password" name="user_password" {...register("Password")}/>
                                <p>{errors.Password?.message}</p>
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
        }
        </>
    );
}


export default LoginScreen;
