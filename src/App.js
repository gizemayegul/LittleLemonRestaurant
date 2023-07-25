import About from './components.js/About';
import Footer from './components.js/Footer';
import Hero from './components.js/Hero';
import Highlights from './components.js/Highlights';
import Nav from './components.js/Nav';
import Testimonals from './components.js/Testimonals';
import { useState } from 'react';
import { useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI } from './components.js/Temp';
import HighlightsCards from './components.js/HighlightsCards';
import BookingForm from './components.js/BookingForm';
import { ChakraProvider } from '@chakra-ui/react';




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
  const [allValues, setAllValues] = useState(reservationInitial);
  useEffect(() => {
    initializeTimes1(new Date())
  }, [new Date()]);

  const initializeTimes1 = () => {
    const date = new Date();
    const initialState1 = fetchAPI(date)
    return initialState1
  }
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

  const changeHandler = e => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })
    updateTime(selectedDate);
  }

  const selectedDate = allValues.date;


  useEffect(() => {
    updateTime(selectedDate);
  }, [selectedDate])



  function updateTime(selectedDate) {
    if (selectedDate === '2023-03-03') {
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




  return (<>
    <div className='wrapper'>
      <div className='Nav'><Nav
        handleModal={handleModal}
        showModal={showModal}
        setShowModal={setShowModal}
        state={state}
        updateTime={updateTime}
        submitForm={submitForm}
        reservationInitial={reservationInitial}
        changeHandler={changeHandler}
      /></div>
      <Hero />
      <Highlights />
      <HighlightsCards />
      <Testimonals />
      <ChakraProvider resetCSS={false} >
        <BookingForm
          changeHandler={changeHandler}
          state={state}
          submitForm={submitForm}
          reservationInitial={reservationInitial}
          allValues={allValues}
          handleModal={handleModal}                               >
        </BookingForm>
      </ChakraProvider>
      <About />
      <Footer />
    </div>
  </>
  );
}

export default App;