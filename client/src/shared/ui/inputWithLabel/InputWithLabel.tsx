import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";

interface IInputWithLabelProps {
    type: string,
    label: string,
    placeholder: string,
    className?: string
}
export const InputWithLabel = ({type, label, placeholder, className}: IInputWithLabelProps) => {
    return (
        <div className={className}>
            <Label className="ml-1">{label}</Label>
            <Input className="mt-2" type={type} placeholder={placeholder}/>
        </div>
    );
};