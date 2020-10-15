import React, { useState } from 'react';
import '../App.css';
import HeaderSection from "./HeaderSection"
import { useSelector } from 'react-redux'
// const products = [
//     { header: "Disclosure 1", content: ["Disclosure 3", "Disclosure 3", "Disclosure 3"], footer: "Disclosure3" },
//     { header: "Disclosure 1", content: ["Disclosure 3", "Disclosure 3", "Disclosure 3"], footer: "Disclosure3" },
//     { header: "Disclosure 1", content: ["Disclosure 3", "Disclosure 3", "Disclosure 3"], footer: "Disclosure3" }
// ]
const OfferPage = () => {
    const products = useSelector((state) => state.productDisplayReducer.offers);
    console.log("state===>>", useSelector((state) => state.productDisplayReducer.offers))

    const [productType, setProductType] = useState('')
    const [productChanged, setProductChanged] = useState(products)

    const changeProductType = (e) => {

        setProductType(e.target.value);
        // let arr = [];
        if (e.target.value !== "All Products") {
            const filteredProducts = products.filter((option) => {
                return option.offerType === e.target.value
            })

            setProductChanged(filteredProducts);
        } else {
            setProductChanged(products);
        }
    }
    console.log(productChanged)
    return (
        <>
            <HeaderSection title={"Check out our offers"} />
            <div className="productContainer">
                <div className="products">
                    <select id="productType" name="productType" className="dropDownDisplay" onChange={changeProductType}>
                        <option className="bgcolorWhite" selected value="All Products">All Products</option>
                        <option className="bgcolorWhite" value="internet">Internet</option>
                        <option className="bgcolorWhite" value="tv">TV</option>
                        <option className="bgcolorWhite" value="phone">Phone</option>
                    </select>
                </div>
                <>
                    {productChanged && productChanged.map((item, index) => {
                        return (
                            <div key={index} className="productDescription">
                                <div className="column">
                                    <h2 className="productHeader">Disclosures</h2>

                                    <div className="contentBox">
                                        <div className="leftContent">
                                            <div key={index}>{item.disclosures.disclosure1}</div>
                                            <div key={index}>{item.disclosures.disclosure2}</div>
                                            <div key={index}>{item.disclosures.disclosure3}</div>
                                        </div>
                                        <div className="column">
                                            <div className="priceBlock" >${item.price}*</div>
                                        </div>
                                    </div>
                                    <div >Disclosure3 Disclosure3 Disclosure3</div>
                                </div>

                            </div>
                        )
                    })

                    }
                </>

            </div>
        </>
    );
}

export default OfferPage;


