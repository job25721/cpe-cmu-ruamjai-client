import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCounter, decreseCounter } from "../store/actions/counter";

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});
const connector = connect(mapStateToProps, { addCounter, decreseCounter });

const Test = (props) => {
  return (
    <div className="container has-padding-10">
      <h1>Redux state</h1>
      <h1 className="subtitle">counter : {props.counter}</h1>
      <button className="button is-primary is-light" onClick={props.addCounter}>
        +
      </button>
      <button
        className="button is-danger is-light"
        onClick={props.decreseCounter}
      >
        -
      </button>
    </div>
  );
};

export default connector(Test);
