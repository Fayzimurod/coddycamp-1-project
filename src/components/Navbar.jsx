import { Link } from "react-router-dom"
import mainLogo from "../assets/mainLogo.png"
import likeIcon from "../assets/likeIcon.png"
import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="max-w-[1750px] w-[100%] m-auto mt-0 flex items-center justify-between">
            <div className="flex gap-8">
                <Link to="/">
                    <img src={mainLogo} className="w-auto h-[40px]" alt="logo" />
                </Link>
                <ul className="flex items-center gap-8">
                    <li>
                        <select name="" id="">
                            <option value="Направления" selected disabled>Направления</option>
                            <option value="ЭкскурсииВСанктПетербурге">Экскурсии в Санкт-Петербурге</option>
                            <option value="ЭкскурсииВКалининграде">Экскурсии в Калининграде</option>
                            <option value="ЭкскурсииВМурманске">Экскурсии в Мурманске</option>
                            <option value="ЭкскурсииВСтамбуле">Экскурсии в Стамбуле</option>
                            <option value="ЭкскурсииВОАЭ">Экскурсии в ОАЭ</option>
                            {/* <option value="">
                                <select name="" id="">
                                    <option value="АвторскиеТуры" disabled>Авторские туры</option>
                                    <option value="АвторскийТурВДагестан">Авторский тур в Дагестан</option>
                                    <option value="АвторскийТурНаКамчатку">Авторский тур на Камчатку</option>
                                    <option value="АвторскийТурВМурманск">Авторский тур в Мурманск</option>
                                    <option value="АвторскийТурВСтамбул">Авторский тур в Стамбул</option>
                                    <option value="АвторскийТурНаБайкал">Авторский тур на Байкал</option>
                                </select>
                            </option> */}
                        </select>
                    </li>
                    <li>O сервисе</li>
                    <Link to="/blog">
                        <li>Блог</li>
                    </Link>
                    <li>
                        <select name="" id="">
                            <option value="" selected disabled>Помощь клиентам</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-8">
                <img src={likeIcon} alt="like" className="w-[40px] h-[40px] bg-contain p-3 bg-zinc-200 rounded-3xl" />
                <Link to="/form">
                    <button className="px-6 py-2 bg-zinc-200 rounded-3xl">Войти</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
