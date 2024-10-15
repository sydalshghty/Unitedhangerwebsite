import "../CSS/products-home.css";
import productsImg from "../images/products.png";
function ProductsHome(){
    return(
        <div className="products-home">
            <img src= {productsImg} alt="products-img"/>
            <div className="container">
                    <p className="p-hangers">top hangers</p>
                    <p className="p-one">bOTTOM hangers</p>
                    <p className="p-one">JACKET & SUIT hangers</p>
                    <p className="p-one">KIDSWEAR hangers</p>
                    <p className="p-one">BABYWEAR hangers</p>
                    <p className="p-one p-access">aCCESSORIES</p>
            </div>
        </div>
    )
}
export default ProductsHome;