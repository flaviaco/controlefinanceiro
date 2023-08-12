"use client"

import React from "react";
import * as F from "./styles";

const SummaryItem = ({title, Icon, value}) => {
    return (
        <F.Container>
            <F.Header>
                <F.HeaderTitle>{title}</F.HeaderTitle>
                <Icon />
            </F.Header>
            <F.Total>{value}</F.Total>
        </F.Container>
    )
}

export default SummaryItem;