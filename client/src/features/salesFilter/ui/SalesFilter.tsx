import {InputWithLabel, useAppDispatch, useAppSelector} from "@/shared";
import {filtersSlice} from "@/entities";

export const SalesFilter = () => {
    const {fromPlatform, toPlatform} = useAppSelector(state => state.filtersReducer);
    const dispatch = useAppDispatch();
    const {
        updatePlatformFields,
    } = filtersSlice.actions;
    return (
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
    );
};

