import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {ChangeEvent} from "react";

interface IInputWithLabelProps {
    type?: string,
    label: string,
    placeholder: string,
    defaultValue?: string,
    value: string,
    onChange(e:ChangeEvent<HTMLInputElement>): void,
    className?: string
}

export const InputWithLabel = ({type, label, placeholder, defaultValue, value, onChange, className}: IInputWithLabelProps) => {
    return (
        <div className={className}>
            <Label className="ml-1">{label}</Label>
            <Input className="mt-2" type={type} placeholder={placeholder} defaultValue={defaultValue} value={value} onChange={onChange}/>
        </div>
    );
};