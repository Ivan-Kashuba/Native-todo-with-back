import * as Yup from 'yup';
import { defaultYear } from '../common/currentYear';

export const TodoValidator = Yup.object().shape({
  title: Yup.string()
      .min(2, 'Minimal length is 2 symbols')
      .max(55, 'Max length is 55 symbols')
      .required('Required'),
  description: Yup.string()
      .min(2, 'Minimal length is 2 symbols')
      .max(50, 'Max length is 255 symbols')
      .required('Required'),
  year: Yup.number()
      .min(
          defaultYear,
          `Year must include 4 digits! Minimal year is current:${defaultYear}`,
      )
      .max( 3000, 'Year must include 4 digits!'),
});

export const RegistrationValidator = Yup.object().shape({
  username: Yup.string().min(3, 'Min length is 3 symbols').required('Required'),
  email: Yup.string().email('Choose correct email').required('Required'),
  password: Yup.string().min(4, 'Min length is 4 symbols').required('Required'),
  verifyPassword: Yup.string()
      .min(4, 'Min length is 4 symbols')
      .required('Required'),
});

export const LoginValidator = Yup.object().shape({
  email: Yup.string().required('This is required field')
      .min(3, 'Your email cant be less then 3 symbols'),
  password: Yup.string().required('Required'),
});
