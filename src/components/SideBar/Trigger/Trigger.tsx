import { Space } from 'antd';
import styles from './Trigger.module.css';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Dispatch } from 'react';

interface ITrigger {
    collapsed: boolean;
    setCollapsed: Dispatch<React.SetStateAction<boolean>>;
    isBreakpoint: boolean;
}

export const Trigger = (props: ITrigger) => {
    const { collapsed, setCollapsed, isBreakpoint } = props;
    const switchTrigger = () => setCollapsed(!collapsed);

    return (
        <Space
            className={styles['trigger']}
            data-test-id={isBreakpoint ? 'sider-switch-mobile' : 'sider-switch'}
        >
            {collapsed ? (
                <MenuUnfoldOutlined onClick={switchTrigger} />
            ) : (
                <MenuFoldOutlined onClick={switchTrigger} />
            )}
        </Space>
    );
};
