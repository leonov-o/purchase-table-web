import {InputWithLabel, useAppDispatch, useAppSelector} from "@/shared";
import {filtersSlice} from "@/entities";


export const ItemsNumberFilter = () => {
    const {fromPlatform, toPlatform} = useAppSelector(state => state.filtersReducer);
    const dispatch = useAppDispatch();
    const {
        updatePlatformFields,
    } = filtersSlice.actions;
    return (
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
    );
};
