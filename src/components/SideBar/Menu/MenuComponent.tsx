import { MENU_ITEMS } from '@constants/menuItems';
import { Menu } from 'antd'


export const MenuComponent = () => {

  return (
    <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={ MENU_ITEMS }
    />
  )
}
