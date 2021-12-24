import React from "react";
import { DispatchAction } from "../../interfaces/interfaces.dispatch.action/DispatchAction";
import { DispatchContext } from "../dispatch.create.context/DispatchContext";


export const UseDispatchContext = (): { dispatch: React.Dispatch<DispatchAction> } => {

    const dispatch = React.useContext(DispatchContext);
    if (dispatch === undefined) {
        throw new Error("Cannot access dispatch context");
    }
    return dispatch;

};
