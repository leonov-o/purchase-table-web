import express from "express";
import {getPlatforms, IPlatform} from "../db/Platforms";


export const platforms = async (req: express.Request, res: express.Response) => {
    try {
        const platforms: IPlatform[] = await getPlatforms();
        return res.status(200).json({
            success: true,
            platforms,
            total_platforms: platforms.length
        }).end();
    } catch (e) {
        console.log(e)
        return res.sendStatus(400);
    }
}