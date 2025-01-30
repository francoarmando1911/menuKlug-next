import React from 'react'
import { MenuSection } from './menu-section'
import type { MenuItemProps } from './menu-item'

const foodItems: MenuItemProps[] = [
    {name: "Hamburguesa con cheddar", price: "$8500"},
    { name: "Hamburguesa con cheddar", price: "$8500" },
    { name: "Hamburguesa con cheddar", price: "$8500" }
]

const drinkItems: MenuItemProps[] = [
    { name: "Cerveza", price: "$8500" },
    { name: "Refresco", price: "$8500" },
    { name: "Agua", price: "$8500" }
]

const extraItems: MenuItemProps[] = [
    { name: "Papas", price: "$8500" },
    { name: "Nuggets", price: "$8500" },
    { name: "Flan", price: "$8500" }
]

export function Menu(){
    return(
        <div className='max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl'>
            <h1 className='text-3xl font-bold text-center mb-9'>Nuestro menu</h1>

            <MenuSection title='Comida' items={foodItems}/>
            <MenuSection title='Bebidas' items={drinkItems}/>
            <MenuSection title='Extras' items={extraItems}/>
        </div>
    )
}
