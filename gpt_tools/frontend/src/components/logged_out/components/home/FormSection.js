import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import classNames from "classnames";
import FormCard from "./FormCard";

const styles = (theme) => ({
  wrapper: {
    position: "relative",
    paddingBottom: theme.spacing(2),
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  fontBaloo: {
    fontFamily: "'Baloo Bhaijaan', cursive",
  },
  formContainer: {
    display: "flex",
  }
});

function FormSection(props) {
  const { classes, 
          theme 
        
} = props;

  return (
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
              <FormCard />  
          </Box>
        </div>
  );
}

FormSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(FormSection);
