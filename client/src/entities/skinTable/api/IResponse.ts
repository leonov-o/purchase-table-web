import {ISkinItemData} from "@/entities/skinItem/ui/SkinItem.tsx";

export interface IResponse {
    success: boolean,
    items: ISkinItemData[],
    current_page: number
    total_pages: number,
    total_items: number
}