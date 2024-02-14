import { AndroidFilled, AppleFilled } from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import styles from "./CardDownload.module.css";

export const CardDownload: React.FC = () => (
    <Card
        className={styles['card_download']}
        title='Скачать на телефон'
        extra='Доступно в PRO-тарифе'
        bordered={false}
        headStyle={{
            padding: '10px 22px',
            color: ' #2f54eb',
            fontWeight: 400,
            lineHeight: '130%',
        }}
        bodyStyle={{ padding: '12px 0' }}
    >
        <Space size={3} className={styles['card_btns-wrapper']}>
            <Button type='text' icon={<AndroidFilled />}>Android OS</Button>
            <Button type='text' icon={<AppleFilled />} >Apple iOS</Button>
        </Space>
    </Card>
);
