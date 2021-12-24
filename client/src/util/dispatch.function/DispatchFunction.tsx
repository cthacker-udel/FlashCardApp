import { State } from "../../interfaces/interfaces.state/State";
import { DispatchAction } from "../../interfaces/interfaces.dispatch.action/DispatchAction";


export const DispatchFunction = (action: DispatchAction, state: State): State => {

    switch(action.type) {
        default: {
            return { ...state };
        }
    }

};
