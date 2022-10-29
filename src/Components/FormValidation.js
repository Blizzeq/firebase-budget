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
    BudgetName: yup.string().required("Budget name is required.")
});

export {loginScreenValidation, resetPasswordValidation, registerScreenValidation, addBudgetValidation};

