import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Label} from "@/components/ui/label.tsx";

interface IInputWithLabelProps {
    label: string,
    description?: string,
    className?: string
}
export const CheckboxWithLabel = ({label, description, className}: IInputWithLabelProps) => {
    return (
        <div className={"flex justify-start " + className}>
            <Checkbox/>
            <div className="grid leading-none gap-1.5 ml-1.5">
                <Label>{label}</Label>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    );
};
