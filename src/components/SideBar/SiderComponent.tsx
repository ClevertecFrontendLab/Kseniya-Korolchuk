import { useState } from "react";
import { Logo } from "./Logo/Logo";
import { MenuComponent } from "./Menu/MenuComponent";
import { Divider, Layout } from "antd";
import { MenuButton } from "./MenuButton/MenuButton";
import styles from "./SiderComponent.module.css";
import { SIDER_WIDTH } from "@constants/sliderWidths";
import { Trigger } from "./Trigger/Trigger";

const { Sider, Footer } = Layout;


export const SiderComponent = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider
            theme='light'
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={SIDER_WIDTH.DESKTOP}
            collapsedWidth={SIDER_WIDTH.DESKTOP_COLLAPSED}
            className={styles['sider']}
        >
            <Logo
                collapsed={collapsed}
            />
            <MenuComponent />
            <Trigger
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />
            <Footer
                className={styles['sider_footer']}
            >
                <Divider className={styles['sider_divider']} />
                <MenuButton>
                    {collapsed ? '' : 'Выход'}
                </MenuButton>
            </Footer>
        </Sider>
    );
}
