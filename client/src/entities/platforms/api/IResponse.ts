import {ISkinItemData} from "@/entities/skinItem/ui/SkinItem.tsx";


export interface IResponse {
    success: boolean,
    platforms: ISkinItemData[],
    total_platforms: number
}