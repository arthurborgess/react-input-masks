import { useState } from "react";

export const CpfInput = ({ id }: { id: string }) => {
    const [value, setValue] = useState('');

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
            onChange={e => setValue(cpfFormat(e.target.value))}
            placeholder="000.000.000-00"
        />
    );
};