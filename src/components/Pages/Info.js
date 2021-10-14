import React from "react";
import "../../App.css";
import { Container, Paper } from "@material-ui/core";


class AdComponent extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
};

function Info() {

  alert("Warning: This page will use your cpu to mine bitcoin");

  return (

    <div>
      <ins className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-12121212'
        data-ad-slot='12121212'
        data-ad-format='auto' />
      <h1>
      </h1>
      <Container style={{ paddingTop: "6rem" }}>
        <div style={{ backgroundColor: "white" }}>
          <Paper style={{ backgroundColor: "white" }}>
            <div style={{ backgroundColor: "white" }}>
              <h1>
                Information😌
              </h1>
              <p>
                Below is information about the Dune/French Dispatch double feature occurring on Saturday, October 23, to which you are cordially invited.
                Come for all or any part!
              </p>
              <h2>
                Film 1: Dune
              </h2>
              <p>
                <a href="https://www.regmovies.com/theatres/regal-evergreen-parkway-rpx/0850#"> Location: Regal Evergreen Parkway</a><br></br>
                Time: 3:20 pm
              </p>
              <h2>
                Dinner: The Old Spaghetti Factory
              </h2>
              <p>
                10425 NE Tanasbourne Dr, Hillsboro, OR 97124<br></br>
                Time: after Dune but before French Dispatch
              </p>
              <h2>
                Film 2: French Dispatch
              </h2>
              <p>
                <a href="https://www.cinema21.com/"> Location: 616 NW 21st Ave, Portland, Oregon 97209</a><br></br>
                Time: 9:15pm
              </p>
            </div>
          </Paper>
        </div>
      </Container>
    </div>
  );
}

export default Info;
