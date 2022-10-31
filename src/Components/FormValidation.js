import * as yup from 'yup';

const loginScreenValidation = yup.object().shape({
    Email: yup.string().email("Please provide a valid email.").required("Email is required."),
    Password: yup.string().required("Password is required.")
});

const resetPasswordValidation = yup.object().shape({
    Email: yup.string().email("Please provide a valid email.").required("Email is required.")
});

const registerScreenValidation = yup.object().shape({
    Name: yup.string().required("Name is required."),
    Email: yup.string().email("Please provide a valid email.").required("Email is required."),
    Password: yup.string().required("Password is required.").min(6, "Password must be at least 6 characters.")
});

const addBudgetValidation = yup.object().shape({
    BudgetName: yup.string().required("Budget name is required."),
    BudgetCategory: yup.string().required("Budget category is required."),
    BudgetAmount: yup.number().required().typeError("Budget amount is required."),
    TotalBudget: yup.number().required().typeError("Total budget is required.").min(yup.ref("BudgetAmount"), "Total budget must be greater than current budget amount.")
});

export {loginScreenValidation, resetPasswordValidation, registerScreenValidation, addBudgetValidation};

