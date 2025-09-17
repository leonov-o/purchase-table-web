import {InputWithLabel, useAppDispatch, useAppSelector} from "@/shared";
import {filtersSlice} from "@/entities";


export const FromPlatformPriceFilter = () => {
    const {fromPlatform} = useAppSelector(state => state.filtersReducer);
    const dispatch = useAppDispatch();
    const {updatePlatformFields} = filtersSlice.actions;
    return (
        <div className="h-40 w-72 space-y-2">
            <h4 className="font-semibold">Цена первой площадки</h4>
            <div className="flex justify-around space-x-4">
                <InputWithLabel type="number" label="От" placeholder="₽" value={fromPlatform.minPrice}
                                className="text-right"
                                onChange={(e) => dispatch(updatePlatformFields({
                                    platform: "fromPlatform",
                                    field: "minPrice",
                                    value: e.currentTarget.value
                                }))}/>
                <InputWithLabel type="number" label="До" placeholder="₽" value={fromPlatform.maxPrice}
                                className="text-right"
                                onChange={(e) => dispatch(updatePlatformFields({
                                    platform: "fromPlatform",
                                    field: "maxPrice",
                                    value: e.currentTarget.value
                                }))}/>
            </div>
        </div>
    );
};