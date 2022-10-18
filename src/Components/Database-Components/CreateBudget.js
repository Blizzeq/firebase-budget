import {addDoc, collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase-config";
import {uuid} from "uuidv4";

export const createBudget = async (user, budgetName, setBudgets, budgetAmount, budgets) => {
    try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const querySnapshot = await getDocs(collection(db, "users", doc.docs[0].id, "budgets"));
        const data = querySnapshot.docs.map(doc => doc.data());
        const budgetNames = data.map(budget => budget.name);
        if (!budgetNames.includes(budgetName)) {
            await addDoc(collection(db, "users", doc.docs[0].id, "budgets"), {
                uid: user.uid,
                budgetId: uuid(),
                name: budgetName,
                amount: budgetAmount,
            });
            setBudgets([...budgets, {name: budgetName, amount: budgetAmount}]);
        } else {
            alert("Budget name already exists");
        }
    } catch (err) {
        console.error(err);
        console.log("Error creating budget");
    }
};
