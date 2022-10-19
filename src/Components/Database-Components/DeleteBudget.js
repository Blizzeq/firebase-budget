import {collection, deleteDoc, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase-config";
import {fetchBudgets} from "./FetchBudgets";

export const deleteBudget = async (user, budgetName, budgets, setBudgets, deleteBudget, setDeleteBudget) => {
    try {
        setDeleteBudget(!deleteBudget);
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const querySnapshot = await getDocs(collection(db, "users", doc.docs[0].id, "budgets"));
        const budgetDoc = querySnapshot.docs.find(doc => doc.data().name === budgetName);
        await deleteDoc(budgetDoc.ref);
        await fetchBudgets(user, setBudgets);
    } catch (err) {
        console.error(err);
        console.log("Error deleting budget");
    }
}
