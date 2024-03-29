import {useState, useEffect} from "react";
import Product from "./Product.js";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";

export default function Products(props) {
    const [products, setProducts] = useState([]);
    const {get, loading} = useFetch("https://react-tutorial-demo.firebaseio.com/")
    useEffect(() => {
        get("supermarket.json")
        .then(data => {
            setProducts(data)
        })
        .catch((error) => console.log("Could not load products", error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="products-layout">
            <h1>Product</h1>
            <p>Take a look at our products</p>
            <div className="products-grid">
                {loading && <Loader />}
                {products.map((product) => {
                    return (
                        <Product 
                        key={product.id} 
                        details={product}
                        cart={props.cart}
                        onProductDelete={props.onProductDelete}
                        onProductAdd={props.onProductAdd}
                        />
                    )
                })}
            </div>
        </div>
    )
}