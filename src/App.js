import { Route, Routes } from 'react-router';
import About from './components.js/About';
import Footer from './components.js/Footer';
import Hero from './components.js/Hero';
import Highlights from './components.js/Highlights';
import Nav from './components.js/Nav';
import Testimonals from './components.js/Testimonals';
import { useState } from 'react';
import { useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI } from './components.js/Temp';
import { object, string, number, date, InferType } from 'yup';
import { useFormik } from 'formik';
import React, { Component }  from 'react';
import * as Yup from 'yup';






function App() {

  const reservationInitial = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    date: '',
    guest: '',
    occasion: '',
    time: '',
  }

  const formik = useFormik({
    initialValues: reservationInitial,
    validationSchema: Yup.object().shape(
        {
            name: Yup.string().min(3, 'minimum 3 character').required('Name is required'),
            surname: Yup.string().min(3, 'minimum 3 character').required('Surname is required'),
            email: Yup.string().email('Please enter a right form email address').required('Email is required'),
            phone: Yup.string().min(10,'at least 10 character ').required('Phone is required'),
            date: Yup.date().required('Date is required'),
            guest: Yup.number(),
            occasion: Yup.string(),
            time: Yup.string().required('time is required')
        }
    ),
    onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        console.log('selam',values);
        submitAPI(values);
    }
});

  const [allValues, setAllValues] = useState(reservationInitial);

  useEffect(() => {
    initializeTimes1(new Date())
  }, [new Date()])

  const initializeTimes1 = () => {
    const date = new Date();
    const initialState1 = fetchAPI(date)
    return initialState1
  }

  console.log('yeni', initializeTimes1());

  function reducer(state, action) {
    switch (action.type) {
      case 'update_time':
        return ['15:00', '17:00']
      case 'initial':
        return initializeTimes1();
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initializeTimes1())

  console.log('state', state)
  const changeHandler = e => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })
    updateTime(selectedDate);
  }

  const selectedDate = allValues.date;
  

  useEffect(() => {
    updateTime(selectedDate);
  }, [selectedDate])

 

  function updateTime(selectedDate) {
    if (selectedDate === '2023-03-03'||'2023-04-04'||'2023-03-10' ) {
      return dispatch({ type: 'update_time' })
    } else {
      return dispatch({ type: 'initial' })
    }
  }

  function submitForm(allValues) {
    const formData = allValues;
    const reservationInfo = submitAPI(formData)
    return reservationInfo;
  }



  const [showModal, setShowModal] = useState(false);

  const handleModal = e => {
    e.preventDefault();
    setShowModal(!showModal);
  }

  const [confirmModal, setConfirmModal] = useState(false);

  const confirmHandler = (e) => {
    e.preventDefault();
    submitForm(allValues);
    setConfirmModal(true)
  }


  const confirmButton = e => {
    e.preventDefault();
    setConfirmModal(false)
    setShowModal(false)
  }

  return (<>
    <div className='container'>
      <div className='Nav'><Nav
        handleModal={handleModal}
        showModal={showModal}
        setShowModal={setShowModal}
        state={state}
        updateTime={updateTime}
        confirmHandler={confirmHandler}
        confirmModal={confirmModal}
        setConfirmModal={setConfirmModal}
        submitForm={submitForm}
        confirmButton={confirmButton}
        reservationInitial={reservationInitial}
        changeHandler={changeHandler}
        allValues={allValues}
      /></div>
      <div className='Hero'><Hero /></div>
      <div className='Highlights'><Highlights /></div>
      <div className='Testimonals'><Testimonals /></div>
      <div className='About'> <About /></div>
      <div className='Footer'><Footer /></div>
    </div>
  </>
  );
}

export default App;

