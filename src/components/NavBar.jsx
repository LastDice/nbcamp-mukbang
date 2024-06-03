import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .dropdown {
        margin-left: 15px;
    }

    .createbtn {
        margin-left: auto;
        margin-right: 15px;
    }
`;

function NavBar() {
    return (
        <NavBarWrapper>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    정렬
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a>최신순</a>
                    </li>
                    <li>
                        <a>찜 많은순</a>
                    </li>
                </ul>
            </div>
            <div className="createbtn">
                <button className="btn btn-warning">새 글 작성 +</button>
            </div>
        </NavBarWrapper>
    );
}

export default NavBar;
