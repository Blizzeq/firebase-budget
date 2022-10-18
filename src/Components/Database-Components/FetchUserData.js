import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase-config";

export const fetchUserName = async (user, setName) => {
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
