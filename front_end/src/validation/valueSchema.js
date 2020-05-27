import * as yup from 'yup'

const valueSchema = yup.object().shape({
    other: yup.string()
    .trim(),
})

export default valueSchema