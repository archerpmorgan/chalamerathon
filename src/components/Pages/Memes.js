import React from "react";
import "../../App.css";
import { Container, Paper } from "@material-ui/core";
import mem1 from './mem1.jpg';
import mem2 from './mem2.jpg';
import mem3 from './mem3.jpg';

function Memes() {
  return (
    <div>
      <h1>
      </h1>
      <Container style={{paddingTop: "6rem"}}>
        <Paper>
            <img src={mem1}></img>
            <img src={mem2}></img>
            <img src={mem3}></img>
        </Paper>
      </Container>
    </div>
  );
}

export default Memes;
