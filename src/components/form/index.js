"use client"

import React, { useState } from "react";
import * as F from "./styles";
import List from "../list";

const Form = ({ handleAdd, transactionsList ,setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Por favor informe o título e o valor!");
            return;
        } else if ( amount < 1 ) {
            alert("Informe um valor positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return (
       <>
        <F.Container>
            <F.InputContent>
                <F.Label>Título</F.Label>
                <F.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
            </F.InputContent>
            <F.InputContent>
                <F.Label>Valor</F.Label>
                <F.Input 
                    value={amount} 
                    type="number" 
                    onChange={(e) => setAmount(e.target.value)} 
                />
            </F.InputContent>
            <F.RadioGroup>
                <F.Input 
                    type="radio"
                    id="cashIncome"
                    defaultChecked
                    name="group1"
                    onChange={() => setExpense(!isExpense)} 
                />
                <F.Label htmlFor="cashIncome">Entrada</F.Label>

                <F.Input 
                    type="radio"
                    id="cashExpenses"
                    name="group1"
                    onChange={() => setExpense(!isExpense)} 
                />
                <F.Label htmlFor="cashExpense">Saída</F.Label>
            </F.RadioGroup>
            <F.Button onClick={handleSave}>adicionar</F.Button>
        </F.Container>

        <List itens={transactionsList} setItens={setTransactionsList} />
       </>
    )
}

export default Form;