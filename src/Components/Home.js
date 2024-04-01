import React from 'react'

function Home(props) {
    return (
        <div>
           
            <h1 style={{color:'skyblue'}}>Bhushkart</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://cellbuddy.in/buddy/wp-content/uploads/2022/09/11-Pro-Max-Silver.png" alt='' />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                     
                </div>
            </div>
        </div>
    )
}
export default Home