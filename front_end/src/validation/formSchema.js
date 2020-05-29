import * as yup from 'yup'

const formSchema = yup.object().shape({
    value1: yup.string()
        .trim()
        .min(50, 'Response must be at least 50 characters long')
        .required('Response is a required field'),
    value2: yup.string()
        .trim()
        .min(50, 'Response must be at least 50 characters long')
        .required('Response is a required field'),
    value3: yup.string()
        .trim()
        .min(50, 'Response must be at least 50 characters long')
        .required('Response is a required field'),
    // firstname: yup.string()
    //     .trim()
    //     .min(2, 'First name must be at least two characters long')
    //     .required('First name is a required field'),
    // lastname: yup.string()
    //     .trim()
    //     .min(2, 'Last name must be at least two characters long')
    //     .required('Last name is a required field'),
    // email: yup.string()
    //     .email('Email must be a valid email address')
    //     .required('Email is a required field'),
    // password: yup.string()
    //     .trim()
    //     .required('Password is a required field'),

    
})

export default formSchema