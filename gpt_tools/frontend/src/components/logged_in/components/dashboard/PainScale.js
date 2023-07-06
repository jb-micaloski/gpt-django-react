import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { Configuration, OpenAIApi } from "openai";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const styles = (theme) => ({
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
});

const difColumns = [
  { field: "id", headerName: "ORDEM", width: 150, headerAlign: 'center', },
  {
    field: "dif",
    headerName: "DIFICULDADES",
    flex: 1,
    editable: true,
    headerAlign: 'center',
  },
];

const trapsColumns = [
  { field: "id", headerName: "ORDEM", width: 150, headerAlign: 'center', },
  {
    field: "trap",
    headerName: "ARMADILHAS",
    flex: 1,
    editable: true,
    headerAlign: 'center',
  },
];

const frustColumns = [
  { field: "id", headerName: "ORDEM", width: 150, headerAlign: 'center', },
  {
    field: "frust",
    headerName: "FRUSTRAÇÕES",
    editable: true,
    flex: 1,
    headerAlign: 'center',
  },
];

const conseqColumns = [
  { field: "id", headerName: "ORDEM", width: 150, headerAlign: 'center', },
  {
    field: "conseq",
    headerName: "CONSEQUÊNCIAS",
    flex: 1,
    editable: true,
    headerAlign: 'center',
  },
];

function PainScale(props) {

  const [storedValues, setStoredValues] = useState([]);

  const generateResponse = async (newQuestion) => {

    const configuration = new Configuration({
      apiKey: "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",
    });
  
    const openai = new OpenAIApi(configuration);

    let options = {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 800,
      top_p: 1,
      frequency_penalty: 0.1,
      presence_penalty: 0.2,
      stop: ["/"],
    };

    let completeOptions = {
      ...options, 
      messages: [{role:'user', content: newQuestion}],
    };

    const response = await openai.createChatCompletion(completeOptions);

    if (response.data.choices) {
      setStoredValues([{
        role: "assistant",
        content: response.data.choices[0].message.content,
      }]);
    }
    return response.data.choices[0].message.content;
  };

  const { classes } = props;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const inputData = JSON.parse(decodeURIComponent(queryParams.get("input")));

  const [input, setInput] = useState(inputData);
  const [selectedDifRows, setSelectedDifRows] = useState([]);
  const [selectedTrapsRows, setSelectedTrapsRows] = useState([]);
  const [selectedFrustRows, setSelectedFrustRows] = useState([]);
  const [difRows, setDifRows] = useState([]);
  const [trapRows, setTrapRows] = useState([]);
  const [frustRows, setFrustRows] = useState([]);
  const [conseqRows, setConseqRows] = useState([]);

  const handleDifIds = (ids) => {
    const selectedIDs = new Set(ids);
    const selectedRowData = difRows.filter((row) =>
      selectedIDs.has(row.id.toString())
    );
    setSelectedDifRows(selectedRowData);
  };

  const handleTrapsIds = (ids) => {
    const selectedIDs = new Set(ids);
    const selectedRowData = trapRows.filter((row) =>
      selectedIDs.has(row.id.toString())
    );
    setSelectedTrapsRows(selectedRowData);
  };

  const handleFrustIds = (ids) => {
    const selectedIDs = new Set(ids);
    const selectedRowData = frustRows.filter((row) =>
      selectedIDs.has(row.id.toString())
    );
    setSelectedFrustRows(selectedRowData);
  };

  const handleDifs = () => {
    const context = "I am " + input.whoareyou + ".My goal is to sell " + input.product + ".My product has the following details: " + input.descript + ".The target audience I want to communicate with is: " + input.target + ".My biggest difficulty is still: " + input.trouble + ", and I am trying to solve it by seeing my customer and his pains better. My focus communication channel is " + input.channel + ".I often get the following feedbacks from customers about me: " + input.feedback;
    const userdata = input.whoareyou + " " + input.product + " " + input.descript + " " + input.target + " " + input.trouble + " " + input.channel + " " + input.feedback;
    const start_question =
      "As an Expert in persona and target audience research with a focus on problem-solving strategies, generate a List of 10 DIFFICULTIES- and ALWAYS SENT TEN - that MY COSTUMER ([TARGET]) HAVE GOT, that can be solved with the product and target audience writen ahead). Responda em PortuguÊs-BR. Just answer the list enumerated from 1 to 10 with a semicolon at the end of each item.";

    const first = context + " Considerer the data sent by the user below: " + userdata + ". Now, use the content above to respond the question below: " + start_question;

    console.log(first);

    const generate = async () => {
      const response = await generateResponse(first);
      const list = response.split(";").map((problem) => problem.trim());

      const rows = list.map((problem, index) => {
        const id = (index + 1).toString();
        const dif = problem.substring(problem.indexOf(".") + 2);
        return { id, dif };
      });

      setDifRows(rows);
    };

    generate();
  };

  const handleTraps = () => {
    const selectedDifs = selectedDifRows
      .map((item) => `${item.id}. ${item.dif}`)
      .join("; ");
    const traps_context =
      "As an Expert in persona and target audience research with a focus on problem-solving strategies, generate a List 10- and ALWAYS SENT TEN - TRAPS - Traps are solutions that my target audience ([TARGET]) had bought or tried to solve these dificulties above. Responda em PortuguÊs-BR. Just answer the list enumerated from 1 to 10 with a semicolon at the end of each item.";
    const traps_question = selectedDifs + " " + traps_context;

    const generate = async () => {
      const response = await generateResponse(traps_question);
      const list = response.split(";").map((problem) => problem.trim());

      const rows = list.map((problem, index) => {
        const id = (index + 1).toString();
        const trap = problem.substring(problem.indexOf(".") + 2);
        return { id, trap };
      });

      setTrapRows(rows);
    };

    generate();
  };

  const handleFrust = () => {
    const selectedDifs = selectedDifRows
      .map((item) => `${item.id}. ${item.dif}`)
      .join("; ");

    const selectedTraps = selectedTrapsRows
      .map((item) => `${item.id}. ${item.dif}`)
      .join("; ");

    const frust_context =
      "As an Expert in persona and target audience research with a focus on problem-solving strategies, generate a List of 10 - and ALWAYS SENT TEN - FRUSTRATIONS - bad beliefs that my target audience ([TARGET]) have got because of the difficulties and traps they had to handle. Responda em PortuguÊs-BR. Just answer the list enumerated from 1 to 10 with a semicolon at the end of each item.";
    const frust_question = selectedDifs + " " + selectedTraps + " " + frust_context;

    const generate = async () => {
      const response = await generateResponse(frust_question);
      const list = response.split(";").map((problem) => problem.trim());

      const rows = list.map((problem, index) => {
        const id = (index + 1).toString();
        const frust = problem.substring(problem.indexOf(".") + 2);
        return { id, frust };
      });

      setFrustRows(rows);
    };

    generate();
  };

  const handleConseq = () => {
    const selectedDifs = selectedDifRows
      .map((item) => `${item.id}. ${item.dif}`)
      .join("; ");
    
    const selectedTraps = selectedTrapsRows
      .map((item) => `${item.id}. ${item.dif}`)
      .join("; ");
    
    const selectedFrust = selectedFrustRows
      .map((item) => `${item.id}. ${item.dif}`)
      .join("; ");
      
    const conseq_context =
      "As an Expert in persona and target audience research with a focus on problem-solving strategies, generate a List of 10 CONSEQUENCES, that my target audience ([TARGET] is facing after dificulties, traps and frustrations). Responda em PortuguÊs-BR. Just answer the list enumerated from 1 to 10 with a semicolon at the end of each item.";
    const conseq_question = selectedDifs + " " + selectedTraps + " " + selectedFrust + " " + conseq_context;

    const generate = async () => {
      const response = await generateResponse(conseq_question);
      const list = response.split(";").map((problem) => problem.trim());

      const rows = list.map((problem, index) => {
        const id = (index + 1).toString();
        const conseq = problem.substring(problem.indexOf(".") + 2);
        return { id, conseq };
      });

      setConseqRows(rows);
    };

    generate();
  };

  useEffect(() => {
    handleDifs();
  }, []);

  return (
    <Fragment>
      <Box sx={{ height: 400, width: "100%" }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <DataGrid
              rows={difRows}
              columns={difColumns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              autoHeight={difRows}
              rowHeight={30}
              slots={{
                toolbar: GridToolbar,
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
              onRowSelectionModelChange={(ids) => handleDifIds(ids)}
            />
          </CardContent>
          <CardActions sx={{align:"center", justifyContent: "center", display: "flex"}}>
            <Button size="small" variant="contained" onClick={handleTraps}>
              Gerar Armadilhas
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <DataGrid
              rows={trapRows}
              columns={trapsColumns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              autoHeight={trapRows}
              rowHeight={30}
              className={classes.brandText}
              slots={{
                toolbar: GridToolbar,
              }}
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
              onRowSelectionModelChange={(ids) => handleTrapsIds(ids)}
            />
          </CardContent>
          <CardActions sx={{align:"center", justifyContent: "center", display: "flex"}}>
            <Button size="small" variant="contained" onClick={handleFrust}>
              Gerar Frustrações
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <DataGrid
              rows={frustRows}
              columns={frustColumns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              autoHeight={frustRows}
              rowHeight={30}
              className={classes.brandText}
              slots={{
                toolbar: GridToolbar,
              }}
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
              onRowSelectionModelChange={(ids) => handleFrustIds(ids)}
            />
          </CardContent>
          <CardActions sx={{align:"center", justifyContent: "center", display: "flex"}}>
            <Button size="small" variant="contained" onClick={handleConseq}>
              Gerar Consequências
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <DataGrid
              rows={conseqRows}
              columns={conseqColumns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              autoHeight={conseqRows}
              rowHeight={30}
              className={classes.brandText}
              slots={{
                toolbar: GridToolbar,
              }}
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
            />
          </CardContent>
        </Card>
      </Box>
    </Fragment>
  );
}

PainScale.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PainScale);
