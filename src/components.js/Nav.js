

import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";
import React, { Component } from 'react';
import { ChakraProvider } from "@chakra-ui/react";

const Nav = (props) => {
    return (<>
        <nav>
            <div className="nav-flex">
                <div className="nav-flex-item">
                    <img src="logo.svg" alt="logo" />
                </div>
                <div className="nav-flex-item-1">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/booking" onClick={props.handleModal}>Reservation</Link>
                            {props.showModal && (
                                <ChakraProvider>
                                    <BookingForm
                                        changeHandler={props.changeHandler}
                                        state={props.state}
                                        submitForm={props.submitForm}
                                        reservationInitial={props.reservationInitial}
                                        allValues={props.allValues}     
                                        handleModal={props.handleModal}                               >
                                    </BookingForm>
                                </ChakraProvider>
                            )}
                        </li>
                        <li><Link to="/orderonline">Order Online</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );


};

export default Nav;