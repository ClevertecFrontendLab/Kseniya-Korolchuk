import { Login } from '@components/Auth/Login/Login';
import styles from './LayoutAuthPage.module.css';

import { Space, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Registration } from '@components/Auth/Registration/Registration';

const items: TabsProps['items'] = [
    {
        key: 'login',
        label: 'Вход',
        children: <Login />,
    },
    {
        key: 'registration',
        label: 'Регистрация',
        children: <Registration />,
    },
];

export const LayoutAuthPage = () => {
    return (
        <Space className={styles['auth_wrapper']}>
            <Space className={styles['auth_blur']}>
                <Space.Compact direction='vertical' className={styles['auth_form-container']}>
                    <div className={styles['logo']}></div>
                    <Tabs defaultActiveKey='1' items={items} style={{ width: '100%' }}></Tabs>
                </Space.Compact>
            </Space>
        </Space>
    );
};
