import React from 'react';

const cards = () => {
    return (
        <div className='mt-8'>
            <div className='grid grid-cols-4 gap-5'>
                <div className='box bg-activegray'>
                    <h1>Total value of assests</h1>
                    <h1 className='amount'>$124.212.23</h1>
                    <div className='card-flex'>
                        <h1 className='card-contet'>Per 12 May</h1>
                        <h1 className='card-contet'>All banks</h1>
                    </div>
                </div>
                <div className='box'>
                    <h1>Including Deposits</h1>
                    <h1 className='amount'>$124.212.23</h1>
                    <div className='card-flex'>
                        <h1 className='card-contet'>Per 12 May</h1>
                        <h1 className='card-contet'>All banks</h1>
                    </div>
                </div>
                <div className='box'>
                    <h1>Amount of investment</h1>
                    <h1 className='amount'>$124.212.23</h1>
                    <div className='card-flex'>
                        <h1 className='card-contet'>Per 12 May</h1>
                        <h1 className='card-contet'>All banks</h1>
                    </div>
                </div>
                <div className='box'>
                    <h1>Amount of loans</h1>
                    <h1 className='amount'>$124.212.23</h1>
                    <div className='card-flex'>
                        <h1 className='card-contet'>Per 12 May</h1>
                        <h1 className='card-contet'>All banks</h1>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default cards;