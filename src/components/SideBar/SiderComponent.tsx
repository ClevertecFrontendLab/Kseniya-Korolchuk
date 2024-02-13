import React, { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Logo } from "./Logo/Logo";
import { MenuComponent } from "./Menu/MenuComponent";
import { Layout } from "antd";
import { MenuButton } from "./MenuButton/MenuButton";

const { Sider } = Layout;


interface ISiderProps {
    theme: 'LIGHT' | 'DARK';
}

export const SiderComponent = (props: ISiderProps) => {
const { theme } = props;
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}
        className={theme === 'LIGHT' ? "ant-layout-sider-light" : "ant-layout-sider-dark"}
        >
            <Logo collapsed={collapsed}></Logo>
            <MenuComponent collapsed={collapsed}></MenuComponent>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                id: "trigger",
                onClick: () => setCollapsed(!collapsed),
            })}
            <MenuButton>
                {collapsed ? '' : 'Выход'}
            </MenuButton>
        </Sider>
    );
}
