import React, { useState } from "react";

import {
  Box,
  FormGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
} from "@material-ui/core";

import { GET_ALL_AMENITIES } from "../../../GraphQL/Queries/GetAllAmenities";
import { useQuery } from "@apollo/client";

const Amenities = () => {
  const [checkedAmenities, setChecked] = useState({});

  const handleChange = (event) => {
    setChecked({
      ...checkedAmenities,
      [event.target.value]: event.target.checkedAmenities,
    });
  };

  const { loading, data, error } = useQuery(GET_ALL_AMENITIES);

  if (loading) return <div>Loading..</div>;

  if (error) return <div>Error</div>;

  return (
    <>
      {/* {console.log("Amenities: ",checked)} */}
      <Box py={2}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Facilities in the property</FormLabel>
          <FormGroup>
            {data.allAmenities.map((item) => (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    name={item.name}
                    value={item.id}
                    checked={checkedAmenities.value}
                    color="primary"
                  />
                }
                label={item.name}
                key={item.id}
              />
            ))}
          </FormGroup>
          <FormHelperText>Select Accordingly!</FormHelperText>
        </FormControl>
      </Box>
    </>
  );
};

export default React.memo(Amenities);
