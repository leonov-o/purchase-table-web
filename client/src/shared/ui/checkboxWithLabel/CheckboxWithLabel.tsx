import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Label} from "@/components/ui/label.tsx";
import React from "react";

interface IInputWithLabelProps {
    id?: string,
    label: string,
    description?: string,
    checked: boolean,
    onClick(e: React.MouseEvent<HTMLButtonElement>): void;
    className?: string
}

export const CheckboxWithLabel = ({id, label, description, checked, onClick, className}: IInputWithLabelProps) => {
    return (
        <div className={"flex justify-start " + className}>
            <Checkbox id={id} checked={checked} onClick={onClick}/>
            <div className="grid leading-none gap-1.5 ml-1.5">
                <Label>{label}</Label>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    );
};
