interface ISelection {
    id: string,
    label: string,
    description?: string,
}

export const typeSelections: ISelection[] = [
    {
        id: "weapon",
        label: "Оружие"
    },
    {
        id: "container",
        label: "Кейс"
    },
    {
        id: "sticker",
        label: "Наклейка"
    },
    {
        id: "graffiti",
        label: "Граффити"
    },
    {
        id: "agent",
        label: "Агент"
    },
    {
        id: "musicKit",
        label: "Набор музыки"
    },
    {
        id: "pin",
        label: "Значок"
    },
    {
        id: "gloves",
        label: "Перчатки"
    }
];
export const categorySelection: ISelection[] = [
    {
        id: "stattrak",
        label: "StatTrak"
    },
    {
        id: "souvenir",
        label: "Сувенирное"
    },
    {
        id: "normal",
        label: "Обычное"
    },

];
export const qualitySelection: ISelection[] = [
    {
        id: "fn",
        label: "Прямо с завода"
    },
    {
        id: "mw",
        label: "Немного поношенное"
    },
    {
        id: "ft",
        label: "После полевых испытаний"
    },
    {
        id: "ww",
        label: "Поношенное"
    },
    {
        id: "bs",
        label: "Закалённое в боях"
    }
];