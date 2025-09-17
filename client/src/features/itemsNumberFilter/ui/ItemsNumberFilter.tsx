import {InputWithLabel, useAppDispatch, useAppSelector} from "@/shared";
import {filtersSlice} from "@/entities";


export const ItemsNumberFilter = () => {
    const {fromPlatform, toPlatform} = useAppSelector(state => state.filtersReducer);
    const {platforms} = useAppSelector(state => state.platformsReducer);
    const dispatch = useAppDispatch();
    const {
        updatePlatformFields,
    } = filtersSlice.actions;

    const fromPlatformName = (platforms.find((el) => el.paramName === fromPlatform.name))?.name;
    const toPlatformName = (platforms.find((el) => el.paramName === toPlatform.name))?.name;


    return (
        <div className="h-40 w-64 space-y-2">
            <h4 className="font-semibold">Количество предметов</h4>
            <InputWithLabel type="number" label={fromPlatformName} placeholder="Кол-во предметов"
                            value={fromPlatform.numberItemsFilter}
                            onChange={(e) => dispatch(updatePlatformFields({
                                platform: "fromPlatform",
                                field: "numberItemsFilter",
                                value: e.currentTarget.value
                            }))}/>
            <InputWithLabel type="number" label={toPlatformName} placeholder="Кол-во предметов"
                            value={toPlatform.numberItemsFilter}
                            onChange={(e) => dispatch(updatePlatformFields({
                                platform: "toPlatform",
                                field: "numberItemsFilter",
                                value: e.currentTarget.value
                            }))}/>
        </div>
    );
};
