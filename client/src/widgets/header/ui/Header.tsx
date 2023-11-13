import {Logo} from "@/entities";
import {SettingsToggle, ThemeToggle} from "@/features";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import {CheckboxWithLabel, InputWithLabel} from "@/shared";


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
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Комиссии</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="p-2 space-y-3">
                                            <InputWithLabel label="Market" placeholder="%" defaultValue="5"/>
                                            <InputWithLabel label="Steam продажа" placeholder="%" defaultValue="13"/>
                                            <InputWithLabel label="Steam моментальная продажа" placeholder="%" defaultValue="15"/>
                                            <CheckboxWithLabel label="Учитывать комиссии"/>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};
