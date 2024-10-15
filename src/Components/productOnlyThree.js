import "../CSS/productOnly-3.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import mainImgProduct from "../images/PRODUCT (2) (3).png";
import imgOne from "../images/PRODUCT (4) (1) (1).png";
import imgTwo from "../images/PRODUCT (5) (1) (2) (1).png";
import imgThree from "../images/PRODUCT (6) (2) (1).png";
import imgFour from "../images/PRODUCT (7) (1) (1).png";
import { useState } from "react";
function ProductOnlyThree(){
    const [mainImg, setImgMain] = useState(mainImgProduct);
   function changeMainImgOne(){
    setImgMain(imgOne)
   }
   function changeImgTwo(){
    setImgMain(imgTwo);
   }
   function changeImgThree(){
    setImgMain(imgThree);
   }
   function changeImgFour(){
    setImgMain(imgFour);
   }
    return(
        <div className="product-only-three">
            <div className="content-products">
                <div className="product-img-one">
                    <img
                    src={mainImg} 
                    alt="product-img-one"
                    />
                </div>
                <div className="product-img-two">
                    <img
                    onClick={changeMainImgOne}  
                    src={imgOne} 
                    alt="product-one"
                    />
                    <img
                    onClick={changeImgTwo} 
                    src={imgTwo} 
                    alt="product-two"
                    />
                    <img
                    onClick={changeImgThree} 
                    src={imgThree} 
                    alt="product-three"
                    />
                    <img
                    onClick={changeImgFour} 
                    src={imgFour} 
                    alt="product-four"
                    />
                </div>
            </div>
            <div className="button-icons">
                <FontAwesomeIcon
                className="icon-left" 
                icon={faArrowLeft}
                />
                <FontAwesomeIcon className="icon-right" icon={faArrowRight}/>
            </div>
        </div>
    )
}
export default ProductOnlyThree;