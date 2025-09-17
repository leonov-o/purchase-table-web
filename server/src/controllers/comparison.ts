import express from "express";
import {ISkinMassInfo, SkinMassInfoModel} from "../db/SkinMassInfo";

export interface IFiltersPlatform {
    name: string,
    minPrice: string,
    maxPrice: string,
    salesFilter: string,
    numberItemsFilter: string,
    timeFilter: string
}

export interface IFiltersTypes {
    weapon: boolean,
    container: boolean,
    sticker: boolean,
    graffiti: boolean,
    agent: boolean,
    musicKit: boolean,
    pin: boolean,
    gloves: boolean
}

export interface IFiltersCategories {
    stattrak: boolean,
    souvenir: boolean,
    normal: boolean,
}

export interface IFiltersQualities {
    fn: boolean,
    mw: boolean,
    ft: boolean,
    ww: boolean,
    bs: boolean
}

interface IFilters {
    fromPlatform: IFiltersPlatform,
    toPlatform: IFiltersPlatform,
    types: IFiltersTypes,
    categories: IFiltersCategories,
    qualities: IFiltersQualities,
    sort: "fromPlatformPrice" | "toPlatformPrice" | "profit" | "profitPercent",
    sortDirection: "asc" | "desc"
}

enum EPlatforms {
    steam_sell = "steam",
    steam_buy_order = "steam",
    market_sell = "market",
    market_buy_order = "market",
    market_average = "market"
}
enum EPrices {
    steam_sell = "price",
    steam_buy_order = "buy_order",
    // steam_average = "avg_price",
    market_sell = "price",
    market_buy_order = "buy_order",
    // market_average = "avg_price"
}
enum EQualities {
    fn = "Прямо с завода",
    mw = "Немного поношенное",
    ft = "После полевых испытаний",
    ww = "Поношенное",
    bs = "Закалённое в боях"
}

const buildQuery = (filters: IFilters) => {
    const query: any = {};

    const buildPlatformQuery = (platform: "fromPlatform" | "toPlatform") => {
        let {name, minPrice, maxPrice, salesFilter, numberItemsFilter, timeFilter} = filters[platform];
        if (name) {
            if (minPrice) {
                query[`${EPlatforms[name as keyof typeof EPlatforms]}.${EPrices[name as keyof typeof EPrices]}`] = {$gte: Number(minPrice)};
            }
            if (maxPrice) {
                query[`${EPlatforms[name as keyof typeof EPlatforms]}.${EPrices[name as keyof typeof EPrices]}`] = {$lte: Number(maxPrice)};
            }
            if (minPrice && maxPrice) {
                query[`${EPlatforms[name as keyof typeof EPlatforms]}.${EPrices[name as keyof typeof EPrices]}`] = {$gte: Number(minPrice), $lte: Number(maxPrice)};
            }
            if (salesFilter) {
                query[`${EPlatforms[name as keyof typeof EPlatforms]}.sales_7d`] = {$gte: Number(salesFilter)};
            }
            if (numberItemsFilter) {
                query[`${EPlatforms[name as keyof typeof EPlatforms]}.number_items`] = {$gte: Number(numberItemsFilter)};
            }
            if (timeFilter) {
                query[`${EPlatforms[name as keyof typeof EPlatforms]}.last_update`] = {$lte: Number(timeFilter)};
            }
        }
    };

    buildPlatformQuery("fromPlatform");
    buildPlatformQuery("toPlatform");

    // Фильтры по типам
    if (filters.types) {
        const selectedTypes = Object.entries(filters.types)
            .filter(([type, selected]) => selected)
            .map(([type]) => type);
        if (selectedTypes.length > 0) {
            query.type = {$in: selectedTypes};
        }
    }

    // Фильтры по категориям
    if (filters.categories) {
        const selectedCategories = Object.entries(filters.categories)
            .filter(([category, selected]) => selected)
            .map(([category]) => category);
        if (selectedCategories.length > 0) {
            query.category = {$in: selectedCategories};
        }
    }

    // Фильтры по качествам
    if (filters.qualities) {
        const selectedQualities = Object.entries(filters.qualities)
            .filter(([quality, selected]) => selected)
            .map(([quality]) => EQualities[quality as keyof typeof EQualities]);
        if (selectedQualities.length > 0) {
            query.ru_quality = {$in: selectedQualities};
        }
    }

    // Добавьте обработку других фильтров, таких как сортировка по прибыли и т.д.

    return query;
}

export const comparison = async (req: express.Request, res: express.Response) => {
    try {
        const pageSize = 20;
        let {page} = req.query;
        if (!page) page = "1"
        const skipAmount = (Number(page) - 1) * pageSize;

        const filters: IFilters = req.body
        const query = buildQuery(filters)
        const items: ISkinMassInfo[] = await SkinMassInfoModel.find(query);
        const totalSkinsCount = await SkinMassInfoModel.countDocuments({});
        // const sortedItems = items.sort((a, b) => {
        //     const aValue = a[sortColumn!];
        //     const bValue = b[sortColumn!];
        //
        //     if (sortDirection === 'asc') {
        //         return aValue > bValue ? 1 : -1;
        //     } else {
        //         return aValue < bValue ? 1 : -1;
        //     }
        // });

        const result = items.map((el: ISkinMassInfo) => {
            const fromPlatform = EPlatforms[filters.fromPlatform.name as keyof typeof EPlatforms];
            const fromPrice = EPrices[filters.fromPlatform.name as keyof typeof EPrices];
            const toPlatform = EPlatforms[filters.toPlatform.name as keyof typeof EPlatforms];
            const toPrice = EPrices[filters.toPlatform.name as keyof typeof EPrices];
            return {
                image: el.image,
                market_hash_name: el.market_hash_name,
                fromPlatformPrice: el[fromPlatform][fromPrice],
                toPlatformPrice: el[toPlatform][toPrice],
                fromPlatformUrl: el[fromPlatform].url,
                toPlatformUrl: el[toPlatform].url,
                fromPlatformUpdated: el[fromPlatform].last_update,
                toPlatformUpdated: el[toPlatform].last_update,
                profit: Number((el[toPlatform][toPrice] - el[fromPlatform][fromPrice]).toFixed(2)),
                profitPercent: Number((((el[toPlatform][toPrice] - el[fromPlatform][fromPrice]) / el[toPlatform][toPrice]) * 100).toFixed(2))
            }
        })

        const sortedResult = result.sort((a, b) => {
                const aValue = a[filters.sort!];
                const bValue = b[filters.sort!];

                if (filters.sortDirection === 'asc') {
                    return aValue > bValue ? 1 : -1;
                } else {
                    return aValue < bValue ? 1 : -1;
                }
        })

        const resultChunk = sortedResult.slice(skipAmount, pageSize+skipAmount);


        return res.status(200).json({
            success: true,
            items: resultChunk,
            current_page: Number(page),
            total_pages: Math.ceil(totalSkinsCount / pageSize),
            total_items: totalSkinsCount
        }).end();
    } catch (e) {
        console.log(e)
        return res.sendStatus(400);
    }
}

