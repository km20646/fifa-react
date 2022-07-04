import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
const key = "";

const userInfoUrl = "https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=페어메르테사커";
const maxGradeUrl = `https://api.nexon.co.kr/fifaonline4/v1.0/users/e9afb09355b54ba3877e00cd/maxdivision`;
const buyListUrl = `https://api.nexon.co.kr/fifaonline4/v1.0/users/e9afb09355b54ba3877e00cd/markets?tradetype=buy&limit=100`;
const fetchUser = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            Authorization: key,
        },
    });
    return data;
};
const Users = () => {
    const userInfo = useQuery(["users"], () => fetchUser(userInfoUrl));

    const maxGrade = useQuery("maxgrade", () => fetchUser(maxGradeUrl));
    const maxGradeData = maxGrade.data;
    const buyList = useQuery("buylist", () => fetchUser(buyListUrl));
    const buyListData = buyList.data;
    return (
        !userInfo.isLoading &&
        !maxGrade.isLoading &&
        !buyList.isLoading && (
            <ul>
                <li>구단주명 : {userInfo.data.nickname}</li>
                <li>레벨 : {userInfo.data.level}</li>
                {maxGradeData.map((d) => (
                    <li key={d.division}>{d.achievementDate}</li>
                ))}
                {buyListData.map((m, i) => (
                    <li key={i}>{m.value}</li>
                ))}
            </ul>
        )
    );
};
const myinfo = () => {
    return <Users></Users>;
};

export default myinfo;
