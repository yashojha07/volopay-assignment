import React from "react";

const Card = ({ cardData }) => {
    console.log(cardData);

    return (
        <>
            <section className="main-card--cointainer">
                {cardData.map((curElem) => {
                    const { name, budget_name, category, owner_id, frequency, spent, available_to_spend, card_type, expiry, limit, status } = curElem;

                    return (
                        <>

                            <div className="card-container" key={owner_id}>
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="title">
                                            <h1>{name}</h1>
                                        </div>


                                        <div className="budget">
                                            <h3>Memberfy ● Budget</h3>
                                        </div>

                                        <div className="cat-3">
                                            <div className="sub-cat-3">
                                                <h5>Amount</h5>
                                                <p style={{ color: "black", paddingTop: "6px" }}>{available_to_spend.value} </p>

                                            </div>
                                            <div className="sub-cat-3">
                                                <h5>Frequency</h5>


                                                <p style={{ color: "black", paddingTop: "6px" }}> {frequency}</p>
                                            </div>
                                            <div className="sub-cat-3">
                                                <h5>Expiry</h5>
                                                <p style={{ color: "black", paddingTop: "6px" }}>{expiry}</p>
                                            </div>
                                        </div>
                           <div className="horizon">
                            <div className="horizon-1"/>
                            <div className="horizon-2"/>
                            
                           </div>
                                        <div className="sub-cat">

                                            <p> <span style={{ color: "green" }}>●</span>Spend</p>
                                            <p style={{ color: "black"}}>{spent.value}  {spent.currency}</p>
                                        </div>

                                        <div className="sub-cat">

                                            <p > <span style={{ color: "red" }}>●</span>Balance</p>
                                            <p style={{ color: "black"}}>{available_to_spend.value}  {available_to_spend.currency}</p>
                                        </div>

                                    </div>
                                </div>
                            </div >

                        </>
                    );
                })}
            </section >
        </>
    );
};

export default Card;