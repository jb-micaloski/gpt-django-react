import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { DataGrid } from "@mui/x-data-grid";

const styles = (theme) => ({});

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: "dif",
    headerName: "Dificuldades",
    width: 150,
    editable: true,
  }
];

const rows = [{ id: 1, dif: 1 }, { id: 2, dif: 2 }, { id: 3, dif: 3 }];

function Dashboard(props) {
  const { classes } = props;

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
