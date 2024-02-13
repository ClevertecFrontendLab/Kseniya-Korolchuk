import { Space } from "antd";
import styles from "./Trigger.module.css";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Dispatch } from "react";

interface ITrigger {
    collapsed: boolean;
    setCollapsed: Dispatch<React.SetStateAction<boolean>>;
}

export const Trigger = (props: ITrigger) => {
    const { collapsed, setCollapsed } = props;
    const switchTrigger = () => setCollapsed(!collapsed);

    return (
        <Space className={styles['trigger']}>
            {collapsed ? <MenuUnfoldOutlined onClick={switchTrigger} /> : <MenuFoldOutlined onClick={switchTrigger} />}
        </Space>
    );
}
