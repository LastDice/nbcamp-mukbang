<<<<<<< HEAD
import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
=======
>>>>>>> eddbd90cd7b2a85e8ec7d2f374b69b02d040a95d
import styled from 'styled-components';

const Main = styled.div`
    /* width: 1500px; */
`;

function MainPage() {
    return (
        <>
            <Main>
                <Header />
                <NavBar />
                <MainContent />
            </Main>
        </>
    );
}

export default MainPage;
