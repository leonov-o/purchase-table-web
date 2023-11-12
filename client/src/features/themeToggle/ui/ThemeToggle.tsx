import {Button} from "@/components/ui/button.tsx";
import {SunIcon, MoonIcon} from "@radix-ui/react-icons";
import {useTheme} from "@/app/providers";


export const ThemeToggle = () => {
    const {setTheme, theme} = useTheme();
    return (
        <Button variant="ghost" onClick={() => setTheme(theme==="light"?"dark":"light")}>
            {theme==="light"?<SunIcon/>:<MoonIcon/>}
        </Button>
    );
};
