import React from 'react';
import './App.css';
import HeaderSection from "./HeaderSection"

const products = [
    { header: "Disclosure 1", content: ["Disclosure 3", "Disclosure 3", "Disclosure 3"], footer: "Disclosure3" },
    { header: "Disclosure 1", content: ["Disclosure 3", "Disclosure 3", "Disclosure 3"], footer: "Disclosure3" },
    { header: "Disclosure 1", content: ["Disclosure 3", "Disclosure 3", "Disclosure 3"], footer: "Disclosure3" }
]
function SecondContainer() {
    return (
        <>
            <HeaderSection title={"Check out our offers"} />
            <div className="productContainer">
                <div className="products">All Products</div>
                <>
                    {products.map((item, index) => {
                        return (
                            <div key={index} className="productDescription">
                                <h2 className="productHeader">{item.header}</h2>
                                <div className="contentBox">
                                    {item.content.map((item, index) => {
                                        return (<div key={index} style={{ marginBottom: "13px" }}>{item}</div>)
                                    })}</div>
                                <div>{item.footer}</div>
                            </div>
                        )
                    })

                    }
                </>

            </div>
        </>
    );
}

export default SecondContainer;


