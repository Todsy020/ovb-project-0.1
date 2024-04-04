import { Item } from "./Item"
import { items } from "./items"

export const ItemsList = () => {
    return (
        <div id="itemsList" className="mt-64 flex items-center justify-center gap-9 flex-wrap">
        {items.map(({name, description, image}) => (<Item key={name} description={description} image={image}/>))}
        </div>
    )
}