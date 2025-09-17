import {CaretDownIcon, CaretUpIcon} from "@radix-ui/react-icons";

interface ISortCaretProps {
    sortDirection: "asc" | "desc"
}
export const SortCaret = ({sortDirection} : ISortCaretProps) => {


    return (
            <div className="ml-1">
                <CaretUpIcon width={20} height={20} className={"absolute top-1.5 " + (sortDirection === "asc" ? "text-primary" : null)}/>
                <CaretDownIcon width={20} height={20} className={"absolute top-3.5 " + (sortDirection === "desc" ? "text-primary" : null)}/>
            </div>
    );
};

