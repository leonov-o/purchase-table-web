import {filtersSlice, IFiltersQualities, qualitySelection} from "@/entities";
import {CheckboxWithLabel, useAppDispatch, useAppSelector} from "@/shared";


export const QualitiesCheckboxList = () => {
    const {qualities} = useAppSelector(state => state.filtersReducer);
    const dispatch = useAppDispatch();
    const {updateQualitiesCheckbox} = filtersSlice.actions;

    return (
        <div className="h-40 w-72 space-y-2">
            <h4 className="font-semibold">Качество</h4>
            {
                qualitySelection.map((el) => <CheckboxWithLabel key={el.id} label={el.label}
                                                              description={el.description}
                                                              checked={qualities[el.id as keyof IFiltersQualities]}
                                                              onClick={() => dispatch(updateQualitiesCheckbox(el.id))}/>)
            }
        </div>
    );
}
