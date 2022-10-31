import React, {useState} from 'react';
import {MDBCard} from "mdb-react-ui-kit";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import {createBudget} from "./Database-Components/CreateBudget";
import BudgetAlert from "./BudgetAlert";
import {useForm} from "react-hook-form";
import {addBudgetValidation} from "./FormValidation";
import {yupResolver} from "@hookform/resolvers/yup";

function AddBudgetForm({
                           user,
                           addBudget,
                           setAddBudget,
                           budgets,
                           setBudgets
                       }) {
    const [showBudgetAlert, setShowBudgetAlert] = useState(false);

    const handleAlertShow = () => {
        setShowBudgetAlert(true);
        setTimeout(() => {
            setShowBudgetAlert(false);
        }, 2500);
    }

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(addBudgetValidation)
    });

    const onSubmit = (data) => {
        if (data.BudgetAmount > data.TotalBudget) {
            handleAlertShow();
        } else {
            createBudget(user, data.BudgetName, setBudgets, data.BudgetAmount, budgets, addBudget, setAddBudget, data.BudgetCategory, data.TotalBudget);
        }
    }

    return (
        <div className={"Dashboard-AddBudget-Form"}>
            <MDBCard>
                {showBudgetAlert && <BudgetAlert/>}
                <Form onSubmit={handleSubmit(onSubmit)} className={"createBudgetForm"}>
                    <p className={'edit-info'}>Enter budget name</p>
                    <FloatingLabel
                        controlId="floatingBudget"
                        label="Budget Name"
                    >
                        <Form.Control type="text" placeholder="Budget"
                            {...register("BudgetName")}/>
                        <p className={"error"}>{errors.BudgetName?.message}</p>
                    </FloatingLabel>
                    <p className={'edit-info'}>Select budget category</p>
                    <Form.Select aria-label="Default select example"
                                 {...register("BudgetCategory")}>
                        <option value={"Other"}>Other</option>
                        <option value={"Housing"}>Housing</option>
                        <option value={"Transportation"}>Transportation</option>
                        <option value={"Food"}>Food</option>
                        <option value={"Utilities"}>Utilities</option>
                        <option value={"Insurance"}>Insurance</option>
                        <option value={"Medical/Dental"}>Medical/Dental</option>
                        <option value={"Savings"}>Savings</option>
                    </Form.Select>
                    <p className={"error"}>{errors.BudgetCategory?.message}</p>
                    <p className={'edit-info'}>Enter current budget amount</p>
                    <FloatingLabel controlId="floatingAmount" label="Current Amount">
                        <Form.Control type="number" placeholder="Amount"
                            {...register("BudgetAmount")}/>
                        <p className={"error"}>{errors.BudgetAmount?.message}</p>
                    </FloatingLabel>
                    <p className={'edit-info'}>Enter maximum budget amount</p>
                    <FloatingLabel controlId="floatingAmount" label="Maximum Amount">
                        <Form.Control type="number" placeholder="Amount"
                            {...register("TotalBudget")}/>
                        <p className={"error"}>{errors.TotalBudget?.message}</p>
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
