import React, { useState } from "react";
import "./style.css";
import Api from "./Api";
import Card from "./Card";
import Navbar from "./Navbar";

const uniqueList = [
    ...new Set(
        Api.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];

console.log(uniqueList);

const Main = () => {
    const [cardData, setcardData] = useState(Api);
    const [List, setLIst] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setcardData(Api);
            return;
        }

        const updatedList = Api.filter((curElem) => {
            return curElem.category === category;
        });

        setcardData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} ApiList={List} />
            <Card cardData={cardData} />
        </>
    );
};

export default Main;