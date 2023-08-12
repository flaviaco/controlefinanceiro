"use client"

import React from "react";
import ListItem from "../listItem";
import * as F from "./styles";

const List = ({ itens, setItens }) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };

    return (
        <F.Table>
            <F.Thead>
                <F.Tr>
                    <F.Th width={40}>Título</F.Th>
                    <F.Th width={40}>Valor</F.Th>
                    <F.Th width={10}>
                        Tipo
                    </F.Th>
                    <F.Th width={10}></F.Th>
                </F.Tr>
            </F.Thead>
            <F.Tbody>
                {itens?.map((item, index) => (
                    <ListItem key={index} item={item} onDelete={onDelete} />
                ))}
            </F.Tbody>
        </F.Table>
    );
};

export default List;
