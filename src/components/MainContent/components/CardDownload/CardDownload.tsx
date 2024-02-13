import { AndroidFilled, AppleFilled } from "@ant-design/icons";
import { Button, Card, Space } from "antd";

export const CardDownload: React.FC = () => (
    <Card
    title='Скачать на телефон'
    extra='Доступно в PRO-тарифе'
    bordered={false}
    >
         <Space >
            <Button type='text' icon={<AndroidFilled />}>Android OS</Button>
            <Button type='text' icon={<AppleFilled />} >Apple iOS</Button>
        </Space>
    </Card>
);
