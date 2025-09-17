import {TableCell, TableRow} from "@/components/ui/table.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {Separator} from "@/components/ui/separator.tsx";


export const Loader = () => {
    return (
        <TableRow >
            <TableCell className="font-medium">
                <div className="flex items-center">
                    <div className="w-[70px]">
                        <Skeleton className="w-[70px] h-[70px]"/>
                    </div>
                    <Separator className="mr-2 ml-2 h-[60px] w-0.5" orientation="vertical"/>
                    <div className=""><Skeleton className="w-[400px] h-[40px]" /></div>
                </div>
            </TableCell>
            <TableCell>
                <Skeleton className="w-[47px] h-[36px]"/>
            </TableCell>
            <TableCell>
                <Skeleton className="w-[47px] h-[36px]"/>
            </TableCell>
            <TableCell>
                <Skeleton className="w-[47px] h-[36px]"/>
            </TableCell>
            <TableCell className="text-center">
                <Skeleton className="w-[120px] h-[40px]"/>
            </TableCell>
            <TableCell className="text-center">
                <Skeleton className="w-[120px] h-[40px]"/>
            </TableCell>
            <TableCell className="text-center">
                <Skeleton className="w-[120px] h-[40px]"/>
            </TableCell>
            <TableCell className="text-center">
                <Skeleton className="w-[120px] h-[40px]"/>
            </TableCell>
            <TableCell className="text-center">
                <Skeleton className="w-[120px] h-[40px]"/>
            </TableCell>
        </TableRow>
    );
};

