import React, { Component }  from 'react';


const Highlights = () => {
    return (<>
            <div>
                <div className="highlights-flex-container">
                    <h1 className="highlights-flex-item">These Week Specials!</h1>
                    <button className="highlights-flex-item-button">Online Menu</button>
                </div>
                <div className="highlights-flex-container1">
                    <div className="card"> 
                        <div className="card-image">
                            <img src="lemon dessert.jpg" alt="image"/>
                        </div>
                        <div className="card-description">
                            <div className="name">
                                <p>Greek Salad</p>
                            </div>
                            <div className="price">
                                <p> 12.99$</p>
                            </div>
                        
                        </div>
                        <div className="card-body">
                            <p>The famous greek salad of crispy<br/> lettuce, peppers, olives and our <br/>Chicago style feta cheese, garnished<br/> with <br/>crunchy garlic and<br/> rosemary croutons. </p>
                        </div>
                        <div className="card-footer">
                            <p>Order Delivery</p>
                            <div>
                                <img src="Group.jpg"/>
                            </div>  
                        </div>
                    </div>
                    <div className="card"> 
                        <div className="card-image">
                            <img src="lemon dessert.jpg" alt="image"/>
                        </div>
                        <div className="card-description">
                            <div className="name">
                                <p>Bruschetta</p>
                            </div>
                            <div className="price">
                                <p> 5.99$</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p>Our Bruschetta is made from  <br/>
                            grilled bread that has <br/>been smeared with garlic and  <br/>seasoned with<br/> salt and olive oil.  </p>
                        </div>
                        <div className="card-footer">
                            <p>Order Delivery</p>
                            <div>
                                <img src="Group.jpg"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="card"> 
                        <div className="card-image">
                            <img src="lemon dessert.jpg" alt="image"/>
                        </div>
                        <div className="card-description">
                            <div className="name">
                                <p>Lemon Dessert</p>
                            </div>
                            <div className="price">
                                <p> 5.99$</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p>This comes straight from grandma’s<br/> recipe book, every last<br/> ingredient has been sourced and<br/> is as authentic as can be <br/>imagined. </p>
                        </div>
                        <div className="card-footer">
                            <p>Order Delivery</p>
                            <div>
                                <img src="Group.jpg"/>
                            </div>  
                        </div>
                    </div>
                    


                    
                </div>
            </div>

                </>

    );
};

export default Highlights;