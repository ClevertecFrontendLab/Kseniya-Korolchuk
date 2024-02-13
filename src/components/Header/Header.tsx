import { Button, Breadcrumb, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import './Header.css';
import { Header } from 'antd/lib/layout/layout';

const { Title } = Typography;

interface IHeaderProps {
    theme: string;
}

export const HeaderComponent = (props: IHeaderProps) =>  {

    const { theme } = props;
    return (<Header className={theme === 'LIGHT' ? "ant-layout-sider-light" : "ant-layout-sider-dark"} style={{ padding: "16px 24px", height: "168px"}}>
        <Breadcrumb>
            <Breadcrumb.Item>Главная</Breadcrumb.Item>
        </Breadcrumb>
        <div className='header_content'>
            <Title>Приветствуем тебя в CleverFit — приложении, <br/> которое поможет тебе добиться своей мечты!</Title>
            <Button type="text"
            icon={<SettingOutlined />}
            className='header_button'
            >Настройки</Button>
        </div>
    </Header>);
}


