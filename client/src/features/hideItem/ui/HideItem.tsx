import {Button} from "@/components/ui/button.tsx";
import {EyeNoneIcon} from "@radix-ui/react-icons";


export const HideItem = () => {

    return (
        <Button variant="ghost">
            <EyeNoneIcon/>
        </Button>
    );
};
