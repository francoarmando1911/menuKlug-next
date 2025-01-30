import { MenuItem, type MenuItemProps } from "./menu-item";

interface MenuSectionProps {
    title: string
    items: MenuItemProps[]
}

export function MenuSection({title, items}: MenuSectionProps){
    return(
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">{title}</h2>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </ul>
        </section>
    )
}