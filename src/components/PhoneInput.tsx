import { useState } from "react";

export const PhoneInput = ({ id }: { id: string }) => {
    const [value, setValue] = useState('');

    function phoneFormat(phone: string): string {
        return phone
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "+$1 $2")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})(\d+?)$/, "$1");
    }

    return (
        <input type="tel"
            id={id}
            value={value}
            onChange={e => setValue(phoneFormat(e.target.value))}
            placeholder="+00 (00) 00000-0000"
        />
    );
};