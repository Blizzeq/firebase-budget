import React, {useEffect, useRef, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import {auth, logInWithEmailAndPassword, sendPasswordReset, signInWithGoogle} from "../firebase-config";
import {Button, Form} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {MDBCard} from "mdb-react-ui-kit";
import LoadingScreen from "./LoadingScreen";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {resetPasswordValidation} from "./FormValidation";

function Reset({isLoading, setIsLoading}) {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            setIsLoading(true);
            return
        }
        if (loading === false) {
            setIsLoading(false);
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);

    const form = useRef();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(resetPasswordValidation)
    });

    const onSubmit = (data) => {
        sendPasswordReset(data.Email);
    }

    return (
        <>
            {isLoading ? <LoadingScreen/> :
                <div className={"Login-Container"}>
                    <MDBCard>
                        <Form ref={form} onSubmit={handleSubmit(onSubmit)} className={'Form-Contact'}>
                            <Form.Group className="form-content" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Email" name="user_email" {...register("Email")}/>
                                <p>{errors.Email?.message}</p>
                            </Form.Group>
                            <Button variant="secondary" type="submit" className='Button-Register'>Send password reset
                                email</Button>
                            <p>Already have account? <LinkContainer to={'/login'}>
                                <a>Login</a>
                            </LinkContainer></p>
                            <p>Not a member? <LinkContainer to="/register"><a>Register</a></LinkContainer></p>
                        </Form>
                    </MDBCard>
                </div>
            }
        </>
    );
}

export default Reset;
