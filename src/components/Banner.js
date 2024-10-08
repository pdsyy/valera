import React from 'react';
import partner2 from "../images/onee.png"
import partner5 from "../images/flash1.png"
import mainB from "../images/11.png"

const Banner = () => {
    return (
        <div className="main_page_banner">

            <div className = "gray_block_chall"></div>
            <div className = "white_block"></div>
            <h1 className="main_h1">
                Професійний роботизований трейдинг:<br/>
                <span style={{
                    background: "linear-gradient(276.58deg, #369FAE 0%, #6BE4CA 91.46%, #6BE4CA 91.81%)",
                    borderRadius: "12px",
                    padding: "0px 10px 10px",
                    color: "white"
                }}>заощаджуйте час</span> та максимізуйте прибуток
            </h1>
            <div className="slog">
                Головна ідея сервісу HiTrading полягає в тому, щоб зробити індустрію
                проп-трейдингових компаній більш доступною для кожного.
            </div>
            <div>
            <a>
                <button className="video_about button_style" onClick={() => {

                    document.querySelector(".video_about_page").classList.add("dis_block")

                    document.querySelector("iframe").src = "https://www.youtube.com/embed/TQxsK-j6WSQ"
                }}>
                    Відео про нас
                </button>
            </a>
            </div>
            <img src={mainB} className="monitor_image" alt=""/>
            <div className="text">
                Ми познайомимо Вас з можливостями торгівлі на рахунках проп-компаній,
                ефективним використанням алгоритмічних ботів та торговими інструментами
                для створення пасивного доходу.
            </div>
            <div className="partners">
                <div className = "novaF"><img src={partner2} className="nova" alt = ""/> NOVA FUNDING</div>
                <div><img src={partner5} alt = ""/></div>
            </div>
        </div>
    );
};

export default Banner;