import mongoose from "mongoose";
import {IMarketSkin, MarketSkinModel} from "./MarketSkin";
const Scheme = mongoose.Schema;

export interface  ISteamSkin {
    market_hash_name: string,
    image: string,
    buy_order: number,
    sell_price: number,
    buy_order_graph: [[]],
    sell_order_graph: [[]],
    commodityID: number,
    steam_url: string
}

const SteamSkin = new Scheme<ISteamSkin>({
    market_hash_name: String,
    image: String,
    buy_order: Number,
    sell_price: Number,
    buy_order_graph: [[]],
    sell_order_graph: [[]],
    commodityID: Number,
    steam_url: String
}, {timestamps: true});

export const SteamSkinModel =  mongoose.model<ISteamSkin>("steamSkins", SteamSkin);

export const getSteamSkins = ():Promise<ISteamSkin[]> => SteamSkinModel.find({});
