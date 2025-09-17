import {IFiltersState} from "@/entities";
import {IResponse} from "@/entities/skinTable/api/IResponse.ts";


export const getItems = async (filters: IFiltersState, page: number) : Promise<IResponse> => {
    const response =  await fetch("http://localhost:3000/api/comparison?page=" + page, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filters)
    });
    return await response.json();
}