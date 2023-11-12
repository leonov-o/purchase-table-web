import {Button} from "@/components/ui/button.tsx";
import {GearIcon} from "@radix-ui/react-icons";


export const SettingsToggle = () => {

    return (
        <Button variant="ghost">
            <GearIcon width="20" height="20" />
        </Button>
    );
};
