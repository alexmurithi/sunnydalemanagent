import React, { useState } from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

import { GET_ALL_PROPERTY_TYPES } from "../../../GraphQL/Queries/GetAllPropertyTypes";
import { useQuery } from "@apollo/client";

const PropertyTypeSelect = ({ handlePropertyType }) => {
  // const [propertyTypeId, setId] = useState(1);
  // const handleChange = (event) => {
  //   setId(event.target.value);
  // };

  const { loading, data, error } = useQuery(GET_ALL_PROPERTY_TYPES);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return (
    <>
      <FormControl variant="outlined" fullWidth margin="dense">
        <InputLabel>Property Type</InputLabel>
        <Select
          // value={propertyTypeId}
          onChange={handlePropertyType}
          label="Services"
        >
          {data.allPropertyTypes.map((item) => (
            <MenuItem key={item.id}>{item.type}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default React.memo(PropertyTypeSelect);
