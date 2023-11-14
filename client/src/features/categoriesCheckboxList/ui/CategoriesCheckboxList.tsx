import {categorySelection, filtersSlice, IFiltersCategories} from "@/entities";
import {CheckboxWithLabel, useAppDispatch, useAppSelector} from "@/shared";


export const CategoriesCheckboxList = () => {
    const {categories} = useAppSelector(state => state.filtersReducer);
    const dispatch = useAppDispatch();
    const {updateCategoriesCheckbox} = filtersSlice.actions;

    return (
        <div className="h-40 w-40 space-y-2">
            <h4 className="font-semibold">Категория</h4>
            {
                categorySelection.map((el) => <CheckboxWithLabel key={el.id} label={el.label}
                                                              description={el.description}
                                                              checked={categories[el.id as keyof IFiltersCategories]}
                                                              onClick={() => dispatch(updateCategoriesCheckbox(el.id))}/>)
            }
        </div>
    );
}
