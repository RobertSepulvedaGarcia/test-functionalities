import * as yup from 'yup';

export const validate = yup.object({
    email: yup.string().email('Invalid Email!!').required('Email Required!'),
    password: yup.string().required('Password Required!!'),
});