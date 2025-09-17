import mongoose from "mongoose";

const Scheme = mongoose.Schema;


export interface IPlatform {
    image: string,
    name: string,
    paramName: string
}

const Platforms = new Scheme<IPlatform>({
    image: String,
    name: String,
    paramName: String
});
export const PlatformsModel = mongoose.model<IPlatform>("platforms", Platforms);

export const getPlatforms = (): Promise<IPlatform[]> => PlatformsModel.find({});
