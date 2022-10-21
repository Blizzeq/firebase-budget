import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase-config";

export const fetchBudgets = async (user, setBudgets) => {
    try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const querySnapshot = await getDocs(collection(db, "users", doc.docs[0].id, "budgets"));
        const data = querySnapshot.docs.map(doc => doc.data());
        setBudgets(data.map(budget => ({name: budget.name, amount: budget.amount, budgetId: budget.budgetId, category: budget.category, totalBudget: budget.totalBudget})));
    } catch (err) {
        console.error(err);
        console.log("Error fetching budgets");
    }
}
