import {useState} from "react";
import ProductList from "./ProductList";

const initialProducts = [
    {id:0, product: "Basketball", price: 12.99 },
    {id:1, product: "Baseball", price: 9.99 },
    {id:2, product: "Tennis Racquet", price: 89.99 }
]

const WithPropsApp = () => {
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

  return (
    <div>
      <h3>WithPropsApp</h3>
      <ProductList products={products} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
    </div>
  );
};

export default WithPropsApp;