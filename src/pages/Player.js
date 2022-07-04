import React, { useEffect } from "react";
import { playerState, playerSelector } from "../atom";
import { useRecoilState, useRecoilValue } from "recoil";

const Player = () => {
    // const [player, setPlayer] = useRecoilState(playerState);

    const playerImg = useRecoilValue(playerSelector);
    return <div>{playerImg}</div>;
};

export default Player;
