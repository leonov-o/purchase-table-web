import {Logo} from "@/entities";
import {SettingsToggle, ThemeToggle} from "@/features";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";


export const Header = () => {
    return (
        <div className="flex h-16 items-center justify-between px-8">
            <Logo />
            <div className="flex items-center">
                <ThemeToggle />
                <Sheet>
                    <SheetTrigger>
                        <SettingsToggle />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Настройки</SheetTitle>
                            <SheetDescription>
                                Настройки
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};
