import { fireEvent,getAllByDisplayValue,render,screen
 } from "@testing-library/react";

 import BookingForm from "./BookingForm";


 test('Renders the Booking heading',()=>{
    render(<BookingForm/>);
    const headingElement=screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
 })
 test('InitilizeTimes returns expected value',()=>{
   render(<BookingForm/>)
   const timesValue =screen.getAllByRole("combobox")
   expect(timesValue[0]).toBeInTheDocument();

   const secondOption = timesValue[0].children[1];
   expect(secondOption).toHaveValue('option2')
} )

describe('updateTimes', () => {
  const initialState = [
    { value: '17:00', disabled: false },
    { value: '18:00', disabled: false },
    { value: '19:00', disabled: false },
  ];

  it('should disable the selected time', () => {
    const action = { type: 'disableTime', payload: '18:00' };
    const expectedState = [
      { value: '17:00', disabled: false },
      { value: '18:00', disabled: true },
      { value: '19:00', disabled: false },
    ];
    expect(updateTimes(initialState, action)).toEqual(expectedState);
  });

  it('should not modify state if action type is not recognized', () => {
    const action = { type: 'unknownActionType' };
    expect(updateTimes(initialState, action)).toEqual(initialState);
  });
describe('BookingForm', () => {
  test('renders all form fields', () => {
    const reservationInitial = {
      name: '',
      surname: '',
      email: '',
      phone: '',
      date: '',
      guest: '',
      occasion: '',
      time: '',
    };

    render(<BookingForm reservationInitial={reservationInitial} />);

    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone')).toBeInTheDocument();
    expect(screen.getByLabelText('Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Guest')).toBeInTheDocument();
    expect(screen.getByLabelText('Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
  });

  test('displays error message when form fields are invalid', () => {
    const reservationInitial = {
      name: '',
      surname: '',
      email: '',
      phone: '',
      date: '',
      guest: '',
      occasion: '',
      time: '',
    };

    render(<BookingForm reservationInitial={reservationInitial} />);

    fireEvent.submit(screen.getByRole('button', { name: 'On Click' }));

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Surname is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Phone is required')).toBeInTheDocument();
    expect(screen.getByText('Date is required')).toBeInTheDocument();
    expect(screen.getByText('This is required')).toBeInTheDocument();
    expect(screen.getByText('time is required')).toBeInTheDocument();
  });
});

});