import {Table, TableBody, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {filtersSlice, getItemsAction, SkinItem, skinTableSlice} from "@/entities";
import {useEffect, useState} from "react";
import {Loader, SortCaret, useAppDispatch, useAppSelector} from "@/shared";


const skeletons: string[] = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]


export const SkinTable = () => {
    const filters = useAppSelector(state => state.filtersReducer)
    const {platforms} = useAppSelector(state => state.platformsReducer)
    const {items, isLoading, error} = useAppSelector(state => state.skinTableReducer);
    const dispatch = useAppDispatch();
    const {updateSort} = filtersSlice.actions;
    const {clearItems} = skinTableSlice.actions
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [fetching, setFetching] = useState<boolean>(false);

    const fromPlatformName = (platforms.find((el) => el.paramName === filters.fromPlatform.name))?.name;
    const toPlatformName = (platforms.find((el) => el.paramName === filters.toPlatform.name))?.name;


    useEffect(() => {
        const timerId = setTimeout(() => {
            dispatch(clearItems());
            setCurrentPage(1);
            setFetching(true)
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [filters])

    useEffect(() => {
        if (fetching) {
            dispatch(getItemsAction({page: currentPage, filters})).then(() => {
                setCurrentPage(prevState => prevState + 1)
                setFetching(false)
            })

        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    const renderSortCaret = (column: "fromPlatformPrice" | "toPlatformPrice" | "profit" | "profitPercent") => {
        if (filters.sort === column) return <SortCaret sortDirection={filters.sortDirection}/>
    }

    const handleSort = (column: "fromPlatformPrice" | "toPlatformPrice" | "profit" | "profitPercent") => {
        if (filters.sort === column) {
            if (filters.sortDirection === "asc") {
                dispatch(updateSort({
                    sort: column,
                    sortDirection: "desc"
                }))
            } else {
                dispatch(updateSort({
                    sort: column,
                    sortDirection: "asc"
                }))
            }
        } else {
            dispatch(updateSort({
                sort: column,
                sortDirection: "desc"
            }))
        }
    }

    if (error) return <div>{error}</div>

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[700px]"></TableHead>
                    <TableHead className="w-[60px]"></TableHead>
                    <TableHead className="w-[60px]"></TableHead>
                    <TableHead className="w-[120px]"></TableHead>
                    <TableHead>
                        <div onClick={() => handleSort("fromPlatformPrice")}
                             className="flex items-center justify-center">
                            <div className="">{fromPlatformName}</div>
                            {renderSortCaret("fromPlatformPrice")}
                        </div>
                    </TableHead>
                    <TableHead>
                        <div onClick={() => handleSort("toPlatformPrice")} className="flex items-center justify-center">
                            <div className="">{toPlatformName}</div>
                            {renderSortCaret("toPlatformPrice")}
                        </div>
                    </TableHead>
                    <TableHead>
                        <div onClick={() => handleSort("profit")} className="flex items-center justify-center">
                            <div className="">Выгода ₽</div>
                            {renderSortCaret("profit")}
                        </div>

                    </TableHead>
                    <TableHead>
                        <div onClick={() => handleSort("profitPercent")} className="flex items-center justify-center">
                            <div className="">Выгода %</div>
                            {renderSortCaret("profitPercent")}
                        </div>
                    </TableHead>
                    <TableHead>
                        <div className="flex items-center justify-center">
                            <div className="">Обновление цены</div>
                        </div>
                    </TableHead>
                </TableRow>
            </TableHeader>

            <TableBody className="mb-6">
                {
                    items.length ? (items.map((item, i) => (
                        <SkinItem key={i} {...item} />
                    ))) : null
                }
                {
                    isLoading
                        ? skeletons.map((_, i) => (<Loader key={i}/>))
                        : null
                }
            </TableBody>
        </Table>
    );
};