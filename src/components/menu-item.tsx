export interface MenuItemProps {
    name: string;
    price: string;
    description: string;
}

export function MenuItem({ name, price, description }: MenuItemProps) {
    return (
        <li className="flex flex-col gap-1 p-2 bg-slate-100 border-b border-gray-300 md:flex-row md:items-start md:gap-4">
            <div className="flex justify-between items-center w-full md:w-auto md:flex-1">
                <span className="text-gray-700 font-medium">{name}</span>
                <span className="text-gray-500 font-medium md:ml-4">{price}</span>
            </div>
            <p className="text-gray-600 text-sm md:flex-1">{description}</p>
        </li>
    );
}

