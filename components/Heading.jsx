import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const Heading = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return (
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "Checkbox" }}
      />
    )
}

export default Heading