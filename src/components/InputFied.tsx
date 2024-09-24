import React from "react";
import { FieldError } from "react-hook-form";

type InputFieldProps = {
    label: string;
    type?: string;
    register: any;
    defaultValue: string;
    name: string;
    error: FieldError | undefined;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement> ;
};

const InputFied = ({
    label,
    type = "text",
    register,
    name,
    defaultValue,
    error,
    inputProps,
}: InputFieldProps) => {
    return (
        <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xstext-gray-500">{label}</label>
            <input
                type={type}
                {...inputProps}
                {...register( name )}
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                defaultValue={defaultValue}
            />
            {error?.message && <p className="text-xs text-red-400">{error?.message.toString()}</p>}
        </div>
    );
};

export default InputFied;
