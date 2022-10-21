import {collection, getDocs, query, updateDoc, where} from "firebase/firestore";
import {db} from "../../firebase-config";
import {fetchBudgets} from "./FetchBudgets";

export const updateBudget = async (user, budgetName, setBudgets, category, budgetAmount, selectedBudget, setEditBudget, totalBudget) => {
    try {
        setEditBudget(false);
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const querySnapshot = await getDocs(collection(db, "users", doc.docs[0].id, "budgets"));
        const budgetDoc = querySnapshot.docs.find(doc => doc.data().name === selectedBudget);
        await updateDoc(budgetDoc.ref, {
            name: budgetName,
            amount: budgetAmount,
            category: category,
            totalBudget: totalBudget
        });
        await fetchBudgets(user, setBudgets);
    } catch (err) {
        console.error(err);
        console.log("Error updating budget");
    }
};
