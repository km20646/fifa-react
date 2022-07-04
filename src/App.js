import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Player from "./pages/Player";
import Myinfo from "./pages/myinfo";
import { RecoilRoot } from "recoil";
const App = () => {
    return (
        <>
            <Header></Header>
            <RecoilRoot>
                <React.Suspense fallback={<div>.....loading</div>}>
                    <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/player" element={<Player></Player>}></Route>
                        <Route path="/myinfo" element={<Myinfo></Myinfo>}></Route>
                    </Routes>
                </React.Suspense>
            </RecoilRoot>
        </>
    );
};

export default App;
