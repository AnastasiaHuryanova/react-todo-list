import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function PriorityRadioButton({ priority, setPriority, index }) {
  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ textAlign: "center" }}
      >
        Priority
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="low"
      >
        <FormControlLabel
          value="low"
          control={<Radio />}
          label="low"
          labelPlacement="top"
          checked={priority === "low"}
          onChange={(event) =>
            setPriority({ index, priority: event.target.value })
          }
        />
        <FormControlLabel
          value="medium"
          control={<Radio />}
          label="medium"
          labelPlacement="top"
          checked={priority === "medium"}
          onChange={(event) =>
            setPriority({ index, priority: event.target.value })
          }
        />
        <FormControlLabel
          value="high"
          control={<Radio />}
          label="high"
          labelPlacement="top"
          checked={priority === "high"}
          onChange={(event) =>
            setPriority({ index, priority: event.target.value })
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
