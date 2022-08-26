import React, { useState } from "react";

export const InputCurrency = ({ id }: { id: string }) => {
    const [value, setValue] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        let currentValue = event.target.value.replace(/[^0-9]/g, '');
        setValue(formatMoney(Number(currentValue) / 100));
    };
    function formatMoney(value: number): string {
        return value.toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency',
            minimumFractionDigits: 2
        });
    };

    return (
        <input
            type="tel"
            id={id}
            value={value}
            onChange={handleChange}
            placeholder="R$ 0,00"
            name="moneyInput"
            autoComplete="off"
            required
            autoFocus
        />
    );
};