import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import {auth, db, logout} from "../firebase-config";
import {query, collection, getDocs, where, updateDoc, addDoc, deleteDoc} from "firebase/firestore";
import {uuid} from "uuidv4";




function Dashboard(props) {

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [budgetName, setBudgetName] = useState("");
    const [budgetAmount, setBudgetAmount] = useState(0);
    const [budgetChange, setBudgetChange] = useState(0);

    const [budgets, setBudgets] = useState([]);


    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            setName(user.displayName);
            console.error(err);
            console.log("Error fetching user name");
        }
    };

    const createBudget = async (budgetName, budgetAmount) => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const querySnapshot = await getDocs(collection(db, "users", doc.docs[0].id, "budgets"));
            const data = querySnapshot.docs.map(doc => doc.data());
            const budgetNames = data.map(budget => budget.name);
            await addDoc(collection(db, "users", doc.docs[0].id, "budgets"), {
                uid: user.uid,
                budgetId: uuid(),
                name: budgetName,
                amount: budgetAmount,
            });
            setBudgets([...budgets, {name: budgetName, amount: budgetAmount}]);
        } catch (err) {
            console.error(err);
            console.log("Error creating budget");
        }
    };

    const fetchBudgets = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const querySnapshot = await getDocs(collection(db, "users", doc.docs[0].id, "budgets"));
            const data = querySnapshot.docs.map(doc => doc.data());
            setBudgets(data.map(budget => ({name: budget.name, amount: budget.amount, budgetId: budget.budgetId})));
        } catch (err) {
            console.error(err);
            console.log("Error fetching budgets");
        }
    }

    const updateBudget = async (budgetName, budgetChange) => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const querySnapshot = await getDocs(collection(db, "users", doc.docs[0].id, "budgets"));
            const data = querySnapshot.docs.map(doc => doc.data());
            const budget = data.find(budget => budget.name === budgetName);
            const budgetDoc = querySnapshot.docs.find(doc => doc.data().name === budgetName);
            await updateDoc(budgetDoc.ref, {amount: budget.amount + budgetChange});
            fetchBudgets();
        } catch (err) {
            console.error(err);
            console.log("Error updating budget");
        }
    };

    const deleteBudget = async (budgetName) => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const querySnapshot = await getDocs(collection(db, "users", doc.docs[0].id, "budgets"));
            const budgetDoc = querySnapshot.docs.find(doc => doc.data().name === budgetName);
            await deleteDoc(budgetDoc.ref);
            fetchBudgets();
        } catch (err) {
            console.error(err);
            console.log("Error deleting budget");
        }
    }


    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
        fetchBudgets();

    }, [user, loading]);


    return (
        <div className="dashboard">
            <div className="dashboard__container">
                Logged in as
                <div>{name}</div>
                <div>{user?.email}</div>
                <input type="text" placeholder="Budget Name" onChange={(e) => setBudgetName(e.target.value)}/>
                <input type="number" placeholder="Budget Amount"
                       onChange={(e) => setBudgetAmount(e.target.valueAsNumber)}/>
                <button onClick={() => createBudget(budgetName, budgetAmount)}>Add New Budget</button>
                <button className="dashboard__btn" onClick={logout}>
                    Logout
                </button>
                <div>{budgets.map((budget) => {
                    return <div>{budget.budgetId} {budget.name} - {budget.amount}</div>
                })}</div>
                <input type="text" placeholder="Budget Name" onChange={(e) => setBudgetName(e.target.value)}/>
                <input type="number" placeholder="Budget Amount"
                       onChange={(e) => setBudgetChange(e.target.valueAsNumber)}/>
                <button onClick={() => updateBudget(budgetName, budgetChange)}>Update Budget</button>
                <input type="text" placeholder="Budget Name" onChange={(e) => setBudgetName(e.target.value)}/>
                <button onClick={() => deleteBudget(budgetName)}>Delete Budget</button>
            </div>
        </div>
    );
}

export default Dashboard;
