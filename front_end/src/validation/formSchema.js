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
    
    athletic: yup.boolean(),
    art: yup.boolean(),
    creativity: yup.boolean(),
    independence: yup.boolean(),
    kindness: yup.boolean(),
    living: yup.boolean(),
    membership: yup.boolean(),
    music: yup.boolean(),
    community: yup.boolean(),
    moral: yup.boolean(),
    nature: yup.boolean(),
    relationships: yup.boolean(),
    humor: yup.boolean(),
    success: yup.boolean(),
    other: yup.string()


})

export default formSchema