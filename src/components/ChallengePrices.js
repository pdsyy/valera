import React from 'react';
import kortLogo from "../images_challenge/kortLogo.png";
import kortana from "../images_challenge/kortana.png";
import tradicave from "../images_challenge/tradicave.png";
import warn from "../images_challenge/WarningCircle.png";
import warn1 from "../images_challenge/warn.svg";
import flashF from "../images_challenge/flashF.png";

const ChallengePrices = () => {
    return (
        <div className="challenge_prices">
            <h2>
                Ціна на проходження
            </h2>
            <p className="challenge_prices_desc">
                Після оплати, ми закінчуємо челлендж до Profit Таргету, Ви отримуєте сертифікат і
                реальний рахунок на якому можете торгувати, виводити кошти і насолоджуватися життям
                funded трейдера.
            </p>
            <div className="challenge_prices_tar">
                <div className="challenge_prices_tar_variants">
                    <div><span className="variants_chall" onClick = {(e) => {
                        document.querySelectorAll(".challenge_prices_tar_variants span").forEach((e) => {
                            e.classList.remove("variants_chall")
                        })
                        e.currentTarget.classList.add("variants_chall")
                        let first = document.querySelector(".desc_prices_chall.first_p")
                        let second = document.querySelector(".desc_prices_chall.second_p")
                        let third = document.querySelector(".desc_prices_chall.third_p")
                        third.classList.add("dis_none")
                        second.classList.add("dis_none")
                        first.classList.add("dis_grid")
                        first.classList.remove("dis_none")
                    }}>Nova Funding</span></div>

                    <div><span onClick = {(e) => {
                            document.querySelectorAll(".challenge_prices_tar_variants span").forEach((e) => {
                                e.classList.remove("variants_chall")
                            })
                            e.currentTarget.classList.add("variants_chall")
                            let first = document.querySelector(".desc_prices_chall.first_p")
                            let second = document.querySelector(".desc_prices_chall.second_p")
                            let third = document.querySelector(".desc_prices_chall.third_p")
                            first.classList.add("dis_none")
                            second.classList.add("dis_none")
                            third.classList.add("dis_grid")
                            third.classList.remove("dis_none")
                        }}
                    >Flash Funded</span></div>
                </div>
                <div className="desc_prices_chall first_p">
                    <div className = "desc_prices_chall_ins f">
                        <div className="logo_prices_chall">
                            <img src={kortLogo} alt=""/>
                        </div>
                        <div className = "desc_chall_prices">
                            <div className = "price">
                                Ціна акаунту:
                            </div>
                            <div className = "prices_pr">
                                <div className = "prices_pr_ins">
                                    <div>25k</div>
                                    <div>$ 339</div>
                                </div>
                                <div className = "prices_pr_ins">
                                    <div>50k</div>
                                    <div>$ 439</div>
                                </div>
                                <div className = "prices_pr_ins">
                                    <div>100k</div>
                                    <div>$ 739</div>
                                </div>
                                <div className = "prices_pr_ins">
                                    <div>200k</div>
                                    <div>$ 1239</div>
                                </div>
                            </div>
                            <a href = "https://t.me/volodymyr_fx">
                            <button className = "button_style">
                                Пройти челендж
                            </button>
                            </a>
                        </div>
                    </div>
                    <div className = "desc_prices_chall_ins s">
                        <div className = "description_prices_main">
                            <div className = "perev_desc_prices">
                                <div className = "zag">Особливості проп компанії</div>
                                <div className = "about_zag">
                                    <ul>
                                        <li>Проходження за 1-2 дні</li>
                                        <li>Максимальний депозит на 1 людину : <span>$ 400к</span></li>
                                        <li>Перші 3 виплати через 21 день, з четвертої - кожні 14 днів.</li>
                                        <li>Вивід на крипту або Swift</li>
                                    </ul>
                                </div>
                            </div>
                            <div className = "perev_desc_prices s">
                                <div className = "zag">Profit Split</div>
                                <div className = "about_zag">
                                    <ul>
                                        <li>Перша виплата: 50%</li>
                                        <li>Друга : 70%</li>
                                        <li>Третя: 80%</li>
                                    </ul>
                                    <div className = "zag">Спреди:</div>
                                    <div className = "about_zag_star">
                                        <ul>
                                            <li>EU: 7-9</li>
                                            <li>GU: 8-10</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className = "about_prices_faq">
                            <img src = {warn1} alt = ""/>
                            Обов'язково ознайомтесь з правилами на сторінці проп-компанії в розділі FAQ
                        </div>
                    </div>
                </div>
                <div className="desc_prices_chall second_p dis_none">
                    <div className = "desc_prices_chall_ins f">
                        <div className="logo_prices_chall">
                            <img src={kortana} alt=""/>
                        </div>
                        <div className = "desc_chall_prices">
                            <div className = "price">
                                Ціна акаунту:
                            </div>
                            <div className = "prices_pr">
                                <div className = "prices_pr_ins">
                                    <div>25k</div>
                                    <div>$ 297</div>
                                </div>
                                <div className = "prices_pr_ins">
                                    <div>50k</div>
                                    <div>$ 397</div>
                                </div>
                                <div className = "prices_pr_ins">
                                    <div>100k</div>
                                    <div>$ 597</div>
                                </div>
                                <div className = "prices_pr_ins">
                                    <div>200k</div>
                                    <div>$ 997</div>
                                </div>
                            </div>
                            <a href = "https://t.me/volodymyr_fx">
                                <button className = "button_style">
                                    Пройти челендж
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className = "desc_prices_chall_ins s">
                        <div className = "description_prices_main">
                            <div className = "perev_desc_prices">
                                <div className = "zag">Особливості проп компанії</div>
                                <div className = "about_zag">
                                    <ul>
                                        <li>Проходження за 1-3 дні</li>
                                        <li>Максимальний депозит на 1 людину : <span>$ 200к</span></li>
                                        <li>Перші 2 виплати через 21 день, з третьої - кожні 14 днів.</li>
                                        <li>Вивід на крипту або Swift</li>
                                    </ul>
                                </div>
                            </div>
                            <div className = "perev_desc_prices s">
                                <div className = "zag">Profit Split</div>
                                <div className = "about_zag">
                                    <ul>
                                        <li>Перша виплата: 50%</li>
                                        <li>Друга : 70%</li>
                                        <li>Третя: 80%</li>
                                        <li>Четверта : 90%</li>
                                    </ul>
                                    <div className = "zag">Спреди:</div>
                                    <div className = "about_zag_star">
                                        <ul>
                                            <li>EU: 2-4</li>
                                            <li>GU: 5-7</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className = "about_prices_faq two_block">
                            <div>
                                <img src = {warn1} alt = ""/>
                                Не можна утримувати трейди на вихідні.
                            </div>
                            <div>
                                <img src = {warn1} alt = ""/>
                                Звернути увагу на consistency rule
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desc_prices_chall third_p dis_none">
                    <div className = "desc_prices_chall_ins f">
                        <div className="logo_prices_chall">
                            <img src={flashF} alt=""/>
                        </div>
                        <div className = "desc_chall_prices">
                            <div className = "price">
                                Ціна акаунту:
                            </div>
                            <div className = "prices_pr">
                                <div className = "prices_pr_ins">
                                    <div>30k</div>
                                    <div><span className = "zach">$ 297</span> $ 252</div>
                                </div>
                                <div className = "prices_pr_ins">
                                    <div>50k</div>
                                    <div><span className = "zach">$ 357</span>$ 303</div>
                                </div>
                                <div className = "prices_pr_ins">
                                    <div>100k</div>
                                    <div><span className = "zach">$ 547</span>$ 465</div>
                                </div>
                                <div className = "prices_pr_ins">
                                    <div>150k</div>
                                    <div><span className = "zach">$ 847</span>$ 720</div>
                                </div>
                                <div className = "prices_pr_ins">
                                    <div>200k</div>
                                    <div><span className = "zach">$ 947</span>$ 805</div>
                                </div>
                                <div className = "prices_pr_ins">
                                    <div>300k</div>
                                    <div><span className = "zach">$ 2060</span>$ 1751</div>
                                </div>
                                <div className = "prices_pr_ins">
                                    <div>400k</div>
                                    <div><span className = "zach">$ 3400</span>$ 2890</div>
                                </div>
                            </div>
                            <a href = "https://t.me/volodymyr_fx">
                                <button className = "button_style">
                                    Пройти челендж
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className = "desc_prices_chall_ins s">
                        <div className = "description_prices_main">
                            <div className = "perev_desc_prices">
                                <div className = "zag">Особливості проп компанії</div>
                                <div className = "about_zag">
                                    <ul>
                                        <li>Максимальний лос - 7%</li>
                                        <li>Правило 2 хвилин</li>
                                        <li>Правило послідовності</li>
                                        <li>Перша виплата через 21 день, наступні - кожні 14 днів</li>
                                        <li>Правило 40%</li>
                                    </ul>
                                </div>
                            </div>
                            <div className = "perev_desc_prices s">
                                <div className = "zag">Profit Split</div>
                                <div className = "about_zag">
                                    <ul>
                                        <li>Перша виплата: 60%</li>
                                        <li>Друга : 70%</li>
                                        <li>Третя: 80%</li>
                                        <li>Четверта : 90%</li>
                                    </ul>
                                    <div className = "zag">Спреди:</div>
                                    <div className = "about_zag_star">
                                        <ul>
                                            <li>Ідентичні - FTMO</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className = "about_prices_faq">
                            <img src = {warn1} alt = ""/>
                            Обов'язково ознайомтесь з правилами на сторінці проп-компанії в розділі FAQ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengePrices;