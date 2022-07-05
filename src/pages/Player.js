import React, { useEffect } from "react";
import { keyState, playerSelector } from "../atom";
import { useRecoilValue } from "recoil";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const Player = () => {
    // const [player, setPlayer] = useRecoilState(playerState);
    const playerImg = useRecoilValue(playerSelector);
    return (
        <Card sx={{ maxWidth: 400, background: "lightblue", marginTop: 10 }}>
            <CardContent>{playerImg}</CardContent>
        </Card>
    );
};

export default Player;
