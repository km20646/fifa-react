import React from "react";
import { keyState } from "../atom";
import { useQuery } from "react-query";
import axios from "axios";
import { useRecoilValue } from "recoil";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
const userInfoUrl = "https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=페어메르테사커";
const maxGradeUrl = `https://api.nexon.co.kr/fifaonline4/v1.0/users/e9afb09355b54ba3877e00cd/maxdivision`;
const buyListUrl = `https://api.nexon.co.kr/fifaonline4/v1.0/users/e9afb09355b54ba3877e00cd/markets?tradetype=buy&limit=100`;

const FetchUser = async (url, key) => {
    const { data } = await axios.get(url, {
        headers: {
            Authorization: key,
        },
    });
    return data;
};
const BuyDataGrid = () => {
    const key = useRecoilValue(keyState);

    const buyList = useQuery("buylist", () => FetchUser(buyListUrl, key));
    const buyListData = buyList.data;
    console.log(buyListData);
    const buyColumns = [
        { field: "tradeDate", headerName: "거래일", width: 190 },
        { field: "spid", headerName: "아이디" },
        { field: "grade", headerName: "강화등급" },
        {
            field: "value",
            headerName: "가격",
            width: 150,
            format: (value) => {
                return `${value}BP`;
            },
        },
    ];
    return (
        !buyList.isLoading && (
            <Box sx={{ height: "525px", width: "100%" }}>
                <DataGrid rows={buyListData} columns={buyColumns} pageSize={8} rowsPerPageOptions={[8]} disableSelectionOnClick getRowId={(row) => row.saleSn} />
            </Box>
        )
    );
};
const Users = () => {
    const key = useRecoilValue(keyState);
    const userInfo = useQuery(["users"], () => FetchUser(userInfoUrl, key));

    const maxGrade = useQuery("maxgrade", () => FetchUser(maxGradeUrl, key));
    const maxGradeData = maxGrade.data;

    return (
        !userInfo.isLoading &&
        !maxGrade.isLoading && (
            <ul>
                <Alert severity="error">
                    <AlertTitle>구단주명</AlertTitle>
                    {userInfo.data.nickname}
                </Alert>
                <Alert severity="success">
                    <AlertTitle>레벨</AlertTitle>
                    {userInfo.data.level}
                </Alert>
                {maxGradeData.map((d) => (
                    <li key={d.division}>{d.achievementDate}</li>
                ))}
                <BuyDataGrid></BuyDataGrid>
                {/* {buyListData.map((m, i) => (
                    <li key={i}>{m.value}</li>
                ))} */}
            </ul>
        )
    );
};
const myinfo = () => {
    return <Users></Users>;
};

export default myinfo;
