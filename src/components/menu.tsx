import React from 'react'
import { MenuSection } from './menu-section'
import type { MenuItemProps } from './menu-item'

const foodBurguerItems: MenuItemProps[] = [
    {name: "Old School", price: "$8800"},
    { name: "Rustica", price: "$8600" },
    { name: "Simple cheddar", price: "$8800" },
    { name: "Bomba cheddar", price: "$10900" },
    { name: "Hiro Burguer", price: "$8600" },
    { name: "Pickle Rick", price: "$8600" },
    { name: "4 quesos", price: "$10500" },
    { name: "Crispy", price: "$8900" },
    { name: "Vegeta", price: "$7200" },
    { name: "Vegeta Blue", price: "$8100" },
]

const foodChipsItems: MenuItemProps[] = [
    { name: "Papas tradicionales", price: "$4800" },
    { name: "Papas provenzal", price: "$5300" },
    { name: "Papas de la casa", price: "$6300" },
    { name: "Papas con cheddar", price: "$6300" },
    
]

const foodPizzaItems: MenuItemProps[] = [
    { name: "Muzzarella", price: "$9400" },
    { name: "Napolitana", price: "$12600" },
    { name: "Fugazzeta", price: "$11000" },
    { name: "Roquefort", price: "$14000" },
    { name: "Especial", price: "$14000" },
    { name: "Especial con huevo", price: "$15600" },
    { name: "Calabresa", price: "$14500" },
    { name: "Provenzal", price: "$12600" },
    { name: "Caprese", price: "$12600" },
    { name: "De la casa", price: "$15000" },
    { name: "Vizcaiana", price: "$12600" },
]

const kidsMenuItems: MenuItemProps[] = [
    { name: "Hamburguesa + Papas + Agua saborizada", price: "$5500" },
]

const drinkItems: MenuItemProps[] = [
    { name: "Cerveza", price: "$8500" },
    { name: "Tragos", price: "$8500" },
    { name: "Refresco", price: "$8500" },
    { name: "Agua", price: "$8500" }
]


export function Menu(){
    return(
        <div className='max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl'>
            <h1 className='text-3xl font-bold text-center mb-9'>NUESTRO MENÚ</h1>

            <MenuSection title='Burguers' items={foodBurguerItems}/>
            <MenuSection title='Papas' items={foodChipsItems}/>
            <MenuSection title='Pizzas' items={foodPizzaItems} />
            <MenuSection title='Menu infantil' items={kidsMenuItems} />
            <MenuSection title='Bebidas' items={drinkItems}/>
        </div>
    )
}
