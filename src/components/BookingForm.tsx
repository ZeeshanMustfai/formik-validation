import { Button, InputLabel, MenuItem, TextField } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';

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
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    currency: yup.string().required('Currency is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      currency: '',
    },

    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <InputLabel sx={{ textAlign: 'start' }}>Name</InputLabel>
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
        <div>
          <InputLabel sx={{ textAlign: 'start' }}>Email</InputLabel>
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
        <div>
          <InputLabel sx={{ textAlign: 'start' }}>Currency</InputLabel>
          <TextField
            id='filled-select-currency'
            select
            defaultValue='EUR'
            name='currency'
            fullWidth
            size='small'
            value={formik.values.currency}
            onChange={formik.handleChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <Button type='submit' variant='contained' sx={{mt: '15px'}}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
