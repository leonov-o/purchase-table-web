import {Button} from "@/components/ui/button.tsx";
import {CopyIcon} from "@radix-ui/react-icons";


export const CopyName = () => {

    return (
        <Button variant="ghost">
            <CopyIcon/>
        </Button>
    );
};
