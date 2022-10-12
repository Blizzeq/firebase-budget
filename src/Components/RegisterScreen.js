import React, {useState} from 'react';
import {MDBBtn, MDBCard, MDBCardBody,MDBInput} from "mdb-react-ui-kit";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

function RegisterScreen(props) {


    const auth = getAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <div className={"Register-Container"}>
            <MDBCard>
                <MDBCardBody>
                    <form onSubmit={register}>
                        <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>

                        <MDBBtn type='submit' className='mb-4' block>
                            Register
                        </MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}

export default RegisterScreen;
