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


function Dashboard(props) {

    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [budgetName, setBudgetName] = useState("");
    const [budgetAmount, setBudgetAmount] = useState(0);
    const [budgetChange, setBudgetChange] = useState(0);

    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchDataToDB(user);
        fetchUserName(user, setName);
        fetchBudgets(user, setBudgets);

    }, [user, loading,navigate]);


    return (
        <div className={"Dashboard"}>
            <div className={"Dashboard-Header"}>
                {name} <Button variant={"secondary"} onClick={() => logout()}>Logout</Button>
            </div>
        </div>
    );
}

export default Dashboard;
