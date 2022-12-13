import * as yup from 'yup';

const validations = yup.object().shape({
    name: yup.string().required("The field is required."),
    email: yup.string().email('Please enter an email address.').required('The field is required.'),
    subject: yup.string().required('The field is required.'),
    message: yup.string().required('The field is required.'),
});

export default validations;