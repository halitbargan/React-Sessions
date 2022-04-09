import React,{createContext} from 'react'

export const ProductContext = createContext()

const initialProducts = [
    {id:0, product: "Basketball", price: 12.99 },
    {id:1, product: "Baseball", price: 9.99 },
    {id:2, product: "Tennis Racquet", price: 89.99 }
]

export const ProductProvider = (props)=>{
    const [products, setProducts] = useState(initialProducts)


    const increasePrice=(event)=>{
        const newProducts=[...products];
        console.log('increasePrice',event.target.id)
        newProducts[event.target.id].price=newProducts[event.target.id].price+1;
        setProducts(newProducts)
//         newProducts[e.target.id].price += 1 ya da ++
// newProducts[e.target.id].price -= 1 ya da --
    };
    const decreasePrice=(event)=>{
        const newProducts=[...products];
        console.log('decreasePrice')
        newProducts[event.target.id].price=newProducts[event.target.id].price-1;
        setProducts(newProducts)
    };
}
 

