import {TableCell, TableRow} from "@/components/ui/table.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {hoursAgo} from "@/entities";
import {CopyName} from "@/features/copyName";
import {LikeItem} from "@/features/likeItem";
import {HideItem} from "@/features/hideItem";


export const SkinItem = ({item}) => {
    return (
        <TableRow key={item.market_hash_name}>
            <TableCell className="font-medium">
                <div className="flex items-center">
                    <div className="w-[80px]">
                        <img className="max-h-full max-w-hull" src={item.image} alt=""/>
                    </div>
                    <Separator className="mr-2 h-8 w-0.5" orientation="vertical"/>
                    <div className="">{item.market_hash_name}</div>
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
                {item.market_price} ₽
            </TableCell>
            <TableCell className="text-center">
                {item.steam_price} ₽
            </TableCell>
            <TableCell className="text-center">
                {(item.steam_price - item.market_price).toFixed(2)} ₽
            </TableCell>
            <TableCell className="text-center">
                {(((item.market_price - item.steam_price) / item.market_price) * 100).toFixed(2)} %
            </TableCell>
            <TableCell className="text-center">
                {hoursAgo(item.updatedAt)} часов назад
            </TableCell>
        </TableRow>
    );
};
