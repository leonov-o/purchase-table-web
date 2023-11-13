import {CheckboxWithLabel, InputWithLabel, useAppDispatch, useAppSelector} from "@/shared";
import {
    categorySelection,
    filtersSlice,
    IFiltersCategories,
    IFiltersQualities,
    IFiltersTypes,
    qualitySelection,
    typeSelections
} from "@/entities";
import {PlatformSelect} from "@/features";


export const Filters = () => {
    const {fromPlatform, toPlatform, types, categories, qualities} = useAppSelector(state => state.filtersReducer);
    const dispatch = useAppDispatch();
    const {
        updatePlatformFields,
        updateTypesCheckbox,
        updateCategoriesCheckbox,
        updateQualitiesCheckbox
    } = filtersSlice.actions;



    return (
        <div className="my-12">
            <div className="flex justify-between space-x-8">
                <div className="mt-4">
                    <div className="">
                        <PlatformSelect/>
                    </div>

                    <div className="mt-6 flex w-[520px] space-x-5">
                        <div className="h-40 w-72 space-y-2">
                            <h4 className="font-semibold">Цена первой площадки</h4>
                            <div className="flex justify-around space-x-4">
                                <InputWithLabel type="number" label="От" placeholder="₽" value={fromPlatform.minPrice}
                                                onChange={(e) => dispatch(updatePlatformFields({
                                                    platform: "fromPlatform",
                                                    field: "minPrice",
                                                    value: e.currentTarget.value
                                                }))}/>
                                <InputWithLabel type="number" label="До" placeholder="₽" value={fromPlatform.maxPrice}
                                                onChange={(e) => dispatch(updatePlatformFields({
                                                    platform: "fromPlatform",
                                                    field: "maxPrice",
                                                    value: e.currentTarget.value
                                                }))}/>
                            </div>
                        </div>
                        <div className="h-40 w-72 space-y-2">
                            <h4 className="font-semibold">Цена второй площадки</h4>
                            <div className="flex justify-around space-x-4">
                                <InputWithLabel type="number" label="От" placeholder="₽" value={toPlatform.minPrice}
                                                onChange={(e) => dispatch(updatePlatformFields({
                                                    platform: "toPlatform",
                                                    field: "minPrice",
                                                    value: e.currentTarget.value
                                                }))}/>
                                <InputWithLabel type="number" label="До" placeholder="₽" value={toPlatform.maxPrice}
                                                onChange={(e) => dispatch(updatePlatformFields({
                                                    platform: "toPlatform",
                                                    field: "maxPrice",
                                                    value: e.currentTarget.value
                                                }))}/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="h-40 w-64 space-y-2">
                    <h4 className="font-semibold">Фильтр продаж</h4>
                    <InputWithLabel type="number" label="Steam" placeholder="Кол-во в неделю"
                                    value={fromPlatform.salesFilter} onChange={(e) => dispatch(updatePlatformFields({
                        platform: "fromPlatform",
                        field: "salesFilter",
                        value: e.currentTarget.value
                    }))}/>
                    <InputWithLabel type="number" label="Market" placeholder="Кол-во в неделю"
                                    value={toPlatform.salesFilter} onChange={(e) => dispatch(updatePlatformFields({
                        platform: "toPlatform",
                        field: "salesFilter",
                        value: e.currentTarget.value
                    }))}/>
                </div>
                <div className="h-40 w-64 space-y-2">
                    <h4 className="font-semibold">Количество предметов</h4>
                    <InputWithLabel type="number" label="Steam" placeholder="Кол-во предметов"
                                    value={fromPlatform.numberItemsFilter}
                                    onChange={(e) => dispatch(updatePlatformFields({
                                        platform: "fromPlatform",
                                        field: "numberItemsFilter",
                                        value: e.currentTarget.value
                                    }))}/>
                    <InputWithLabel type="number" label="Market" placeholder="Кол-во предметов"
                                    value={toPlatform.numberItemsFilter}
                                    onChange={(e) => dispatch(updatePlatformFields({
                                        platform: "toPlatform",
                                        field: "numberItemsFilter",
                                        value: e.currentTarget.value
                                    }))}/>
                </div>
                <div className="h-40 w-64 space-y-2">
                    <h4 className="font-semibold">Фильтр времени</h4>
                    <InputWithLabel type="number" label="Steam" placeholder="Кол-во часов"
                                    value={fromPlatform.timeFilter} onChange={(e) => dispatch(updatePlatformFields({
                        platform: "fromPlatform",
                        field: "timeFilter",
                        value: e.currentTarget.value
                    }))}/>
                    <InputWithLabel type="number" label="Market" placeholder="Кол-во часов"
                                    value={toPlatform.timeFilter} onChange={(e) => dispatch(updatePlatformFields({
                        platform: "toPlatform",
                        field: "timeFilter",
                        value: e.currentTarget.value
                    }))}/>
                </div>
                <div className="h-40 w-44 space-y-2">
                    <h4 className="font-semibold">Тип</h4>
                    {
                        typeSelections.map((el) => <CheckboxWithLabel key={el.id} label={el.label}
                                                                      description={el.description}
                                                                      checked={types[el.id as keyof IFiltersTypes]}
                                                                      onClick={() => dispatch(updateTypesCheckbox(el.id))}/>)
                    }
                </div>
                <div className="h-40 w-40 space-y-2">
                    <h4 className="font-semibold">Категория</h4>
                    {
                        categorySelection.map((el) => <CheckboxWithLabel key={el.id} label={el.label}
                                                                         description={el.description}
                                                                         checked={categories[el.id as keyof IFiltersCategories]}
                                                                         onClick={() => dispatch(updateCategoriesCheckbox(el.id))}/>)
                    }
                </div>
                <div className="h-40 w-72 space-y-2">
                    <h4 className="font-semibold">Качество</h4>
                    {
                        qualitySelection.map((el) => <CheckboxWithLabel key={el.id} label={el.label}
                                                                        description={el.description}
                                                                        checked={qualities[el.id as keyof IFiltersQualities]}
                                                                        onClick={() => dispatch(updateQualitiesCheckbox(el.id))}/>)
                    }
                </div>
            </div>
        </div>
    );
};
