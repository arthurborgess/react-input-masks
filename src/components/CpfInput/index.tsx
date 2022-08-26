import React, { useState } from "react";

export const CpfInput = ({ id }: { id: string }) => {
    const [value, setValue] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        let currentValue = event.target.value.replace(/[^0-9]/g, '');
        setValue(cpfFormat(currentValue));
    };
    function cpfFormat(cpf: string): string {
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    };

    return (
        <input
            type="tel"
            id={id}
            value={value}
            onChange={handleChange}
            placeholder="000.000.000-00"
        />
    );
};