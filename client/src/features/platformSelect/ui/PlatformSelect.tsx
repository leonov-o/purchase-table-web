import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Button} from "@/components/ui/button.tsx";
import {WidthIcon} from "@radix-ui/react-icons";
import {useAppDispatch, useAppSelector} from "@/shared";
import {Separator} from "@/components/ui/separator.tsx";
import {filtersSlice} from "@/entities";


export const PlatformSelect = () => {
    const {fromPlatform, toPlatform} = useAppSelector(state => state.filtersReducer);
    const {platforms} = useAppSelector(state => state.platformsReducer);
    const {swapPlatforms, updatePlatformFields} = filtersSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div className="flex justify-center">
            <Select onValueChange={(value) => dispatch(updatePlatformFields({
                platform: "fromPlatform",
                field: "name",
                value
            }))} value={fromPlatform.name}>
                <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Площадка №1"/>
                </SelectTrigger>
                <SelectContent>
                    {
                        platforms.map((el) =>
                            <SelectItem key={el.name} value={el.paramName}>
                                <div className="flex items-center">
                                    <div className="w-[20px]">
                                        <img className="max-h-full max-w-hull" src={"http://localhost:3000/"+el.image} alt=""/>
                                    </div>
                                    <Separator className="mr-2 ml-2 h-8 w-0.5" orientation="vertical"/>
                                    <div className="">{el.name}</div>
                                </div>
                            </SelectItem>
                        )
                    }
                </SelectContent>
            </Select>
            <Button onClick={() => dispatch(swapPlatforms())} variant="link">
                <WidthIcon width="20" height="20"/>
            </Button>
            <Select onValueChange={(value) => dispatch(updatePlatformFields({
                platform: "toPlatform",
                field: "name",
                value
            }))} value={toPlatform.name}>
                <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Площадка №2"/>
                </SelectTrigger>
                <SelectContent>
                    {
                        platforms.map((el) =>
                            <SelectItem key={el.paramName} value={el.paramName}>
                                <div className="flex items-center">
                                    <div className="w-[20px]">
                                        <img className="max-h-full max-w-hull" src={"http://localhost:3000/"+el.image} alt=""/>
                                    </div>
                                    <Separator className="mr-2 ml-2 h-8 w-0.5" orientation="vertical"/>
                                    <div className="">{el.name}</div>
                                </div>
                            </SelectItem>
                        )
                    }
                </SelectContent>
            </Select>
        </div>
    );
};