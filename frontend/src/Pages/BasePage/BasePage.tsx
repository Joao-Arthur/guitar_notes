import React, { ReactChild } from 'react';
import {
    Header,
    HeaderTitle,
    ContentContainer,
    ChildrenContainer,
    Footer
} from './BasePage.styles';
import Sidebar from '../../Components/Sidebar';

interface props {
    children: ReactChild;
}

export default ({ children }: props) => (
    <>
        <Header>
            <HeaderTitle>título</HeaderTitle>
            <h3>sign in</h3> <h3>sign up</h3>
        </Header>
        <ContentContainer>
            <Sidebar />
            <ChildrenContainer>{children}</ChildrenContainer>
        </ContentContainer>
        <Footer>muito shoow</Footer>
    </>
);
