import React, {useState} from 'react';
import {MDBCard} from "mdb-react-ui-kit";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {createBudget} from "./Database-Components/CreateBudget";

function AddBudgetForm({
                           user,
                           addBudget,
                           setAddBudget,
                           budgets,
                           setBudgets,
                           setBudgetName,
                           setBudgetAmount,
                           budgetName,
                           budgetAmount,
                           totalBudget,
                           setTotalBudget})
{
    const [validated, setValidated] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState("Other");

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            createBudget(user, budgetName, setBudgets, budgetAmount, budgets, addBudget, setAddBudget, selectedCategory, totalBudget);
        }

        setValidated(true);
    };

    return (
        <div className={"Dashboard-AddBudget-Form"}>
            <MDBCard>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className={"createBudgetForm"}>
                    <p className={'edit-info'}>Enter budget name</p>
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
                    <p className={'edit-info'}>Select budget category</p>
                    <Form.Select aria-label="Default select example"
                                 onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option>Select category</option>
                        <option value={"Housing"}>Housing</option>
                        <option value={"Transportation"}>Transportation</option>
                        <option value={"Food"}>Food</option>
                        <option value={"Utilities"}>Utilities</option>
                        <option value={"Insurance"}>Insurance</option>
                        <option value={"Medical/Dental"}>Medical/Dental</option>
                        <option value={"Savings"}>Savings</option>
                        <option value={"Other"}>Other</option>
                    </Form.Select>
                    <p className={'edit-info'}>Enter current budget amount</p>
                    <FloatingLabel controlId="floatingAmount" label="Current Amount">
                        <Form.Control type="number" placeholder="Amount"
                                      onChange={(e) => setBudgetAmount(e.target.valueAsNumber)} required/>
                        <Form.Control.Feedback>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid amount.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <p className={'edit-info'}>Enter maximum budget amount</p>
                    <FloatingLabel controlId="floatingAmount" label="Maximum Amount">
                        <Form.Control type="number" placeholder="Amount"
                                      onChange={(e) => setTotalBudget(e.target.valueAsNumber)} required/>
                        <Form.Control.Feedback>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid total amount.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <Button variant={"success"} type={"submit"} className={'btn-submit'}>Add Budget</Button>
                    <Button variant={"danger"} onClick={() => setAddBudget(!addBudget)}
                            className={'btn-cancel'}>Cancel</Button>
                </Form>
            </MDBCard>
        </div>
    );
}

export default AddBudgetForm;
