import React from "react";
import { State } from "../../interfaces/interfaces.state/State";
import { StateContext } from "../state.create.context/StateContext";

export const UseStateContext = (): {state: State} => {

    const state = React.useContext(StateContext);
    if (state === undefined) {
        throw new Error("Cannot access state context");
    }
    return state;

}