import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Button,
  TextField,
  FormControl,
  Box,
  Card,
  Link,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[5],
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
      width: "90%",
      maxWidth: "none !important",
    },
  },
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
  },
});

function FormCard(props) {
  const { classes, history } = props;

  //const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const [input, setInput] = useState({
    whoareyou: "",
    product: "",
    descript: "",
    trouble: "",
    target: "",
    channel: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.id]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        whoareyou: input.whoareyou[0],
        product: input.product[0],
        descript: input.descript[0],
        target: input.target[0],
        trouble: input.trouble[0],
        channel: input.channel[0],
        feedback: input.feedback[0],
      }),
    };
    fetch("/api/create-session", requestOptions)
      .then((response) => response.json())
      .then((data) => {
          const encondedInput = btoa(JSON.stringify(input));
          history.push(`/c/dashboard?input=${encondedInput}`);
        })
  };

  return (
    <Card className={classes.card}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Start NOW!
      </Typography>
      <div className={classNames(classes.containerFix, "container")}>
        <Box
          justifyContent="center"
          className="row"
          component="form"
          onSubmit={handleSubmit}
        >
          <Grid item xs={12} md={5} width="100%">
            <Box flexDirection="column" justifyContent="center" height="100%">
              <Grid
                item
                align="center"
                className={classes.wrapper}
                width="100%"
              >
                <FormControl
                  component="fieldset"
                  className={classes.formContainer}
                >
                  <TextField
                    required
                    type="text"
                    fullWidth
                    id="whoareyou"
                    label="Who Are You?"
                    value={input.whoareyou}
                    className={classes.wrapper}
                    color="secondary"
                    inputProps={{
                      min: 1,
                      style: {
                        textAlign: "center",
                        fontFamily: "'Baloo Bhaijaan', cursive",
                      },
                    }}
                    onChange={handleChange}
                  />
                  <TextField
                    required={true}
                    type="text"
                    fullWidth
                    id="product"
                    value={input.product}
                    label="What's your product?"
                    color="secondary"
                    className={classes.wrapper}
                    inputProps={{
                      min: 1,
                      style: {
                        textAlign: "center",
                        fontFamily: "'Baloo Bhaijaan', cursive",
                      },
                    }}
                    onChange={handleChange}
                  />

                  <TextField
                    required={true}
                    type="text"
                    fullWidth
                    id="descript"
                    value={input.descript}
                    label="Describe the product"
                    color="secondary"
                    className={classes.wrapper}
                    inputProps={{
                      min: 1,
                      style: {
                        textAlign: "center",
                        fontFamily: "'Baloo Bhaijaan', cursive",
                      },
                    }}
                    onChange={handleChange}
                  />
                  <TextField
                    required={true}
                    type="text"
                    fullWidth
                    id="trouble"
                    value={input.trouble}
                    label="What's the biggest difficult that you have?"
                    color="secondary"
                    className={classes.wrapper}
                    inputProps={{
                      min: 1,
                      style: {
                        textAlign: "center",
                        fontFamily: "'Baloo Bhaijaan', cursive",
                      },
                    }}
                    onChange={handleChange}
                  />
                  <TextField
                    required={true}
                    type="text"
                    fullWidth
                    id="target"
                    label="Who's your main target?"
                    value={input.target}
                    color="secondary"
                    className={classes.wrapper}
                    inputProps={{
                      min: 1,
                      style: {
                        textAlign: "center",
                        fontFamily: "'Baloo Bhaijaan', cursive",
                      },
                    }}
                    onChange={handleChange}
                  />
                  <TextField
                    required={true}
                    type="text"
                    fullWidth
                    value={input.channel}
                    id="channel"
                    label="What's your sell channel?"
                    color="secondary"
                    className={classes.wrapper}
                    inputProps={{
                      min: 1,
                      style: {
                        textAlign: "center",
                        fontFamily: "'Baloo Bhaijaan', cursive",
                      },
                    }}
                    onChange={handleChange}
                  />
                  <TextField
                    required={true}
                    type="text"
                    fullWidth
                    id="feedback"
                    value={input.feedback}
                    label="What's the feedback that you mostly receive from your clients?"
                    color="secondary"
                    className={classes.wrapper}
                    inputProps={{
                      min: 1,
                      style: {
                        textAlign: "center",
                        fontFamily: "'Baloo Bhaijaan', cursive",
                      },
                    }}
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    className={classes.extraLargeButton}
                    classes={{ label: classes.extraLargeButtonLabel }}
                    style={{ fontFamily: "'Baloo Bhaijaan', cursive" }}
                  >
                    Create Session
                  </Button>
                </FormControl>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </div>
    </Card>
  );
}

FormCard.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(FormCard));
