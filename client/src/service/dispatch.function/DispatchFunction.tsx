import { State } from "../../interfaces/interfaces.state/State";
import { DispatchAction } from "../../interfaces/interfaces.dispatch.action/DispatchAction";


export const DispatchFunction = (state: State, action: DispatchAction): State => {

    switch(action.type) {
        default: {
            return { ...state };
        }
    }

};
