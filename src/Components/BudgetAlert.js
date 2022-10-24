import React from 'react';
import {Alert} from "@mui/material";

function BudgetAlert() {
    return (
        <Alert className={'Alert-Budget'} severity="error">Budget Amount can't be higher than Maximum Budget</Alert>
    );
}

export default BudgetAlert;
