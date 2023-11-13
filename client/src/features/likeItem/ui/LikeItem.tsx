import {Button} from "@/components/ui/button.tsx";
import {HeartIcon} from "@radix-ui/react-icons";


export const LikeItem = () => {

    return (
        <Button variant="ghost">
            <HeartIcon/>
        </Button>
    );
};
