import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, Box, Hidden } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import PainScale from "./PainScale";

const styles = (theme) => ({
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
});

function Dashboard(props) {
  const {
    selectDashboard,
    classes,
  } = props;

  useEffect(selectDashboard, [selectDashboard]);

  return (
    <Fragment>
      <Box mt={4}>
        <Hidden smDown>
          <Typography
            variant="h5"
            className={classes.brandText}
            display="inline"
            color="primary"
          >
            PainScale
          </Typography>
          <Typography
            variant="h5"
            className={classes.brandText}
            display="inline"
            color="secondary"
          >
            Helper
          </Typography>
        </Hidden>
      </Box>
      <Box mt={4}>
        <PainScale />
      </Box>
    </Fragment>
  );
}

Dashboard.propTypes = {
  selectDashboard: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Dashboard);
