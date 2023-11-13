import {Table, TableBody, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {SkinItem} from "@/entities";


const invoices = [
    {
        image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLKQVFsb_rcgNhivDMcGwTu4nix9HalKelZeuIz28BvcYiju2SptysjlKw_BA4ZXezetG2F82ptg/360fx360f",
        market_hash_name: "CS:GO Case Key",
        market_price: 766.88,
        steam_price: 773,
        steam_url: "https://steamcommunity.com/market/listings/730/CS%3AGO%20Case%20Key",
        updatedAt: "2023-11-09T21:17:10.439+00:00"
    },
    {
        image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLKQVFsb_rcgNhivDMcGwTu4nix9HalKelZeuIz28BvcYiju2SptysjlKw_BA4ZXezetG2F82ptg/360fx360f",
        market_hash_name: "CS:GO Case Key",
        market_price: 766.88,
        steam_price: 773,
        steam_url: "https://steamcommunity.com/market/listings/730/CS%3AGO%20Case%20Key",
        updatedAt: "2023-11-09T21:17:10.439+00:00"
    },
    {
        image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLKQVFsb_rcgNhivDMcGwTu4nix9HalKelZeuIz28BvcYiju2SptysjlKw_BA4ZXezetG2F82ptg/360fx360f",
        market_hash_name: "CS:GO Case Key",
        market_price: 766.88,
        steam_price: 773,
        steam_url: "https://steamcommunity.com/market/listings/730/CS%3AGO%20Case%20Key",
        updatedAt: "2023-11-09T21:17:10.439+00:00"
    },
    {
        image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLKQVFsb_rcgNhivDMcGwTu4nix9HalKelZeuIz28BvcYiju2SptysjlKw_BA4ZXezetG2F82ptg/360fx360f",
        market_hash_name: "CS:GO Case Key",
        market_price: 766.88,
        steam_price: 773,
        steam_url: "https://steamcommunity.com/market/listings/730/CS%3AGO%20Case%20Key",
        updatedAt: "2023-11-09T21:17:10.439+00:00"
    },
    {
        image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLKQVFsb_rcgNhivDMcGwTu4nix9HalKelZeuIz28BvcYiju2SptysjlKw_BA4ZXezetG2F82ptg/360fx360f",
        market_hash_name: "CS:GO Case Key",
        market_price: 766.88,
        steam_price: 773,
        steam_url: "https://steamcommunity.com/market/listings/730/CS%3AGO%20Case%20Key",
        updatedAt: "2023-11-09T21:17:10.439+00:00"
    },
    {
        image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLKQVFsb_rcgNhivDMcGwTu4nix9HalKelZeuIz28BvcYiju2SptysjlKw_BA4ZXezetG2F82ptg/360fx360f",
        market_hash_name: "CS:GO Case Key",
        market_price: 766.88,
        steam_price: 773,
        steam_url: "https://steamcommunity.com/market/listings/730/CS%3AGO%20Case%20Key",
        updatedAt: "2023-11-09T21:17:10.439+00:00"
    },
    {
        image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLKQVFsb_rcgNhivDMcGwTu4nix9HalKelZeuIz28BvcYiju2SptysjlKw_BA4ZXezetG2F82ptg/360fx360f",
        market_hash_name: "CS:GO Case Key",
        market_price: 766.88,
        steam_price: 773,
        steam_url: "https://steamcommunity.com/market/listings/730/CS%3AGO%20Case%20Key",
        updatedAt: "2023-11-09T21:17:10.439+00:00"
    },
    {
        image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLKQVFsb_rcgNhivDMcGwTu4nix9HalKelZeuIz28BvcYiju2SptysjlKw_BA4ZXezetG2F82ptg/360fx360f",
        market_hash_name: "CS:GO Case Key",
        market_price: 766.88,
        steam_price: 773,
        steam_url: "https://steamcommunity.com/market/listings/730/CS%3AGO%20Case%20Key",
        updatedAt: "2023-11-09T21:17:10.439+00:00"
    },
    {
        image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLKQVFsb_rcgNhivDMcGwTu4nix9HalKelZeuIz28BvcYiju2SptysjlKw_BA4ZXezetG2F82ptg/360fx360f",
        market_hash_name: "CS:GO Case Key",
        market_price: 766.88,
        steam_price: 773,
        steam_url: "https://steamcommunity.com/market/listings/730/CS%3AGO%20Case%20Key",
        updatedAt: "2023-11-09T21:17:10.439+00:00"
    },
    {
        image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLKQVFsb_rcgNhivDMcGwTu4nix9HalKelZeuIz28BvcYiju2SptysjlKw_BA4ZXezetG2F82ptg/360fx360f",
        market_hash_name: "CS:GO Case Key",
        market_price: 766.88,
        steam_price: 773,
        steam_url: "https://steamcommunity.com/market/listings/730/CS%3AGO%20Case%20Key",
        updatedAt: "2023-11-09T21:17:10.439+00:00"
    },
    {
        image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLKQVFsb_rcgNhivDMcGwTu4nix9HalKelZeuIz28BvcYiju2SptysjlKw_BA4ZXezetG2F82ptg/360fx360f",
        market_hash_name: "CS:GO Case Key",
        market_price: 766.88,
        steam_price: 773,
        steam_url: "https://steamcommunity.com/market/listings/730/CS%3AGO%20Case%20Key",
        updatedAt: "2023-11-09T21:17:10.439+00:00"
    },

]
export const SkinTable = () => {
    return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[700px]"></TableHead>
                        <TableHead className="w-[60px]"></TableHead>
                        <TableHead className="w-[60px]"></TableHead>
                        <TableHead className="w-[120px]"></TableHead>
                        <TableHead className="text-center">Площадка №1</TableHead>
                        <TableHead className="text-center">Площадка №2</TableHead>
                        <TableHead className="text-center">Выгода ₽</TableHead>
                        <TableHead className="text-center">Выгода %</TableHead>
                        <TableHead className="text-center">Обновление цены</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody >
                    {invoices.map((item, i) => (
                        <SkinItem key={i} item={item} />
                    ))}
                </TableBody>
            </Table>
    );
};