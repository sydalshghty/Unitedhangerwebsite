import "../CSS/all-Products.css";
import imageProduct from "../images/products__2_-removebg-preview.png";
import productimgone from "../images/products (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
function AllProducts(){
    const navigate = useNavigate();

    const goToProduct = () => {
        navigate("/product")
    }
    return(
        <div className="all-Products">
            <img className="background-products" src= {productimgone} alt="img-product-one"/>
            <div className="content-products">
                <div className="col-product">
                <img src= {imageProduct} alt="img-product"/>
                <div className="product-text">
                    <h5 className="heading-one">MARINA</h5>
                    <p>3 SIZES</p>
                    <div className="icon-product">
                        <h5>MORE DETAILES</h5>
                        <FontAwesomeIcon
                        onClick={goToProduct}
                        className="icon-right"icon={faArrowRight}/>
                    </div>
                </div>
                </div>
                <div className="col-product">
                <img src= {imageProduct} alt="img-product"/>
                <div className="product-text">
                    <h5 className="heading-one">MARINA</h5>
                    <p>3 SIZES</p>
                    <div className="icon-product">
                        <h5>MORE DETAILES</h5>
                        <FontAwesomeIcon 
                        onClick={goToProduct}
                        className="icon-right" icon={faArrowRight}/>
                    </div>
                </div>
                </div>
                <div className="col-product">
                <img src= {imageProduct} alt="img-product"/>
                <div className="product-text">
                    <h5 className="heading-one">MARINA</h5>
                    <p>3 SIZES</p>
                    <div className="icon-product">
                        <h5>MORE DETAILES</h5>
                        <FontAwesomeIcon
                        onClick={goToProduct}
                        className="icon-right" icon={faArrowRight}/>
                    </div>
                </div>
                </div>
                <div className="col-product">
                <img src= {imageProduct} alt="img-product"/>
                <div className="product-text">
                    <h5 className="heading-one">MARINA</h5>
                    <p>3 SIZES</p>
                    <div className="icon-product">
                        <h5>MORE DETAILES</h5>
                        <FontAwesomeIcon
                        onClick={goToProduct}
                        className="icon-right" icon={faArrowRight}/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default AllProducts;