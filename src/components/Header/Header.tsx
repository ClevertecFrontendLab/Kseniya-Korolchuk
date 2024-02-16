import { Button, Breadcrumb, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Header } from 'antd/lib/layout/layout';
import styles from './Header.module.css';

export const HeaderComponent = () => {
    return (
        <Header className={styles['header']}>
            <Breadcrumb className={styles['breadcrumb']}>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles['header_content']}>
                <Typography.Title className={styles['h1']}>
                    <span className={styles['h1_line']}>
                        Приветствуем тебя в&nbsp;
                        <span className={styles['h1_clever']}>CleverFit — </span>приложении,
                    </span>
                    <span className={styles['h1_line2']}>
                        которое поможет тебе добиться своей мечты!
                    </span>
                </Typography.Title>
                <Button
                    type='text'
                    icon={<SettingOutlined />}
                    className={styles['header_button']}
                    size='large'
                >
                    Настройки
                </Button>
            </div>
        </Header>
    );
};
