import React, {useState} from 'react';
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {updateBudget} from "./UpdateBudget";
import {MDBCard} from "mdb-react-ui-kit";


function EditBudgetForm({user, budgets, setBudgets, budgetName, setBudgetName, editBudget, setEditBudget, budgetAmount, setBudgetAmount}) {

    const [validated, setValidated] = useState(false);

    const [selectedBudget, setSelectedBudget] = useState(budgets[0].name);

    const [selectedCategory, setSelectedCategory] = useState(budgets[0].category);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            updateBudget(user, budgetName, setBudgets, selectedCategory, budgetAmount, selectedBudget);
            setEditBudget(false);
        }
        setValidated(true);
    };


    return (
        <div className={'Dashboard-EditBudget-Form'}>
            <MDBCard>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className={"editBudgetForm"}>
                    <p className={'edit-info'}>Select budget</p>
                    <Form.Select aria-label="Default select example" value={selectedBudget}
                                 onChange={(e) => setSelectedBudget(e.target.value)}>
                        {budgets.map((budget, key) => (
                            <option key={key} id={budget.budgetId} value={budget.name}>{budget.name}</option>
                        ))}
                    </Form.Select>
                    <FloatingLabel
                        controlId="floatingBudget"
                        label={selectedBudget}
                    >
                        <Form.Control type="text" placeholder="Budget"
                                      onChange={(e) => setBudgetName(e.target.value)} required/>
                        <Form.Control.Feedback>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a new name.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <Form.Select aria-label="Default select example" onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option>
                            {budgets.map((budget) => (
                                [budget.name === selectedBudget && budget.category]
                            ))}
                        </option>
                        <option value={'Housing'}>Housing</option>
                        <option value={'Transportation'}>Transportation</option>
                        <option value={'Food'}>Food</option>
                        <option value={'Utilities'}>Utilities</option>
                        <option value={'Insurance'}>Insurance</option>
                        <option value={'Medical/Dental'}>Medical/Dental</option>
                        <option value={'Savings'}>Savings</option>
                        <option value={'Other'}>Other</option>
                    </Form.Select>
                    <FloatingLabel controlId="floatingAmount"
                                   label={budgets.map((budget) => (
                                      [budget.name === selectedBudget && budget.amount]
                                   ))}
                    >
                        <Form.Control type="number" placeholder="Amount"
                                      onChange={(e) => setBudgetAmount(e.target.valueAsNumber)} required
                        />
                        <Form.Control.Feedback>
                            Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a new amount.
                        </Form.Control.Feedback>
                    </FloatingLabel>
                    <Button variant={"success"} type={"submit"} className={'btn-edit'}>Edit Budget</Button>
                    <Button variant={"danger"} onClick={() => setEditBudget(!editBudget)}
                            className={'btn-cancel'}>Cancel</Button>
                </Form>
            </MDBCard>
        </div>
    );
}

export default EditBudgetForm;
