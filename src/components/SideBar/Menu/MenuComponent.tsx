import { MENU_ITEMS } from '@constants/menuItems';
import { Menu } from 'antd'
import styles from "./MenuComponent.module.css";

export const MenuComponent = () => {

    return (
        <Menu
            mode="inline"
            items={MENU_ITEMS}
            inlineIndent={17}
            className={styles['sider_menu']}
        />
    )
}
