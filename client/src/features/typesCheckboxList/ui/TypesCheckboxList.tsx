import {filtersSlice, IFiltersTypes, typeSelections} from "@/entities";
import {CheckboxWithLabel, useAppDispatch, useAppSelector} from "@/shared";




export const TypesCheckboxList = () => {
    const {types} = useAppSelector(state => state.filtersReducer);
    const dispatch = useAppDispatch();
    const {updateTypesCheckbox} = filtersSlice.actions;

    return (
        <div className="h-40 w-44 space-y-2">
            <h4 className="font-semibold">Тип</h4>
            {
                typeSelections.map((el) => <CheckboxWithLabel key={el.id} label={el.label}
                                                              description={el.description}
                                                              checked={types[el.id as keyof IFiltersTypes]}
                                                              onClick={() => dispatch(updateTypesCheckbox(el.id))}/>)
            }
        </div>
    );
}
