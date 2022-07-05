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
// const Header = () => {
//     const navigate = useNavigate();
//     const goPage = (param) => {
//         navigate(`/${param}`);
//     };
//     return (
//         <div classNameName="header">
//             {menu.map((m) => (
//                 <div
//                     classNameName="list"
//                     key={m.name}
//                      {
//                         goPage(m.name);
//                     }}
//                 >
//                     {m.text}
//                 </div>
//             ))}
//         </div>
//     );
// };
const Header = () => {
    const navigate = useNavigate();
    const goPage = (param) => {
        navigate(`/${param}`);
    };
    return (
        <section id="gnb">
            <header id="header">
                <h1 className="btn_logo">
                    <a href="https://fifaonline4.nexon.com/main/index">
                        <p className="hidden">EA SPORTS™ FIFA ONLINE 4</p>
                    </a>
                </h1>
                <div className="btn_logo2">
                    <a href="/220623/Intro?utm_source=pc&amp;utm_medium=evGnbTop&amp;utm_campaign=220623_intro" className="btn_event_logo"></a>
                </div>

                <div className="menu">
                    <a href="https://events.fifaonline4.nexon.com/220623/pcbang?utm_source=pc&amp;utm_medium=evGnbTop&amp;utm_campaign=premium" target="_blank" rel="noreferrer">
                        <div className="premium "></div>
                    </a>

                    <button type="button" className="btn_login" style={{ cursor: "pointer" }}>
                        <p className="hidden">로그인</p>
                    </button>

                    <button type="button" className="btn_gamestart">
                        <p className="hidden">GAME START</p>
                    </button>
                    <button type="button" className="btn_control">
                        <div className="inner">
                            <span>메뉴</span>
                        </div>
                    </button>
                </div>
            </header>
            <aside id="aside" className="">
                <div className="button_box">
                    <a href="https://fifaonline4.nexon.com/main/index" className="btn_home">
                        공홈
                    </a>
                    <a href="#none" className="btn_share">
                        공유
                    </a>
                </div>
                <div className="scroll_box" style={{ height: "862px", overflow: "hidden" }}>
                    <ul style={{ height: "2064px" }}>
                        <li>
                            <a href="https://events.fifaonline4.nexon.com/220623/Intro?section=1&amp;utm_source=pc&amp;utm_medium=evGnb&amp;utm_campaign=summerupdate" target="_self">
                                <div className="thumb">
                                    <img src="https://ssl.nexon.com/s2/game/fo4/obt/banner/evGnb/banner_220623_update_GNB_qwe.png" alt="" />
                                </div>
                                <p>2022.6.30(목) ~ </p>
                            </a>
                        </li>
                        <li>
                            <a href="https://events.fifaonline4.nexon.com/TrophyShop22SH/Index?utm_source=pc&amp;utm_medium=evGnb&amp;utm_campaign=220701_trophy" target="_self">
                                <div className="thumb">
                                    <img src="https://ssl.nexon.com/s2/game/fo4/obt/banner/evGnb/banner_220630_trophy_10ddf_gnb.png" alt="" />
                                </div>
                                <p>2022.7.1(금) ~ 12.31(토)</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="scroll_bar on" style={{ height: "862px" }}>
                    <div className="handle" style={{ height: "355px" }}>
                        <span></span>
                    </div>
                </div>
            </aside>
            <div id="share">
                <div className="title">
                    <h4>페이지 공유하기</h4>
                    <button type="button" className="btn_close">
                        닫기
                    </button>
                </div>
                <div className="inner">
                    <button type="button" className="btn_kakaotalk">
                        카카오톡
                    </button>
                    <button type="button" className="btn_facebook">
                        페이스북
                    </button>
                </div>
            </div>
            <div id="dimmed"></div>
            <div id="fixedBar">
                <ul>
                    {menu.map((m) => (
                        <li key={m.name} style={{ cursor: "pointer" }}>
                            <a onClick={() => goPage(m.name)}>{m.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
export default Header;
