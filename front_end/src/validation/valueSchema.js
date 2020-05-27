import * as yup from 'yup'

const valueSchema = yup.object().shape({
  athletic: yup.boolean(),
  art: yup.boolean(),
  creativity: yup.boolean(),
  independence:  yup.boolean(),
  kindness:  yup.boolean(),
  living: yup.boolean(),
  membership:  yup.boolean(),
  music:  yup.boolean(),
  community:  yup.boolean(),
  moral:  yup.boolean(),
  nature:  yup.boolean(),
  relationships:  yup.boolean(),
  humor:  yup.boolean(),
  success:  yup.boolean(),
  other:  yup.boolean(),
})

export default valueSchema