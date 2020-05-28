import * as yup from 'yup'

const valueSchema = yup.object().shape({
//   athletic: yup.boolean(),
//   art: yup.boolean(),
//   creativity: yup.boolean(),
//   independence:  yup.boolean(),
//   kindness:  yup.boolean(),
//   living: yup.boolean(),
//   membership:  yup.boolean(),
//   music:  yup.boolean(),
//   community:  yup.boolean(),
//   moral:  yup.boolean(),
//   nature:  yup.boolean(),
//   relationships:  yup.boolean(),
//   humor:  yup.boolean(),
//   success:  yup.boolean(),
//   other:  yup.boolean(),
value1: yup.string().required('Value 1 is a required field'),
value2: yup.string().required('Value 2 is a required field'),
value3: yup.string().required('Value 3 is a required field'),
})

export default valueSchema