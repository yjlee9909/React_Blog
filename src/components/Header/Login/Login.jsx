import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            {/* 로그인 */}
            <li className="profile-img">
                <Link to="/">
                    <img src="https://cdn.pixabay.com/photo/2022/11/17/14/00/astrology-7598174_960_720.png" alt="My Page" />
                </Link>
            </li>
            <li>
                <Link to="/" className="button">
                    <img src="./assets/icon-modify-white.svg" alt="" />
                    <span>Write</span>
                </Link>
            </li>
            <li>
                <button className="button white">
                    <img src="./assets/icon-logout.svg" alt="" />
                    <span>Logout</span>
                </button>
            </li>
            {/* //로그인 */}
        </>
    );
}
