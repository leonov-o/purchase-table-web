import {CheckboxWithLabel, InputWithLabel} from "@/shared";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Button} from "@/components/ui/button.tsx";
import {WidthIcon} from "@radix-ui/react-icons";

interface ISelection {
    label: string,
    description?: string
}

export const Filters = () => {

    const typeSelections: ISelection[] = [
        {
            label: "Оружие"
        },
        {
            label: "Кейс"
        },
        {
            label: "Наклейка"
        },
        {
            label: "Граффити"
        },
        {
            label: "Агент"
        },
        {
            label: "Набор музыки"
        },
        {
            label: "Значок"
        },
        {
            label: "Перчатки"
        }
    ];
    const categorySelection: ISelection[] = [
        {
            label: "StatTrak"
        },
        {
            label: "Сувенирное"
        },
        {
            label: "Обычное"
        },

    ];
    const qualitySelection: ISelection[] = [
        {
            label: "Прямо с завода"
        },
        {
            label: "Немного поношенное"
        },
        {
            label: "После полевых испытаний"
        },
        {
            label: "Поношенное"
        },
        {
            label: "Закалённое в боях"
        }
    ];
    return (
        <div className="mt-12">
            <div className="flex justify-between space-x-8 ">
                <div className="mt-4">
                    <div className="">
                        <div className="flex justify-center">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Площадка №1"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="link">
                                <WidthIcon width="20" height="20"/>
                            </Button>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Площадка №2"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex w-[520px] space-x-5 mt-6">
                        <div className="h-40 w-72 space-y-2 ">
                            <h4 className="font-semibold">Цена первой площадки</h4>
                            <div className="flex justify-around space-x-4">
                                <InputWithLabel type="text" label="От" placeholder="р"/>
                                <InputWithLabel type="text" label="До" placeholder="р"/>
                            </div>
                        </div>
                        <div className="h-40 w-72 space-y-2">
                            <h4 className="font-semibold">Цена второй площадки</h4>
                            <div className="flex justify-around space-x-4">
                                <InputWithLabel type="text" label="От" placeholder="р"/>
                                <InputWithLabel type="text" label="До" placeholder="р"/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="h-40 w-64 space-y-2">
                    <h4 className="font-semibold">Фильтр продаж</h4>
                    <InputWithLabel type="text" label="Steam" placeholder="Кол-во в неделю"/>
                    <InputWithLabel type="text" label="Market" placeholder="Кол-во в неделю"/>
                </div>
                <div className="h-40 w-64 space-y-2">
                    <h4 className="font-semibold">Количество предметов</h4>
                    <InputWithLabel type="text" label="Steam" placeholder="Кол-во предметов"/>
                    <InputWithLabel type="text" label="Market" placeholder="Кол-во предметов"/>
                </div>
                <div className="h-40 w-64 space-y-2">
                    <h4 className="font-semibold">Фильтр времени</h4>
                    <InputWithLabel type="text" label="Steam" placeholder="Кол-во часов"/>
                    <InputWithLabel type="text" label="Market" placeholder="Кол-во часов"/>
                </div>
                <div className="h-40 w-44 space-y-2">
                    <h4 className="font-semibold">Тип</h4>
                    {
                        typeSelections.map((el) => <CheckboxWithLabel label={el.label} description={el.description}/>)
                    }
                </div>
                <div className="h-40 w-40 space-y-2">
                    <h4 className="font-semibold">Категория</h4>
                    {
                        categorySelection.map((el) => <CheckboxWithLabel label={el.label} description={el.description}/>)
                    }
                </div>
                <div className="h-40 w-72 space-y-2">
                    <h4 className="font-semibold">Качество</h4>
                    {
                        qualitySelection.map((el) => <CheckboxWithLabel label={el.label} description={el.description}/>)
                    }
                </div>
            </div>
        </div>
    );
};
