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

  import React from "react";
import { useNavigate } from "react-router-dom";
  
  function DeteilsView({state,setState,deteils}) {


    console.log(deteils,'detils');

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
              <Grid mt={5}>
                <TextField
                  name="email"
                  type="email"
                  style={{ marginTop: "10px" }}
                  label="EMAIL"
                 
                  fullWidth
                />
              
                <TextField
                  name="phone"
                  
                  style={{ marginTop: "20px" }}
                  label="PHONE NO"
                
                  fullWidth
                />
             
                <TextField
                  name="name"
                  style={{ marginTop: "10px" }}
                  label="NAME"
                  required
                 
                  fullWidth
                />
               
                <TextField
                 required
               
                  name="city"
                  style={{ marginTop: "20px" }}
                  label="CITY"
                  fullWidth
                />
             
                 <TextField
                  required
              
                  name="address"
                  style={{ marginTop: "20px" }}
                  label="ADDRESS"
                  fullWidth
                />
                <TextField
                 required
                
                name="state"
                style={{ marginTop: "20px" }}
                label="STATE"
                fullWidth
              />
              <TextField
               required
             
              name="companyName"
              style={{ marginTop: "20px" }}
              label="COMPANY NAME"
              fullWidth
            />
            <TextField
              required
           
              name="image"
              style={{ marginTop: "20px" }}
             type='file'
              fullWidth
            />
              <TextField
                required
              
                name="team"
                style={{ marginTop: "20px" }}
                label="Describe about your team and products"
                fullWidth
              />
                <TextField
                  required
                 
                name="products"
                style={{ marginTop: "20px" }}
                label="Describe about your company products"
                fullWidth
              />
               <TextField
                 required
            
                name="problem"
                style={{ marginTop: "20px" }}
                label="Describe the problem your are trying to solve"
                fullWidth
              />
               <TextField
                 required
               
                name="solution"
                style={{ marginTop: "20px" }}
                label="What is unique about your solution"
                fullWidth
              />
                 <TextField
                   required
                 
                name="proPosition"
                style={{ marginTop: "20px" }}
                label="What is your value proposition for the customer"
                fullWidth
              />
                 <TextField
                   required
                   
                name="competetors"
                style={{ marginTop: "20px" }}
                label="Who are your competetors and what is your competative advantage"
                fullWidth
              />
                 <TextField
                   required
               
                name="revenueModel"
                style={{ marginTop: "20px" }}
                label="Explain your revenue model"
                fullWidth
              />
              
                <TextField
                  required
              
                name="potentialSize"
                style={{ marginTop: "20px" }}
                label="What is the potetial size of the market"
                fullWidth
              />
              <TextField
                required
            
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
                    
                >
                    <FormControlLabel value="physical incubation" control={<Radio />} label="physical incubation " />
                    <FormControlLabel value="virtuak incubation" control={<Radio />} label="virtuak incubation" />
                </RadioGroup>
                </FormControl>
              </Grid>
             
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
           </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
  
  export default DeteilsView;
  