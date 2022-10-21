import React from 'react';
import {MDBContainer, MDBFooter} from "mdb-react-ui-kit";

function Summary({budgets}) {



    return (
        <div className={'Summary'}>
            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#1c1c1c' }}>
                <MDBContainer className='p-4 pb-0'>
                    <section className=''>
                        <p className='d-flex justify-content-center align-items-center'>

                        </p>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Summary;
