export interface MenuItemProps {
    name: string;
    price: string;
    description: string;
}

export function MenuItem({ name, price, description }: MenuItemProps) {
    return (
        //flex flex-col gap-1
        <li className="flex flex-col gap-2 p-2 border-b border-gray-300 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
                <span className="text-gray-700">{name}</span>
                <span className="text-gray-500 font-medium">{price}</span>
            </div>
            <p className="text-gray-600 text-sm">{description}</p>
            <br />
        </li>
    );
}
