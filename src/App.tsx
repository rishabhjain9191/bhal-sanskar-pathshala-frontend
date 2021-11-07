import React, { useState } from "react";
import "./App.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { BHAGS } from "./constants";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

function App() {
  const [bhag, setBhag] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleBhagChange = (event: SelectChangeEvent) => {
    setBhag(event.target.value);
  };
  const scheduleClass = () => {
    console.log("scheduling class with ");
    console.log({ bhag, date, time });
    axios
      .post("http://localhost:3000/test", {
        bhag,
        date,
        time,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <h1>Jai Jinendra, Schedule Your class 1</h1>
        <FormControl fullWidth>
          <InputLabel id="bhag-select-label">Bhag</InputLabel>
          <Select
            labelId="bhag-select-label"
            id="bhag-select"
            value={bhag}
            label="Bhag"
            onChange={handleBhagChange}
          >
            {BHAGS.map((bhag) => (
              <MenuItem value={bhag.id} key={bhag.id}>
                {bhag.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DatePicker
          label="Date"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time"
          value={time}
          onChange={(newValue) => {
            setTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button variant="contained" onClick={scheduleClass}>
          Schedule Class
        </Button>
      </LocalizationProvider>
    </div>
  );
}

export default App;
