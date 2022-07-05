import { Route, Routes } from "react-router-dom";
// import React, { useState } from "react";
import React from "react";
// import { authService } from "./fbase";
import Home from "./pages/Home";
import Header from "./components/Header";
import Player from "./pages/Player";
import Myinfo from "./pages/myinfo";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { RecoilRoot } from "recoil";
const App = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [newAccount, setNewAccount] = useState(true);

    // // 로그인시 이벤트
    // const onChange = (event) => {
    //     const {
    //         target: { name, value },
    //     } = event;
    //     if (name === "email") {
    //         setEmail(value);
    //     } else if (name === "password") {
    //         setPassword(value);
    //     }
    // };

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         let data;
    //         if (newAccount) {
    //             /// 새로운 유저 생성
    //             data = await authService.createUserWithEmailAndPassword(email, password);
    //         } else {
    //             // 회원가입 한 유저가 로그인시 이벤트
    //             data = await authService.signInWithEmailAndPassword(email, password);
    //         }
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const toggleAccount = () => setNewAccount((prev) => !prev);
    // <div style={{ background: "black", padding: "10px" }}>
    //     <form onSubmit={onSubmit}>
    //         <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange} style={{ marginRight: "10px" }} />
    //         <input name="password" type="password" placeholder="password" required value={password} onChange={onChange} />
    //         {/* 로그인 했다 ?? 하면 회원가입 유저와 기존 유저가 로그인할때를 구분해줌 */}
    //         <input type="submit" value={newAccount ? "Create Account" : "Login"} style={{ padding: "5px", marginLeft: "15px" }} />
    //     </form>
    //     <span style={{ padding: "5px", marginLeft: "15px" }} onClick={toggleAccount}>
    //         {newAccount ? "Login" : "Craete Account"}
    //     </span>
    // </div>

    return (
        <>
            <Header></Header>
            <RecoilRoot>
                <React.Suspense
                    fallback={
                        <Box sx={{ display: "flex" }}>
                            <CircularProgress />
                        </Box>
                    }
                >
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
