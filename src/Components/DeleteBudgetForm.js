import React, {useState} from 'react';
import {MDBCard} from "mdb-react-ui-kit";
import {Button, Form} from "react-bootstrap";
import {deleteBudget} from "./Database-Components/DeleteBudget";

function DeleteBudgetForm({user, delBudget, setDelBudget, budgets, setBudgets}) {

    const [selectedBudget, setSelectedBudget] = useState(budgets[0].name);

    const handleSubmit = () => {
            deleteBudget(user, selectedBudget, budgets, setBudgets, delBudget, setDelBudget);
    };

    return (
        <div className={"Dashboard-DeleteBudget-Form"}>
            <MDBCard>
                <Form onSubmit={handleSubmit} className={"deleteBudgetForm"}>
                    <p className={'delete-info'}>Select budget</p>
                    <Form.Select aria-label="Default select example" value={selectedBudget} onChange={(e) => setSelectedBudget(e.target.value)}>
                        {budgets.map((budget, key) => (
                            <option key={key} id={budget.budgetId} value={budget.name}>{budget.name}</option>
                        ))}
                    </Form.Select>
                    <Button variant={"success"} type={"submit"} className={'btn-delete'}>Delete Budget</Button>
                    <Button variant={"danger"} onClick={() => setDelBudget(!delBudget)}
                            className={'btn-cancel'}>Cancel</Button>
                </Form>
            </MDBCard>
        </div>
    );
}

export default DeleteBudgetForm;
