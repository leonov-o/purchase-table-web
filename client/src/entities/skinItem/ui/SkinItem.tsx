import {TableCell, TableRow} from "@/components/ui/table.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {hoursAgo} from "@/entities";
import {CopyName} from "@/features/copyName";
import {LikeItem} from "@/features/likeItem";
import {HideItem} from "@/features/hideItem";

export interface ISkinItemData {
    image: string,
    market_hash_name: string,
    fromPlatformPrice: number,
    toPlatformPrice: number,
    fromPlatformUrl: string,
    toPlatformUrl: string,
    fromPlatformUpdated: string,
    toPlatformUpdated: string,
    profit: number,
    profitPercent: number
}

export const SkinItem = ({market_hash_name, image, fromPlatformPrice, toPlatformPrice, fromPlatformUpdated, toPlatformUpdated, fromPlatformUrl, toPlatformUrl, profit, profitPercent}: ISkinItemData) => {
    return (
        <TableRow key={market_hash_name}>
            <TableCell className="font-medium">
                <div className="flex items-center">
                    <div className="w-[70px]">
                        <img className="max-h-full max-w-full" src={image} alt=""/>
                    </div>
                    <Separator className="mr-2 ml-2 h-[60px] w-0.5" orientation="vertical"/>
                    <div className="">{market_hash_name}</div>
                </div>
            </TableCell>
            <TableCell>
                <CopyName/>
            </TableCell>
            <TableCell>
                <LikeItem/>
            </TableCell>
            <TableCell>
                <HideItem/>
            </TableCell>
            <TableCell className="text-center">
                {fromPlatformPrice} ₽
            </TableCell>
            <TableCell className="text-center">
                {toPlatformPrice} ₽
            </TableCell>
            <TableCell className="text-center">
                {profit} ₽
            </TableCell>
            <TableCell className="text-center">
                {profitPercent} %
            </TableCell>
            <TableCell className="text-center">
                {hoursAgo(fromPlatformUpdated)} часов назад<br/>
                {hoursAgo(toPlatformUpdated)} часов назад
            </TableCell>
        </TableRow>
    );
};
