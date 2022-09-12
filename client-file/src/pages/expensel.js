import React from "react";
import { connect as cc } from "react-redux";

const Func = (props) => (
    <div>
        <h1>hello in another file .....??</h1>
        <u>{props.filters.text}</u><br/>
        <ul>
            {props.expp.map((ele,keys) => (
                <li key={keys}>
                    <span>Description : {ele.desc}</span>{" <> "}
                    <span>Amout : {ele.amt}</span>
                 </li>
            ))}
        </ul>
    </div>
);

const cc_exp = cc((st) => {
    return {
        expp: st.exp,
        filters: st.filter
    };
})(Func);

export default cc_exp;