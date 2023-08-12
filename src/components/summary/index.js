"use client"

import React from "react";
import * as F from "./styles";
import SummaryItem from "../summaryItem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Summary = ({ income, expense, total }) => {
    return (
        <F.Container>
            <SummaryItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
            <SummaryItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
            <SummaryItem title="Total" Icon={FaDollarSign} value={total} />
        </F.Container>
    )
}

export default Summary;