"use client"

import React from "react";
import * as F from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const ListItem = ({ item, onDelete }) => {
    return (
        <F.Tr>
            <F.Td>{item.desc}</F.Td>
            <F.Td>{item.amount}</F.Td>
            <F.Td>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color="red" /> 
                ) : ( 
                    <FaRegArrowAltCircleUp color="green" />
                )}
            </F.Td>
            <F.Td>
                <FaTrash onClick={() => onDelete(item.id)} />
            </F.Td>
        </F.Tr>
    );
};

export default ListItem;
