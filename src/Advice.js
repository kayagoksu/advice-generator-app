import React, { useEffect, useState } from 'react';
import iconDice from './images/icon-dice.svg';

const url = "https://api.adviceslip.com/advice";

const Advice = () => {

    const [item, setItem] = useState({});

    const getAdvice = () => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setItem(result);
                }
            )
    }

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <div>
            <div className='container p-5'>

                {(typeof item.slip != "undefined") ?
                    <>
                        <div>
                            <h2 className="d-block w-100 advice mb-4">ADVICE #{item.slip.id}</h2>
                        </div>
                        <div>
                            <h2 className="d-block w-100 mb-4">“{item.slip.advice}”</h2>
                        </div>
                        <div className='mb-3'>
                            <img src="" alt="dice" className='pattern-divider-mobile' />
                            <img src="" alt="dice" className='pattern-divider-desktop' />
                        </div>
                    </>
                    : ""}

            </div>
            <div>
                <button type='button' onClick={getAdvice}>
                    <span>
                        <img src={iconDice} alt="dice" className='dice' />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Advice