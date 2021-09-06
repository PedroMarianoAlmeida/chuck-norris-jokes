import { useContext, useEffect } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";

import { JokeFormContext } from "./../../contexts/JokeFormContext";

const Categories = () => {
  const { categories, setCategories, setCurrentTab } =
    useContext(JokeFormContext);

  const { none, explicity, nerdy } = categories;

  useEffect(() => {
    setCurrentTab("categories");
  }, []);

  const handleChange = (event) => {
    setCategories({ ...categories, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={none}
              onChange={handleChange}
              name="none"
            />
          }
          label="None"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={explicity}
              onChange={handleChange}
              name="explicity"
            />
          }
          label="Explicit"
          checked
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={nerdy}
              onChange={handleChange}
              name="nerdy"
            />
          }
          label="Nerdy"
        />
      </Box>
    </>
  );
};

export default Categories;
