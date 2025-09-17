import mongoose from "mongoose";
const Scheme = mongoose.Schema;

export interface IMarketSkin {
    price: number,
    buy_order: number,
    avg_price: number,
    popularity_7d: number,
    class_instance_id: string,
    market_hash_name: string,
    ru_name: string,
    ru_rarity: string,
    ru_quality: string,
    text_color: string,
    bg_color: string,
}

const MarketSkin = new Scheme<IMarketSkin>({
    price: Number,
    buy_order: Number,
    avg_price: Number,
    popularity_7d: Number,
    class_instance_id: {
        type: String,
        unique: true
    },
    market_hash_name: String,
    ru_name: String,
    ru_rarity: String,
    ru_quality: String,
    text_color: String,
    bg_color: String,
}, {timestamps: true});

export const MarketSkinModel =  mongoose.model<IMarketSkin>("marketSkins", MarketSkin);

export const getMarketSkins = ():Promise<IMarketSkin[]> => MarketSkinModel.find({});
export const getMarketSkinByName = (market_hash_name: string):Promise<IMarketSkin[]> => MarketSkinModel.find({market_hash_name});
