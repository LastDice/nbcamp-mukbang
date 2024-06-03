import React from 'react';
import styled from 'styled-components';

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

function Header() {
    return (
        <HeaderWrapper>
            <div className="navbar bg-base-100 shadow">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">MUKBANG</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="오늘의 먹방은?"
                            className="input input-bordered w-24 md:w-auto"
                        />
                    </div>
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
                                <a className="justify-between">
                                    마이페이지
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>프로필 수정</a>
                            </li>
                            <li>
                                <a>로그아웃</a>
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
