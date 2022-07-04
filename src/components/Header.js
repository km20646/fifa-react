import { useNavigate } from "react-router-dom";
import "./Header.css";
const menu = [
    {
        name: "player",
        text: "선수검색",
    },
    {
        name: "myinfo",
        text: "나의 정보",
    },
];
const Header = () => {
    const navigate = useNavigate();
    const goPage = (param) => {
        navigate(`/${param}`);
    };
    return (
        <div className="header">
            {menu.map((m) => (
                <div
                    className="list"
                    key={m.name}
                    onClick={(e) => {
                        goPage(m.name);
                    }}
                >
                    {m.text}
                </div>
            ))}
        </div>
    );
};

export default Header;
