import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import {auth, fetchDataToDB, logout} from "../firebase-config";
import {fetchUserName} from "./Database-Components/FetchUserData";
import {fetchBudgets} from "./Database-Components/FetchBudgets";
import {Button} from "react-bootstrap";
import AddBudgetForm from "./AddBudgetForm";
import DeleteBudgetForm from "./DeleteBudgetForm";
import EditBudgetForm from "./EditBudgetForm";
import {MDBCard} from "mdb-react-ui-kit";
import Summary from "./Summary";
import LoadingScreen from "./LoadingScreen";


function Dashboard({isLoading, setIsLoading}) {

    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [budgetName, setBudgetName] = useState("");
    const [budgetAmount, setBudgetAmount] = useState(0);
    const [totalBudget, setTotalBudget] = useState(0);
    const [addBudget, setAddBudget] = useState(false);
    const [delBudget, setDelBudget] = useState(false);
    const [editBudget, setEditBudget] = useState(false);

    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        if (loading) {
            setIsLoading(true);
            return
        }
        if (loading === false) {
            setIsLoading(false);
        }
        if (!user) return navigate("/");
        fetchDataToDB(user);
        fetchUserName(user, setName);
        fetchBudgets(user, setBudgets);

    }, [user, loading, navigate]);


    return (
        <>
            {isLoading ? <LoadingScreen/> :
                <div className={"Dashboard"}>
                    <div className={"Dashboard-Header"}>
                        {name} <Button variant={"secondary"} onClick={() => logout()}>Logout</Button>
                    </div>
                    <div className={"Dashboard-Menu"}>
                        {addBudget ?
                            <AddBudgetForm addBudget={addBudget} setAddBudget={setAddBudget} user={user}
                                           budgetName={budgetName}
                                           setBudgetName={setBudgetName} budgetAmount={budgetAmount}
                                           setBudgetAmount={setBudgetAmount}
                                           setBudgets={setBudgets}
                                           budgets={budgets} totalBudget={totalBudget} setTotalBudget={setTotalBudget}/>
                            : <div className={"Dashboard-AddBudget"}>
                                <Button variant={"success"} onClick={() => setAddBudget(!addBudget)}>+</Button> <span>Add new Budget</span>
                            </div>}
                        {budgets.length !== 0 && [delBudget ?
                            <DeleteBudgetForm delBudget={delBudget} setDelBudget={setDelBudget} user={user}
                                              budgets={budgets}
                                              setBudgets={setBudgets}/>
                            : <div className={"Dashboard-DeleteBudget"}>
                                <Button variant={"danger"} onClick={() => setDelBudget(!delBudget)}>-</Button> <span>Delete existing Budget</span>
                            </div>]}
                        {budgets.length !== 0 && [editBudget ?
                            <EditBudgetForm user={user} budgets={budgets} setBudgets={setBudgets}
                                            budgetName={budgetName}
                                            setBudgetName={setBudgetName} editBudget={editBudget}
                                            setEditBudget={setEditBudget}
                                            budgetAmount={budgetAmount} setBudgetAmount={setBudgetAmount}
                                            totalBudget={totalBudget}
                                            setTotalBudget={setTotalBudget}/>
                            : <div className={"Dashboard-EditBudget"}>
                                <Button variant={"warning"} onClick={() => setEditBudget(!editBudget)}>✎</Button> <span>Edit existing Budget</span>
                            </div>]}
                    </div>
                    {budgets.length !== 0 &&
                        [budgets.map((budget, index) => {
                            return <div className={"Dashboard-Budget"} key={index}>
                                <MDBCard>
                                    <p className={'Budget-Name'}>{budget.name}</p>
                                    <p className={'Budget-Category'}>{budget.category}</p>
                                    <p className={'Budget-Amount'}>{budget.amount}/{budget.totalBudget}</p>
                                </MDBCard>
                            </div>
                        })]
                    }
                    <Summary budgets={budgets}/>
                </div>
            }
        </>
    );
}

export default Dashboard;
