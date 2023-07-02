import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { Configuration, OpenAIApi } from "openai";
import { DataGrid } from "@mui/x-data-grid";

const styles = (theme) => ({
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
});

const columns = [
  { field: "id", headerName: "ORDEM", width: 150 },
  {
    field: "dif",
    headerName: "DIFICULDADES",
    width: 865,
    editable: true,
  },
];

//const rows = [{id:'1',dif:'dificuldade1'}];

function PainScale(props) {
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const [storedValues, setStoredValues] = useState([]);

  const difList = storedValues.map((value) =>
    value.answer.split(";").map((problem) => {
      return problem.trim();
    })
  );

  const rows = difList.flatMap((problems, index) => {
    return problems.map((problem, index) => {
      const id = (index + 1).toString();
      const dif = problem.substring(problem.indexOf('.') + 2);
      return { id, dif };
    });
  });

  const generateResponse = async (newQuestion) => {
    let options = {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["/"],
    };

    let completeOptions = {
      ...options,
      prompt: newQuestion,
    };

    const response = await openai.createCompletion(completeOptions);

    if (response.data.choices) {
      console.log(response.data.choices[0].text);
      setStoredValues([
        {
          question: newQuestion,
          answer: response.data.choices[0].text,
        },
        ...storedValues,
      ]);
    }
  };

  const { classes } = props;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const inputData = JSON.parse(atob(queryParams.get("input")));

  const [input, setInput] = useState(inputData);

  useEffect(() => {
    console.log(input);
    const question =
      "Liste 10 dificuldades que podem ser resolvidos com base na experiência e conhecimento do usuario em portugues, apenas responda a lista enumerada de 1 a 10 com ponto-virgula no final da cada item";
    generateResponse(question);
  }, []);

  return (
    <Fragment>
      <Box sx={{ height: 400, width: "100%" }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              className={classes.brandText}
              sx={{
                boxShadow: 2,
                border: 2,
                borderColor: "primary.light",
                "& .MuiDataGrid-cell:hover": {
                  color: "primary.main",
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Continue a Escala de Dores
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Fragment>
  );
}

PainScale.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PainScale);
