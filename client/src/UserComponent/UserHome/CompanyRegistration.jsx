import {
    Button,
    Paper,
    TextField,
    Typography,
    Grid,
    Avatar,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
  } from "@mui/material";
  import LockIcon from "@mui/icons-material/Lock";
  import { useFormik } from "formik";
  import axios from "axios";
  import { useState } from "react";
  import React from "react";
import { useNavigate } from "react-router-dom";
  
  function CompanyRegistration({state,setState}) {
    const Navigate = useNavigate()
    const [error, setError] = useState("");
  
    var regExp = /[a-zA-Z]/g;
  
    // Formik starts
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
           Navigate('/')
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
  
    //formik ends
  
    return (
      <Grid container>
       
        <Grid item xs={12}   >
          <Paper
            elevation={10}
            style={{
              padding: 40,
              maxHeight: "85vh",
              maxWidth: 390,
              minWidth: 220,
               overflow: 'auto'
            }}
          >
            <Grid align="center" alignItems="center" justifyContent="center" >
              <Avatar style={{ backgroundColor: "darkblue" }}>
                <LockIcon />
              </Avatar>
              <Typography mt={2} variant="h5">
                REGISTER
              </Typography>
            </Grid>
           <Grid >
           <form onSubmit={formik.handleSubmit} >
              <Grid mt={5}>
                {error ? <div>{error}</div> : ""}
                <TextField
                  name="email"
                  type="email"
                  style={{ marginTop: "10px" }}
                  label="EMAIL"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  fullWidth
                />
                {formik.touched.email && formik.errors.email ? (
                 <Typography color='error.main' variant='subtitle1' component='div'>{formik.errors.email}</Typography>
                 ) : null}
                <TextField
                  name="phone"
                  
                  style={{ marginTop: "20px" }}
                  label="PHONE NO"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  fullWidth
                />
                {formik.touched.phone && formik.errors.phone ? (
                 <Typography color='error.main' variant='subtitle1' component='div'>{formik.errors.phone}</Typography>
                ) : null}
                <TextField
                  name="name"
                  style={{ marginTop: "10px" }}
                  label="NAME"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  fullWidth
                />
               
                <TextField
                 required
                 onChange={formik.handleChange}
                 value={formik.values.city}
                  name="city"
                  style={{ marginTop: "20px" }}
                  label="CITY"
                  fullWidth
                />
             
                 <TextField
                  required
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  name="address"
                  style={{ marginTop: "20px" }}
                  label="ADDRESS"
                  fullWidth
                />
                <TextField
                 required
                 onChange={formik.handleChange}
                 value={formik.values.state}
                name="state"
                style={{ marginTop: "20px" }}
                label="STATE"
                fullWidth
              />
              <TextField
               required
               onChange={formik.handleChange}
               value={formik.values.companyName}
              name="companyName"
              style={{ marginTop: "20px" }}
              label="COMPANY NAME"
              fullWidth
            />
            <TextField
              required
              onChange={formik.handleChange}
              value={formik.values.image}
              name="image"
              style={{ marginTop: "20px" }}
             type='file'
              fullWidth
            />
              <TextField
                required
                onChange={formik.handleChange}
                value={formik.values.team}
                name="team"
                style={{ marginTop: "20px" }}
                label="Describe about your team and products"
                fullWidth
              />
                <TextField
                  required
                  onChange={formik.handleChange}
                  value={formik.values.products}
                name="products"
                style={{ marginTop: "20px" }}
                label="Describe about your company products"
                fullWidth
              />
               <TextField
                 required
                 onChange={formik.handleChange}
                 value={formik.values.problem}
                name="problem"
                style={{ marginTop: "20px" }}
                label="Describe the problem your are trying to solve"
                fullWidth
              />
               <TextField
                 required
                 onChange={formik.handleChange}
                 value={formik.values.solution}
                name="solution"
                style={{ marginTop: "20px" }}
                label="What is unique about your solution"
                fullWidth
              />
                 <TextField
                   required
                   onChange={formik.handleChange}
                   value={formik.values.proPosition}
                name="proPosition"
                style={{ marginTop: "20px" }}
                label="What is your value proposition for the customer"
                fullWidth
              />
                 <TextField
                   required
                   onChange={formik.handleChange}
                   value={formik.values.competetors}
                name="competetors"
                style={{ marginTop: "20px" }}
                label="Who are your competetors and what is your competative advantage"
                fullWidth
              />
                 <TextField
                   required
                   onChange={formik.handleChange}
                   value={formik.values.revenueModel}
                name="revenueModel"
                style={{ marginTop: "20px" }}
                label="Explain your revenue model"
                fullWidth
              />
              
                <TextField
                  required
                  onChange={formik.handleChange}
                  value={formik.values.potentialSize}
                name="potentialSize"
                style={{ marginTop: "20px" }}
                label="What is the potetial size of the market"
                fullWidth
              />
              <TextField
                required
                onChange={formik.handleChange}
                value={formik.values.market}
                name="market"
                style={{ marginTop: "20px" }}
                label="How do you market your plan"
                fullWidth
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Type of Incubation need</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="need"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.need}
                >
                    <FormControlLabel value="physical incubation" control={<Radio />} label="physical incubation " />
                    <FormControlLabel value="virtuak incubation" control={<Radio />} label="virtuak incubation" />
                </RadioGroup>
                </FormControl>
              </Grid>
              
              <Button
             
                type="submit"
                variant="contained"
                style={{
                  color: "white",
                  backgroundColor: "darkblue",
                  marginTop: "5px",
                }}
                fullWidth
              >
                Submit Registration
              </Button>
              <Button
              onClick={()=>setState(false)}
              
                variant="contained"
                style={{
                  color: "white",
                  backgroundColor: "darkblue",
                  marginTop: "5px",
                }}
                fullWidth
              >
                Back
              </Button>
            </form>
           </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
  
  export default CompanyRegistration;
  