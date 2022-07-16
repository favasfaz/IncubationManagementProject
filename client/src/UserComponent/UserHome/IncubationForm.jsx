import React from 'react'
import { Grid, TextField, FormControlLabel, FormLabel, Radio, RadioGroup, Button,Typography} from '@mui/material'
import axios from 'axios';
import { useState } from 'react'
import { useFormik } from "formik";

function IncubationForm() {
    const [error, setError] = useState("");
   
    var regExp = /[a-zA-Z]/g;

    const formik = useFormik({
        initialValues: {
          email: "",
          phone: "",
          name:'',
          city: '',
          address:'',
          state:'',
          companyName:'',
          image:'',
          team:'',
          products:'',
          problem:'',
          solution:'',
          proPosition:'',
          competetors:'',
          revenueModel:'',
          potentialSize:'',
          market:'',
          need:''
        },
        onSubmit: (values) => {
          axios({
            url: "/companyRegistration",
            method: "post",
            data: values,
          })
            .then((response) =>{
             
          }
            )
            .catch((error) => {
              setError(error.response.data.message);
            });
        },
        validate: (values) => {
          let errors = {};
    
          if (!values.email) {
            errors.email = "This field is Required";
          } else if (
            !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
              values.email
            )
          ) {
            errors.email = "Invalid email format";
          }
       
          if (!values.phone) {
            errors.phone = "This field is Required";
          }else  if (regExp.test(values.phone)){
            errors.phone = 'Only numbers Allowed'
          }
    
       
    
          return errors;
        },
      });

  return (
    <div>
        <Grid container spacing={3}>
            <form onSubmit={formik.handleSubmit}>
            {error ? <div>{error}</div> : ""}
                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="name"
                        name='name'
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}            
                                />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="email"
                        name='email'
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}                    />
                         {formik.touched.email && formik.errors.email ? (
                 <Typography color='error.main' variant='subtitle1' component='div'>{formik.errors.email}</Typography>
                 ) : null}
                </Grid>


                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Address"
                        name='address'
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.address}                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="City"
                        name='city'
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.city}                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="State"
                        name='state'
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.state}                    />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Phone no"
                        type="number"
                        name='phone'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}                    />
                           {formik.touched.phone && formik.errors.phone ? (
                 <Typography color='error.main' variant='subtitle1' component='div'>{formik.errors.phone}</Typography>
                ) : null}
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Company name"
                        type="text"
                        name='companyName'
                        onChange={formik.handleChange}
                        value={formik.values.companyName}                    />
                </Grid>
                <Grid sx={{ mt: 2.5 }} item sm={6} xs={12}>
                    <label>Companylogo</label>  <br />
                    <input type='file' name='logo'  />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Describe your team and background"
                        type="text"
                        name='team'
                        onChange={formik.handleChange}
                        value={formik.values.team}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Describe your Company and Product"
                        type="text"
                        name='products'
                        onChange={formik.handleChange}
                        value={formik.values.products}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Describe the problem you are trying to solve"
                        type="text"
                        name='problem'
                        onChange={formik.handleChange}
                        value={formik.values.problem}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="What is unique about your solution"
                        type="text"
                        name='solution'
                        onChange={formik.handleChange}
                        value={formik.values.solution}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="What is your value proposition for the customer"
                        type="text"
                        name='proPosition'
                        onChange={formik.handleChange}
                        value={formik.values.proPosition}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Who are your competators and what is your competatiev advantage?"
                        type="text"
                        name='competetors'
                        onChange={formik.handleChange}
                        value={formik.values.competetors}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Explain your revenue model"
                        type="text"
                        name='revenueModel'
                        onChange={formik.handleChange}
                        value={formik.values.revenueModel}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="What is the potential market size of the product?"
                        type="text"
                        name='potentialSize'
                        onChange={formik.handleChange}
                        value={formik.values.potentialSize}                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="How do you market or plan to market your products and services?"
                        type="text"
                        name='market'
                        onChange={formik.handleChange}
                        value={formik.values.market}                    />
                </Grid>
                <Grid item xs={12}>

                    <FormLabel id="demo-radio-buttons-group-label">Type of incubation needed</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="type"
                        onChange={formik.handleChange}
                        value={formik.values.need}
                                            >
                        <FormControlLabel className='radio' value="Physical incubation" control={<Radio />} label="Physical incubation" />
                        <FormControlLabel value="Virtual incubation" control={<Radio />} label="Virtual incubation" />
                    </RadioGroup>

                </Grid>
                {/* <Grid item xs={12}>
                    <TextField className='text'
                        margin="normal"
                        required
                        fullWidth
                        label="Upload a detailed business proposal"
                        type="text"
                        name='businessproposal'
                        onChange={handleChange}
                    />
                </Grid> */}
                <Grid item xs={12}>
                    <Button className='button' type='submit' variant="contained" color="success" >
                        Submit
                    </Button>
                </Grid>
                </form>
            </Grid>
    </div>
  )
}

export default IncubationForm