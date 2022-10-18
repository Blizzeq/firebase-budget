import {collection, getDocs, query, updateDoc, where} from "firebase/firestore";
import {db} from "../../firebase-config";
import {fetchBudgets} from "./FetchBudgets";

export const updateBudget = async (user, budgetName, budgetChange, setBudgets) => {
    try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const querySnapshot = await getDocs(collection(db, "users", doc.docs[0].id, "budgets"));
        const data = querySnapshot.docs.map(doc => doc.data());
        const budget = data.find(budget => budget.name === budgetName);
        const budgetDoc = querySnapshot.docs.find(doc => doc.data().name === budgetName);
        await updateDoc(budgetDoc.ref, {amount: budget.amount + budgetChange});
        await fetchBudgets(user, setBudgets);
    } catch (err) {
        console.error(err);
        console.log("Error updating budget");
    }
};
