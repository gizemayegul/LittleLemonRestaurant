
import React from 'react';
import ConfirmedBooking from './ConfirmedBooking';
import { Link } from "react-router-dom";
import { Formik, Form, Field, FormikProvider } from 'formik';
import { useFormik, validateYupSchema, validationSchema } from "formik";
import * as Yup from 'yup';

import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Stack,
    Select
} from "@chakra-ui/react";
import { submitAPI } from './Temp';




const BookingForm = (props) => {
    const formik = useFormik({
        initialValues: props.reservationInitial,
        validationSchema: Yup.object().shape(
            {
                name: Yup.string().min(3, 'minimum 3 character').required('Name is required'),
                surname: Yup.string().min(3, 'minimum 3 character').required('Surname is required'),
                email: Yup.string().email('Please enter a right form email address').required('Email is required'),
                phone: Yup.number().min(10, 'at least 10 character ').required('Phone is required'),
                date: Yup.date().required('Date is required'),
                guest: Yup.number().oneOf(["1", "2", "3", "4", "5", "6"]).required('This is required'),
                occasion: Yup.string().oneOf(["Birthday", "Anniversary"]).required('This is required'),
                time: Yup.string().required('time is required')
            }
        ),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log('selam', values);
            submitAPI(values);
        }
    });

    return (
        <FormikProvider value={formik}>
            <Flex className='modal' >
                <Box className='modal-content'>
                    <form onSubmit={formik.handleSubmit}
                        onChange={props.changeHandler}

                    >
                        <VStack spacing={4} align="flex-start">
                            <FormControl isInvalid={!!formik.errors.name && formik.touched.name}>
                                <FormLabel htmlFor="name">First Name</FormLabel>
                                <Field
                                    as={Input}
                                    value={formik.values.name}
                                    id="name"
                                    name="name"
                                    type="text"
                                    variant="filled"
                                    {...formik.getFieldProps('name')}
                                />
                                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.surname && formik.touched.surname}>
                                <FormLabel htmlFor="surname">Last Name</FormLabel>
                                <Field
                                    as={Input}
                                    id="surname"
                                    name="surname"
                                    type="text"
                                    variant="filled"
                                    {...formik.getFieldProps('surname')}
                                />
                                <FormErrorMessage>{formik.errors.surname}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Field
                                    as={Input}
                                    id="email"
                                    name="email"
                                    type="email"
                                    variant="filled"
                                    {...formik.getFieldProps('email')}
                                />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.phone && formik.touched.phone}>
                                <FormLabel htmlFor="phone">Phone</FormLabel>
                                <Field
                                    as={Input}
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    variant="filled"
                                    {...formik.getFieldProps('phone')}
                                />
                                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                                <FormLabel htmlFor="date">Date</FormLabel>
                                <Field
                                    as={Input}
                                    id="date"
                                    value={formik.values.date}
                                    name="date"
                                    type="date"
                                    variant="filled"
                                    {...formik.getFieldProps('date')}

                                />
                                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="guest">Guest</FormLabel>
                                <Field
                                    as={Input}
                                    id="guest"
                                    name="guest"
                                    type="number"
                                    variant="filled"
                                    placeholder='1'
                                    min="1"
                                    max="6"
                                    id="guests"
                                    {...formik.getFieldProps('guest')}

                                />
                                <FormErrorMessage>{formik.errors.guest}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="time">Time</FormLabel>
                                <Field
                                    as={Select}
                                    id="time"
                                    name="time"
                                    type="combobox"
                                    variant="filled"
                                    {...formik.getFieldProps('time')}
                                >
                                    {props.state.map(time => (
                                        <option key={time} value={time}
                                        >
                                            {time}
                                        </option>
                                    ))}
                                </Field>
                                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                                <Field
                                    as={Select}
                                    id="occasion"
                                    name="occasion"
                                    type="combobox"
                                    variant="filled"
                                    id="occasion"
                                    {...formik.getFieldProps('occasion')}>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </Field>
                                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                            </FormControl>
                            <Stack direction='row' spacing={4} align='center'>
                                <Button
                                    type="submit"
                                    aria-label="On Click"
                                    colorScheme='teal' 
                                    variant='solid'                                    width="full">
                                    <Link to="/confirmation" onClick={props.confirmHandler}>Submit </Link>
                                    {(props.confirmModal && submitAPI()) && (
                                        <ConfirmedBooking
                                            confirmHandler={props.confirmHandler}
                                            confirmModal={props.confirmModal}
                                            setConfirmModal={props.setConfirmModal}
                                            confirmButton={props.confirmButton}
                                        >
                                        </ConfirmedBooking>
                                    )}
                                </Button>
                            </Stack>

                        </VStack>
                    </form>
                </Box>
            </Flex>
        </FormikProvider>
    );
}

export default BookingForm;
