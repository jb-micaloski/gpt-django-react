import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Button, TextField, FormControl,  FormHelperText, Box, Card } from "@mui/material";
import calculateSpacing from "./calculateSpacing";
import withStyles from "@mui/styles/withStyles";
import useWidth from "../../../shared/functions/useWidth";
import classNames from "classnames";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[3],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xl")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: "#FFFFFF",
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
});

function FormSection(props) {
  const { classes, theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
        <div className={classNames("container-fluid", classes.container)}>
          <Typography variant="h3" align="center" className="lg-mg-bottom">
            Start NOW!
          </Typography>  
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="center" className="row">
                  <Grid item xs={12} md={5} >
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Grid item align='center' className={classes.wrapper}>
                        <FormControl component='fieldset'>
                          <FormHelperText>
                                <h3 className={classes.fontBaloo}>
                                    Who are you?
                                </h3>
                          </FormHelperText>
                          <TextField required={true} 
                                        type='text'
                                        fullWidth
                                        inputProps={{
                                            min: 1,
                                            style: {textAlign:'center'}
                                        }}/>
                          <FormHelperText>
                                <h3 className={classes.fontBaloo}>
                                  What's your product?
                                </h3>
                          </FormHelperText>
                          <TextField required={true} 
                                        type='text'
                                        fullWidth
                                        inputProps={{
                                            min: 1,
                                            style: {textAlign:'center'}
                                        }}/>
                          <FormHelperText>
                                <h3 className={classes.fontBaloo}>
                                  Describe the product
                                </h3>
                          </FormHelperText>
                          <TextField required={true} 
                                        type='text'
                                        fullWidth
                                        inputProps={{
                                            min: 1,
                                            style: {textAlign:'center'}
                                        }}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} align='center'>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            className={classes.extraLargeButton}
                            classes={{ label: classes.extraLargeButtonLabel }}
                            href=""
                            style={{fontFamily: "'Baloo Bhaijaan', cursive"}}
                          >
                            Create a new session
                          </Button>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
  );
}

FormSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(FormSection);
