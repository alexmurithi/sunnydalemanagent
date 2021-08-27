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

import { GET_ALL_EXTERNALS } from "../../../GraphQL/Queries/GetAllExternals";
import { useQuery } from "@apollo/client";

const Externals = ({ externalCallBack, external }) => {
  // const [externals, setExternals] = useState([]);

  // const handleChange = (id) => (event) => {
  //   const all = [...externals];
  //   const selectedExternals = externals.indexOf(id);

  //   if (selectedExternals > -1) {
  //     all.splice(selectedExternals, 1);
  //   } else {
  //     all.push(id);
  //   }

  //   setExternals(all);
  // };

  const { loading, data, error } = useQuery(GET_ALL_EXTERNALS);

  if (loading) return <div>Loading..</div>;

  if (error) return <div>Error</div>;

  return (
    <>
      {/* {console.log(JSON.stringify(externals))} */}
      <Box py={2}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            External Facilities in the building
          </FormLabel>
          <FormGroup>
            {data.allExternals.map((item) => (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={externalCallBack(item.id)}
                    name={item.name}
                    color="primary"
                    checked={external.includes(item.id)}
                    value={item.id}
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

export default React.memo(Externals);
