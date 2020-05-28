import * as yup from 'yup'

const valueSchema = yup.object().shape({
  athletic: yup.string(),
  art: yup.string(),
  creativity: yup.string(),
  independence:  yup.string(),
  kindness:  yup.string(),
  living: yup.string(),
  membership:  yup.string(),
  music:  yup.string(),
  community:  yup.string(),
  moral:  yup.string(),
  nature:  yup.string(),
  relationships:  yup.string(),
  humor:  yup.string(),
  success:  yup.string(),
  other:  yup.string(),    
})

export default valueSchema

// value1: yup.string().required('Value 1 is a required field'),
// value2: yup.string().required('Value 2 is a required field'),
// value3: yup.string().required('Value 3 is a required field'),