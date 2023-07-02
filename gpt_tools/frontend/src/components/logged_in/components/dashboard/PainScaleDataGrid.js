import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { DataGrid } from "@mui/x-data-grid";

const styles = (theme) => ({});

function Dashboard(props) {
  const { classes } = props;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const inputData = JSON.parse(atob(queryParams.get('input')));

  const [input, setInput] = useState(inputData);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
  ];
  
  const rows = [
  ];

  useEffect(() => {
    console.log(input);
  }, []);

  return (
    <Fragment>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          sx={{ 
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },}}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Fragment>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Dashboard);
