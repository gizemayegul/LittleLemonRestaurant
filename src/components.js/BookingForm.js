
import React from 'react';
import { Field, FormikProvider } from 'formik';
import { useFormik } from "formik";
import * as Yup from 'yup';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Select,

} from "@chakra-ui/react";

import {
    CloseButton,
    useDisclosure,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogBody,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogContent,
} from "@chakra-ui/react";



const BookingForm = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();


    const formik = useFormik({
        initialValues: props.reservationInitial,
        validationSchema: Yup.object().shape(
            {
                name: Yup.string().min(3, 'minimum 3 character').required('Name is required'),
                surname: Yup.string().min(3, 'minimum 3 character').required('Surname is required'),
                email: Yup.string().email('Please enter a right form email address').required('Email is required'),
                phone: Yup.number().min(10, 'at least 10 character ').required('Phone is required'),
                date: Yup.date().required('Date is required'),
                time: Yup.string().required('time is required')
            }
        ),
        onSubmit: ( values, { resetForm }) => {
            resetForm({});
            onOpen();


        }
    });



    return (
        <FormikProvider

            data-testid="booking" value={formik}>
            <Flex className='modal' role="modal">
                <Box className='modal-content'>
                    <h2 id='reservation'>Reservation</h2>
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
                                    validate={formik.validationSchema}
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
                            <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                                <FormLabel htmlFor="guest">Guest</FormLabel>
                                <Field
                                    as={Select}
                                    name="guest"
                                    type="number"
                                    variant="filled"
                                    id='guests'
                                    {...formik.getFieldProps('guest')}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Field>
                                <FormErrorMessage>{formik.errors.guest}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                                <FormLabel htmlFor="time">Time</FormLabel>
                                <Field
                                    as={Select}
                                    id="time"
                                    name="time"
                                    type="combobox"
                                    variant="filled"
                                    placeholder="select"
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
                            <FormControl isInvalid={!!formik.errors.occasion && formik.touched.occasion}>
                                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                                <Field
                                    as={Select}
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

                            <Button
                                isDisabled={formik.touched && !formik.isValid}
                                type="submit"
                                aria-label="On Click"
                                colorScheme='yellow'
                                variant='solid' width="full"
                            >
                                Submit
                            </Button>
                            <AlertDialog
                                isOpen={isOpen}
                                onClose={onClose}
                            >
                                <AlertDialogOverlay>
                                    <AlertDialogContent>
                                        <CloseButton
                                            onClick={onClose}>
                                        </CloseButton>
                                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                            Reservation confirmation
                                        </AlertDialogHeader>

                                        <AlertDialogBody>
                                            We will get back to you soon about the confirmation
                                        </AlertDialogBody>

                                        <AlertDialogFooter>
                                            Thank you for your patience

                                            Thanks for choosing us!
                                            Little Lemon
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialogOverlay>
                            </AlertDialog>


                        </VStack>
                    </form>
                </Box>
            </Flex>
        </FormikProvider >
    );
}

export default BookingForm;

