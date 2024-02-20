import React from 'react';

import { HeaderComponent } from '@components/Header/Header';
import { Layout } from 'antd';
import { SiderComponent } from '@components/SideBar/SiderComponent';
import { MainContent } from '@components/MainContent/MainContent';
import styles from './MainPage.module.css';

export const MainPage: React.FC = () => (
    <Layout className={styles['container']}>
        <SiderComponent />
        <Layout style={{ background: 'transparent' }}>
            <HeaderComponent />
            <MainContent />
        </Layout>
    </Layout>
);
