import React from 'react'
import { MenuSection } from './menu-section'
import type { MenuItemProps } from './menu-item'

const foodBurguerItems: MenuItemProps[] = [
    {name: "Old School", price: "$8800", description: "Blend 150gr, lechuga, tomate, jamon, queso dambo, salsa secreta"},
    { name: "Rustica", price: "$8600", description: "Blend 150gr, salsa criolla, lechuga, tomate, muzzarella, alioli" },
    { name: "Simple cheddar", price: "$8800", description: "Blend 150gr, x2 cheddar, panceta, cebolla caramelizada, barbacoa, baño de cheddar" },
    { name: "Bomba cheddar", price: "$10900", description: "Doble blend 150gr, x4 cheddar, panceta, cebolla caramelizada, barbacoa, baño de cheddar, papas con cheddar" },
    { name: "Hiro Burguer", price: "$8600", description: "Blend 150gr, cebolla caramelizada, roquefort, rucula, alioli" },
    { name: "Pickle Rick", price: "$8600", description: "Blend 150gr, pepinillos encurtidos, repollo encurtido, alioli, queso dambo" },
    { name: "4 quesos", price: "$10500", description: "Doble blend 150gr, panceta, barbacoa, queso dambo, muzza, roquefort, sardo" },
    { name: "Crispy", price: "$8900", description: "Blend 150gr, panceta, huevo frito, queso dambo, cebolla crispy, morrones asados, barbacoa o alioli" },
    { name: "Vegeta", price: "$7200", description: "Blend vegano (consultar), lechuga, tomate, queso dambo" },
    { name: "Vegeta Blue", price: "$8100", description: "Doble blend vegano (consultar), roquefort, rucula, cebolla caramelizada" },
]

const foodChipsItems: MenuItemProps[] = [
    { name: "Papas tradicionales", price: "$4800", description: "" },
    { name: "Papas provenzal", price: "$5300", description: "Provenzal casero" },
    { name: "Papas de la casa", price: "$6300", description: "Huevo frito, panceta y verdeo" },
    { name: "Papas con cheddar", price: "$6300", description: "Cheddar, panceta y verdeo" },
    
]

const foodPizzaItems: MenuItemProps[] = [
    { name: "Muzzarella", price: "$9400", description: "Muzzarella, salsa" },
    { name: "Napolitana", price: "$12600", description: "Muzzarella, tomate, provenzal" },
    { name: "Fugazzeta", price: "$11000", description: "c/jamon o c/roquefort - Muzzarella, aji molido, cebolla" },
    { name: "Roquefort", price: "$14000", description: "Muzzarella, queso azul" },
    { name: "Especial", price: "$14000", description: "Muzzarella, jamon etiqueta negra, morron" },
    { name: "Especial con huevo", price: "$15600", description: "Muzzarella, jamon etiqueta negra, morron, huevo duro" },
    { name: "Calabresa", price: "$14500", description: "Muzzarella, colchon de tomates, salame, aji molido" },
    { name: "Provenzal", price: "$12600", description: "Muzzarella, papas españolas, provenzal casero" },
    { name: "Caprese", price: "$12600", description: "Muzzarella, queso colonia, albahaca, tomates cherry" },
    { name: "De la casa", price: "$15000", description: "Muzzarella, papas fritas, panceta, huevo frito, verdeo, cherrys" },
    { name: "4 quesos", price: "$15000", description: "Muzzarella, roquefort, colonia, sardo y albahaca" },
    { name: "Vizcaiana", price: "$12600", description: "Muzzarella, cebolla, tomates, verdeo, queso sardo" },
]

const kidsMenuItems: MenuItemProps[] = [
    { name: "Hamburguesa + Papas + Agua saborizada", price: "$5500", description: "" },
]

const drinkItems: MenuItemProps[] = [
    { name: "Cerveza", price: "$8500", description: "Descripcion bebida" },
    { name: "Tragos", price: "$8500", description: "Descripcion bebida" },
    { name: "Refresco", price: "$8500", description: "Descripcion bebida" },
    { name: "Agua", price: "$8500", description: "Descripcion bebida" }
]


export function Menu(){
    return(

        //Agregar una foto aca arriba
        <div className='max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg'>
            <h1 className='text-4xl font-bold text-center mb-9'>NUESTRO MENÚ</h1>

            <MenuSection title='Burguers' items={foodBurguerItems}/>
            <MenuSection title='Papas' items={foodChipsItems}/>
            <MenuSection title='Pizzas' items={foodPizzaItems} />
            <MenuSection title='Menu infantil' items={kidsMenuItems} />
            <MenuSection title='Bebidas' items={drinkItems}/>
        </div>
    )
}
