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
import {yupResolver} from "@hookform/resolvers/yup";
import {registerScreenValidation} from "./FormValidation";
import {useForm} from "react-hook-form";

function RegisterScreen({isLoading, setIsLoading}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        if (user) navigate('/dashboard', {replace: true})
    }, [user, loading, navigate]);

    const form = useRef();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(registerScreenValidation)
    });

    const onSubmit = async (data) => {
        registerWithEmailAndPassword(data.Name, data.Email, data.Password);
    };

    return (
        <>
            {isLoading ? <LoadingScreen/> :
                <div className={"Register-Container"}>
                    <MDBCard>
                        <Form ref={form} onSubmit={handleSubmit(onSubmit)} className={'Form-Contact'}>
                            <Form.Group className="form-content" controlId="formBasicName">
                                <Form.Control type="name" placeholder="Name" name="user_name" {...register("Name")}/>
                                <p>{errors.Name?.message}</p>
                            </Form.Group>

                            <Form.Group className="form-content" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Email" name="user_email" {...register("Email")}/>
                                <p>{errors.Email?.message}</p>
                            </Form.Group>

                            <Form.Group className="form-content" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" name="user_password" {...register("Password")}/>
                                <p>{errors.Password?.message}</p>
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
