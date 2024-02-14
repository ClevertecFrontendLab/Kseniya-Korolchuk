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
    const [isBreakpoint, setBreakpoint] = useState(false);
    const handleBreakpoint = (breakPoint: boolean) => setBreakpoint(breakPoint);

    return (
        <Sider
            theme='light'
            trigger={null}
            collapsible
            breakpoint='xs'
            onBreakpoint={handleBreakpoint}
            collapsed={collapsed}
            width={!isBreakpoint ? SIDER_WIDTH.DESKTOP : SIDER_WIDTH.MOBILE}
            collapsedWidth={!isBreakpoint ? SIDER_WIDTH.DESKTOP_COLLAPSED : SIDER_WIDTH.MOBILE__COLLAPSED}
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
