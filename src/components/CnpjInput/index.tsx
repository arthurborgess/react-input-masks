import React, { useState } from "react";

export const CnpjInput = ({ id }: { id: string }) => {
    const [value, setValue] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        let currentValue = event.target.value.replace(/[^0-9]/g, '');
        setValue(cnpjFormat(currentValue));
    }
    function cnpjFormat(value: string): string {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/\.(\d{3})(\d)/, '.$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    }

    return (
        <input
            id={id}
            type="tel"
            value={value}
            onChange={handleChange}
            placeholder="00.000.000/0000-00"
        />
    );
};