import * as yup from 'yup'

const formSchema = yup.object().shape({
    value1: yup.string()
    .trim()
    .min(5, 'Response must be at least 50 characters long')
    .required('Response is a required field'),
    value2: yup.string()
    .trim()
    .min(5, 'Response must be at least 50 characters long')
    .required('Response is a required field'),
    value3: yup.string()
    .trim()
    .min(5, 'Response must be at least 50 characters long')
    .required('Response is a required field'),
    
})

export default formSchema