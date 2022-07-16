import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import DeteilsView from "./DeteilsView";

function AdminTrack() {
  const [state, setState] = useState([]);
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [userStatus, setUserStatus] = useState("");
  const [sample, setSample] = useState(false);

  const handleChange = (id, value) => {
    axios({
      method: "post",
      url: "/changingStatus",
      data: {
        id,
        value,
      },
    }).then(() => setSample(true));
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "/allApplication",
    }).then((res) => setState(res.data));
  }, [sample]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  const viewDeteils = async (id) => {
    const res = await axios.get(`/viewDeteils/${id}`);
    console.log(res.data, "res");
    setDetails(res.data);
    setOpen(true);
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NO</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">CreatedAt</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">edition</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((row, i) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="right">{row.createdAt}</TableCell>
                {row.status == "Pending" && (
                  <TableCell align="right">
                    {row.status}
                    <br />

                    <LinearProgress
                      variant="determinate"
                      value={50}
                      color="warning"
                    />
                  </TableCell>
                )}
                {row.status == "Registered" && (
                  <TableCell align="right">
                    {row.status}
                    <br />

                    <LinearProgress
                      variant="determinate"
                      value={100}
                      color="primary"
                    />
                  </TableCell>
                )}
                {row.status == "Blocked" && (
                  <TableCell align="right">
                    {row.status}
                    <br />

                    <LinearProgress
                      variant="determinate"
                      value={10}
                      color="error"
                    />
                  </TableCell>
                )}

                <TableCell align="right" onClick={() => viewDeteils(row._id)}>
                  <Button>Open</Button>
                </TableCell>

                {row.status !== "Registered" && row.status !== "Blocked" ? (
                  <TableCell>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-simple-select-label">
                        status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={userStatus}
                        onChange={(e) => {
                          handleChange(row._id, e.target.value);
                        }}
                      >
                        <MenuItem value={1}>APPROVE</MenuItem>
                        <MenuItem value={2}>DENY</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                ) : (
                  ""
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DeteilsView state={open} setState={setOpen} result={details} />
        </Box>
      </Modal>
    </div>
  );
}

export default AdminTrack;
