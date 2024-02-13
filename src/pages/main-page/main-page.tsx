import React from 'react';

import './main-page.css';
import { HeaderComponent } from '@components/Header/Header';
import { Layout } from 'antd';
import { SiderComponent } from '@components/SideBar/SiderComponent';
import { MainContent } from '@components/MainContent/MainContent';

const theme = 'LIGHT';
const { Footer } = Layout;

export const MainPage: React.FC = () => {

    return (
        <Layout className='page-container'>
            <SiderComponent theme={theme}></SiderComponent>
            <Layout className="site-layout" style={{background: "transparent"}}>
                <HeaderComponent theme={theme}></HeaderComponent>
                <MainContent></MainContent>
                <Footer></Footer>
            </Layout>
        </Layout>
    );
};
