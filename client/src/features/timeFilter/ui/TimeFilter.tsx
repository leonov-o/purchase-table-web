import {InputWithLabel, useAppDispatch, useAppSelector} from "@/shared";
import {filtersSlice} from "@/entities";


export const TimeFilter = () => {
    const {fromPlatform, toPlatform} = useAppSelector(state => state.filtersReducer);
    const dispatch = useAppDispatch();
    const {
        updatePlatformFields,
    } = filtersSlice.actions;
    return (
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
    );
};

