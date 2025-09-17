import mongoose from "mongoose";

const Scheme = mongoose.Schema;

export interface ISkinMassInfo {
    market_hash_name: string,
    image: string,
    market: {
        url: string,
        price: number,
        buy_order: number,
        avg_price: number,
        sales_7d: number,
        class_instance_id: string,
        last_update: string
    },
    steam: {
        commodityID: number,
        url: string,
        buy_order: number,
        price: number,
        buy_order_graph: [[]],
        sell_order_graph: [[]],
        last_update: string
    },
    ru_name: string,
    ru_rarity: string,
    ru_quality: string,
    text_color: string,
    bg_color: string
}

const SkinMassInfo = new Scheme<ISkinMassInfo>({
    market_hash_name: String,
    image: String,
    market: {
        url: String,
        price: Number,
        buy_order: Number,
        avg_price: Number,
        sales_7d: Number,
        class_instance_id: String,
        last_update: Date
    },
    steam: {
        commodityID: Number,
        url: String,
        buy_order: Number,
        price: Number,
        buy_order_graph: [[]],
        sell_order_graph: [[]],
        last_update: Date
    },
    ru_name: String,
    ru_rarity: String,
    ru_quality: String,
    text_color: String,
    bg_color: String
});
export const SkinMassInfoModel = mongoose.model<ISkinMassInfo>("skinmassinfo", SkinMassInfo);

export const getSkinsMassInfo = (): Promise<ISkinMassInfo[]> => SkinMassInfoModel.find({});
export const getSkinMassInfoByName = (market_hash_name: string): Promise<ISkinMassInfo[]> => SkinMassInfoModel.find({market_hash_name});