import React, { useState } from "react";
import { useStoreState } from "easy-peasy";
import { useStoreActions } from "easy-peasy";
import { Grid, Step, StepLabel, Stepper } from "@mui/material";


function TodoList() {
  const todos = useStoreState((state) => state.todos);
  const addTodo = useStoreActions((actions) => actions.addTodo);
  const [value, setValue] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter the todo"
        style={{padding:'10px',border:'1px solid lightgray',width: "400px",outline:'none'}}
      />{" "}
      <button
        onClick={() => {
          addTodo(value);
        }}
        style={{padding:'10px',border:'none',width: "420px",cursor:'pointer',outline:'none'}}
      >
        Add todo
      </button>
      <Grid sx={{display: "flex"}}>
      <Grid>
      {todos.map((todo, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            alignItems: "center",
            width: "400px",
            height: "40px",
            padding: "10px",
            backgroundColor: "rgb(125,0,0)",
            color: "white",
          }}
        >
          {todo}
        </div>
      ))}
      </Grid>
      <Grid>
      <Stepper activeStep={0} orientation="vertical">
        {todos.map((step, index) => (
          <Step key={index} >
            <StepLabel
            >
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      </Grid>
      </Grid>
    </div>
  );
}

export default TodoList;
