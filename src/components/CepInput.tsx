import { useState } from "react";

export const CepInput = ({ id }: { id: string }) => {
    const [value, setValue] = useState('');

    function cepFormat(cep: string): string {
        return cep
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{3})(\d+?)$/, "$1");
    }

    return (
        <input
            type="tel"
            id={id}
            value={value}
            onChange={e => setValue(cepFormat(e.target.value))}
            placeholder="00000-000"
        />
    );
};