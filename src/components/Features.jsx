import React from "react";

export const Features = (props) => {
  return (
    <header id="Features">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="/header"
                  className="btn"
                >
                  Hello
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
