import {IResponse} from "@/entities/platforms/api/IResponse.ts";


export const getPlatforms = async () : Promise<IResponse> => {
    const response =  await fetch("http://localhost:3000/api/platforms");
    return await response.json();
}