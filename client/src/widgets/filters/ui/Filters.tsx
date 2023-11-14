import {
    CategoriesCheckboxList,
    FromPlatformPriceFilter,
    ItemsNumberFilter,
    PlatformSelect,
    QualitiesCheckboxList,
    SalesFilter,
    TimeFilter,
    ToPlatformPriceFilter,
    TypesCheckboxList
} from "@/features";


export const Filters = () => {
    return (
        <div className="my-12">
            <div className="flex justify-between space-x-8">
                <div className="mt-4">
                    <div className="">
                        <PlatformSelect/>
                    </div>
                    <div className="mt-6 flex w-[520px] space-x-5">
                        <FromPlatformPriceFilter/>
                        <ToPlatformPriceFilter/>
                    </div>
                </div>

                <SalesFilter/>
                <ItemsNumberFilter/>
                <TimeFilter/>
                <TypesCheckboxList/>
                <CategoriesCheckboxList/>
                <QualitiesCheckboxList/>
            </div>
        </div>
    );
};
