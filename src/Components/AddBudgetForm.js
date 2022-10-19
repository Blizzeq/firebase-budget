import React, {useState} from 'react';
import {MDBCard} from "mdb-react-ui-kit";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {createBudget} from "./Database-Components/CreateBudget";

function AddBudgetForm({user, addBudget, setAddBudget, budgets, setBudgets, setBudgetName, setBudgetAmount, budgetName, budgetAmount}) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            createBudget(user, budgetName, setBudgets, budgetAmount, budgets, addBudget, setAddBudget);
        }

        setValidated(true);
    };

    return (
        <div className={"Dashboard-AddBudget-Form"}>
            <MDBCard>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className={"createBudgetForm"}>
                    <FloatingLabel
                        controlId="floatingBudget"
                        label="Budget Name"
                    >
                        <Form.Control type="text" placeholder="Budget"
                                      onChange={(e) => setBudgetName(e.target.value)} required/>
                        <Form.Control.Feedback>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a name for your budget.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingAmount" label="Amount">
                        <Form.Control type="number" placeholder="Amount"
                                      onChange={(e) => setBudgetAmount(e.target.valueAsNumber)} required/>
                        <Form.Control.Feedback>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a amount.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <Button variant={"success"} type={"submit"} className={'btn-submit'}>Add Budget</Button>
                    <Button variant={"danger"} onClick={() => setAddBudget(!addBudget)} className={'btn-cancel'}>Cancel</Button>
                </Form>
            </MDBCard>
        </div>
    );
}

export default AddBudgetForm;
