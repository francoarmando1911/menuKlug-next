export interface MenuItemProps{
    name: string
    price: string
}

export function MenuItem({name, price}: MenuItemProps){
    return(
        <li className="flex justify-between items-center">
            <span className="text-gray-800">{name}</span>
            <span className="text-gray-600 font-medium">{price}</span>
        </li>
    )
}