import React from "react";
import { DispatchAction } from "../../interfaces/interfaces.dispatch.action/DispatchAction";

export const DispatchContext = React.createContext<{dispatch: React.Dispatch<DispatchAction>} | undefined>(undefined);