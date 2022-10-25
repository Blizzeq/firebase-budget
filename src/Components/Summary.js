import React, {useEffect, useState} from 'react';
import {MDBContainer, MDBFooter} from "mdb-react-ui-kit";

function Summary({budgets}) {

    const [totalBudget, setTotalBudget] = useState(0);

    const calculateTotalBudget = () => {
        let total = 0;
        budgets.forEach(budget => {
            total += budget.amount;
        });
        setTotalBudget(total);
    }

    useEffect(() => {
        calculateTotalBudget();
    }, [budgets]);

    return (
        <div className={'Summary'}>
            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#1c1c1c' }}>
                <MDBContainer className='p-4 pb-0'>
                    <section>
                        <p className='d-flex justify-content-center align-items-center budget-total'>Total budget: {totalBudget}</p>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright:
                    <a className='text-white ms-2' href='https://github.com/Blizzeq'>
                        Jakub Krasuski
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Summary;
