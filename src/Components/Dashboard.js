import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import {auth, fetchDataToDB, logout} from "../firebase-config";
import {fetchUserName} from "./Database-Components/FetchUserData";
import {fetchBudgets} from "./Database-Components/FetchBudgets";
import {createBudget} from "./Database-Components/CreateBudget";
import {deleteBudget} from "./Database-Components/DeleteBudget";
import {updateBudget} from "./Database-Components/UpdateBudget";
import {Button} from "react-bootstrap";
import AddBudgetForm from "./AddBudgetForm";
import DeleteBudgetForm from "./DeleteBudgetForm";
import EditBudgetForm from "./Database-Components/EditBudgetForm";


function Dashboard() {

    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [budgetName, setBudgetName] = useState("");
    const [budgetAmount, setBudgetAmount] = useState(0);
    const [budgetChange, setBudgetChange] = useState(0);
    const [addBudget, setAddBudget] = useState(false);
    const [delBudget, setDelBudget] = useState(false);
    const [editBudget, setEditBudget] = useState(false);

    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchDataToDB(user);
        fetchUserName(user, setName);
        fetchBudgets(user, setBudgets);

    }, [user, loading, navigate, budgets]);


    return (
        <div className={"Dashboard"}>
            <div className={"Dashboard-Header"}>
                {name} <Button variant={"secondary"} onClick={() => logout()}>Logout</Button>
            </div>
            <div className={"Dashboard-Body"}>
                {addBudget ?
                    <AddBudgetForm addBudget={addBudget} setAddBudget={setAddBudget} user={user} budgetName={budgetName}
                                   setBudgetName={setBudgetName} budgetAmount={budgetAmount}
                                   setBudgetAmount={setBudgetAmount} budgetChange={budgetChange}
                                   setBudgetChange={setBudgetChange} createBudget={createBudget} setBudgets={setBudgets}
                                   budgets={budgets}/>
                    : <div className={"Dashboard-AddBudget"}>
                        <Button variant={"success"} onClick={() => setAddBudget(!addBudget)}>+</Button> <span>Add new Budget</span>
                    </div>}
                {budgets.length !== 0 && [delBudget ? <DeleteBudgetForm delBudget={delBudget} setDelBudget={setDelBudget} user={user} budgets={budgets} setBudgets={setBudgets}/>
                        : <div className={"Dashboard-DeleteBudget"}>
                            <Button variant={"danger"} onClick={() => setDelBudget(!delBudget)}>-</Button> <span>Delete existing Budget</span>
                        </div>]}
                {budgets.length !== 0 && [editBudget ? <EditBudgetForm user={user} budgets={budgets} setBudgets={setBudgets} budgetName={budgetName} setBudgetName={setBudgetName} editBudget={editBudget} setEditBudget={setEditBudget} budgetAmount={budgetAmount} setBudgetAmount={setBudgetAmount} />
                : <div className={"Dashboard-EditBudget"}>
                        <Button variant={"warning"} onClick={() => setEditBudget(!editBudget)}>✎</Button> <span>Edit existing Budget</span>
                    </div>]}
            </div>
        </div>
    );
}

export default Dashboard;
