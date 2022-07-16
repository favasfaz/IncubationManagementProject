import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Fade,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { color } from "@mui/system";
function AdminSlot() {
  const [open, setOpen] = useState(false);
  const [sectionA, setSectionA] = useState([]);
  const [sectionB, setSectionB] = useState([]);
  const [sectionC, setSectionC] = useState([]);
  const [sectionD, setSectionD] = useState([]);
  const [sectionE, setSectionE] = useState([]);
  const [registered, setRegistered] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [getSlot, setGetSlot] = useState({});
  const [details, setDetails] = useState(false);

  console.log(sectionB, "sectionb");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "/allSlots",
    }).then((res) => {
      setSectionA(res.data.sectionA);
      setSectionB(res.data.sectionB);
      setSectionC(res.data.sectionC);
      setSectionD(res.data.sectionD);
      setSectionE(res.data.sectionE);
    });
    axios({
      method: "get",
      url: "/registeredApplication",
    }).then((res) => setRegistered(res.data));
  }, [open]);

  const bookingSlot = (id) => {
    setId(id);
    setOpen(true);
  };

  const submitForm = () => {
    axios({
      method: "post",
      url: "/bookSlot",
      data: {
        id,
        name,
      },
    }).then((res) => {
      setOpen(false);
    });
  };

  const showDeteil = (id) => {
    axios({
      method: "get",
      url: `/getSlot/${id}`,
    }).then((res) => {
      setGetSlot(res.data);
      setDetails(true);
    });
  };

  return (
    <div>
      <Typography variant="h3" sx={{ flexGrow: 1, textAlign: "center" ,color:'darkblue' }}>
        SLOTS
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        overflow="auto"
        container
        mt={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {sectionA.map((v, i) => {
          return (
            <Grid
              key={v._id}
              onClick={() => {
                v.isBooked ? showDeteil(v._id) : bookingSlot(v._id);
              }}
              xs={1}
              sx={{
                height: 100,
                width: 100,
                bgcolor: !v.isBooked ? "primary.main" : "error.main",
                "&:hover": {
                  height: 110,
                  width: 110,
                  cursor: "pointer",
                },
              }}
            ></Grid>
          );
        })}
      </Stack>

      <Grid
        container
        mt={3}
        textAlign='center'
      >
        <Grid container gap={1} xs={4}>

          <Grid xs={12}><Typography variant="h5">SectionA</Typography></Grid>
          {sectionB.map((v, i) => {
            return (
              <Grid
                xs={5}
                key={v._id}
                onClick={() => {
                  v.isBooked ? showDeteil(v._id) : bookingSlot(v._id);
                }}
                sx={{
                  height: 75,
                  width: 75,
                  bgcolor: !v.isBooked ? "primary.main" : "error.main",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <Typography color='white'>Slot{v.slot}</Typography>
              </Grid>
            );
          })}
        </Grid>

        <Grid container gap={1} xs={4}>
        <Grid xs={12}><Typography variant="h5">SectionB</Typography></Grid>

          {sectionC.map((v, i) => {
            return (
              <Grid
                xs={5}
                key={v._id}
                onClick={() => {
                  v.isBooked ? showDeteil(v._id) : bookingSlot(v._id);
                }}
                sx={{
                  height: 75,
                  width: 75,
                  bgcolor: !v.isBooked ? "primary.main" : "error.main",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                                <Typography color='white'>Slot{v.slot}</Typography>
              </Grid>
            );
          })}
        </Grid>

        <Grid container gap={1} xs={4}>
        <Grid xs={12}><Typography variant="h5">SectionC</Typography></Grid>

          {sectionD.map((v, i) => {
            return (
              <Grid
                xs={5}
                key={v._id}
                onClick={() => {
                  v.isBooked ? showDeteil(v._id) : bookingSlot(v._id);
                }}
                sx={{
                  height: 75,
                  width: 75,
                  bgcolor: !v.isBooked ? "primary.main" : "error.main",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                                <Typography color='white'>Slot{v.slot}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <Select
                value={name}
                onChange={(e) => setName(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              > 
             
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {registered.map((name) => (
                  <MenuItem key={name._id} value={name._id}>
                    {name.companyName}
                  </MenuItem>
                ))}
              </Select>
              <Button onClick={submitForm}>submit</Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>

      <Modal
        open={details}
        onClose={() => setDetails(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Slot NO:{getSlot.slot}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            CompanyName : {getSlot.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Author : {getSlot.email}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default AdminSlot;
