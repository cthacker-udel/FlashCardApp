import React, { useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { InitialState } from "../../assets/InitialState";
import { DispatchContext } from "../../service/dispatch.create.context/DispatchContext";
import { DispatchFunction } from "../../service/dispatch.function/DispatchFunction";
import { StateContext } from "../../service/state.create.context/StateContext";

export const MainPage = () => {

    const [state, dispatch] = useReducer(DispatchFunction, InitialState);

    const dispatchValue = { dispatch };
    const stateValue = { state };

    return(
        <>
            <BrowserRouter>
                <DispatchContext.Provider value={dispatchValue}>
                    <StateContext.Provider value={stateValue}>
                        <Routes>

                            <Route path="/mainpage" element={<MainPage />}>

                                <Route path="deletecard" element={<></>} />
                                <Route path="card-table" element={<></>} />
                                <Route path="addcard" element={<></>} />

                            </Route>

                            <Route path="/" element={<Navigate to="/mainpage" />} />
                        </Routes>
                    </StateContext.Provider>    
                </DispatchContext.Provider>
            </BrowserRouter>
        </>
    );
};
