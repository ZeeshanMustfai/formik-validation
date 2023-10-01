import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  TextField,
} from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';

const style = {textAlign: 'start'}
const formStyle = {marginBottom: '10px'}
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const BookingForm = () => {
  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    age: yup
      .number()
      .required('Age is required')
      .max(50, 'Your age must less from fifty'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    currency: yup.string().required('Currency is required'),
    terms: yup.bool().oneOf([true], 'You must accept the terms and conditions')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
      currency: '',
      terms: false,
    },

    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={formStyle}>
        <InputLabel sx={style}>Name</InputLabel>
        <TextField
          type='text'
          name='name'
          placeholder='name*'
          size='small'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          fullWidth
        />
      </div>
      <div style={formStyle}>
        <InputLabel sx={style}>Age</InputLabel>
        <TextField
          type='number'
          name='age'
          placeholder='age*'
          size='small'
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
          fullWidth
        />
      </div>
      <div style={formStyle}>
        <InputLabel sx={style}>Email</InputLabel>
        <TextField
          type='text'
          name='email'
          placeholder='email'
          size='small'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
        />
      </div>
      <div style={formStyle}>
        <InputLabel sx={style}>Currency</InputLabel>
        <TextField
          id='filled-select-currency'
          select
          defaultValue='EUR'
          name='currency'
          fullWidth
          size='small'
          value={formik.values.currency}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.currency && Boolean(formik.errors.currency)}
          helperText={formik.touched.currency && formik.errors.currency}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div style={{textAlign: 'start'}}>
        <FormControlLabel
          control={
            <Checkbox
              name='terms'
              onChange={formik.handleChange}
              value={formik.values.terms}
              onBlur={formik.handleBlur}
            />
          }
          label='Terms and condition'
          name='terms'
        />
        {formik.errors.terms && <FormHelperText sx={{color: 'red'}}>{formik.errors.terms}</FormHelperText>}
      </div>

      <Button type='submit' variant='contained' sx={{ mt: '15px' }}>
        Submit
      </Button>
    </form>
  );
};

export default BookingForm;
