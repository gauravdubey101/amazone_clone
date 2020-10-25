import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/CBCC_Jup_w2/ILM/ILM_640x45._CB417590250_.jpg" alt=""/>

                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {/* Basket  */}
                    {/* Basket  */}
                    {/* Basket  */}
                    {/* Basket  */}
                    {/* Basket  */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
                       
        </div>
    );
}

export default Checkout;
