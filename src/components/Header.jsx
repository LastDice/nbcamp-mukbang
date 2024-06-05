import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 120px;
    margin-bottom: 30px;

    .header-divider {
        border-bottom: 1px solid #444444;
        margin: 30px 0px;
    }
`;

function Header({ onSearch }) {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleMyPageClick = () => {
        navigate('/mypage');
    };

    const handleProfileEditClick = () => {
        navigate('/mypage');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleMukbangClick = () => {
        navigate('/');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <HeaderWrapper>
            <div className="navbar bg-base-100 shadow">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl" onClick={handleMukbangClick}>
                        MUKBANG
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <form onSubmit={handleSearchSubmit}>
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="오늘의 먹방은?"
                                className="input input-bordered w-24 md:w-auto"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </form>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between" onClick={handleMyPageClick}>
                                    마이페이지
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a onClick={handleLoginClick}>로그인</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-divider"></div>
        </HeaderWrapper>
    );
}

export default Header;
