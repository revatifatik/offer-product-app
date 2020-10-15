import React from 'react';
import HeaderSection from "./HeaderSection"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getOffersFromBackend } from '../actions/index'

const productArr = [
    "Internet", "Phone", "Tv"
]
const specsArr = ["High speeds", "Reliable connections", "Most popular channels", "High speeds", "Reliable connections", "Most popular channels"]


const LandingPage = () => {

    const dispatch = useDispatch()
    const getOffers = () => {
        dispatch(getOffersFromBackend())
    }
    return (
        <>
            <HeaderSection title={"Get your best deal today!"} />
            <div className="bottomContainer">
                <div className="commonTile displayDesktop">
                    <h2 className="firstTileHeader">Deals as low as</h2>
                    <div className="priceBlock">$100*</div>
                </div>
                <div className="secondTile">
                    <h2 className="secondTileHeader">What are you looking for today?</h2>
                    {productArr.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="tabs"
                                onClick={() => getOffers()}
                            >
                                <Link style={{ textDecoration: "none", color: "white" }} to="offers" >{item}</Link>

                            </div>
                        )
                    })}
                </div>
                <div className="commonTile displayDesktop" style={{ padding: "52px 0 0 65px" }}>
                    {specsArr.map((item, index) => {
                        return (
                            <p key={index} className="tileContent">{item}</p>
                        )
                    })}</div>

                <div className="displayMobile">
                    <div className="commonTile">
                        <h2 className="firstTileHeader">Deals as low as</h2>
                        <div className="priceBlock">$100*</div>
                        <hr className="divider" />
                        <>
                            {specsArr.map((item, index) => {
                                return (
                                    <p key={index} className="tileContent">{item}</p>
                                )
                            })}</>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LandingPage;