import {createContext,useState} from 'react'

export const ProductContext = createContext()

const initialProducts = [
    {id:0, product: "Basketball", price: 12.99 },
    {id:1, product: "Baseball", price: 9.99 },
    {id:2, product: "Tennis Racquet", price: 89.99 }
]

export const ProductProvider = (props)=>{
    const [products, setProducts] = useState(initialProducts)


    const increasePrice=(id)=>{
        const newProducts=[...products];
        console.log('increasePrice',id)
        // 
        newProducts[id].price+=1
        setProducts(newProducts)
//         newProducts[e.target.id].price += 1 ya da ++
// newProducts[e.target.id].price -= 1 ya da --
    };
    const decreasePrice=(id)=>{
        const newProducts=[...products];
        console.log('decreasePrice')
        newProducts[id].price-=1
        setProducts(newProducts)
    };

    return(
        <ProductContext.Provider
        value={{products, increasePrice, decreasePrice,setProducts}}>
            {props.children}
        </ProductContext.Provider>
    )
}
 

