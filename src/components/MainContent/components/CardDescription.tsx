import { Card } from "antd";
import { Typography } from 'antd';
const { Title } = Typography;

export const CardDescription: React.FC = () => (
    <Card>
        <Title level={3}>
            CleverFit&nbsp;— это не&nbsp;просто приложение, a&nbsp;твой личный помощник в&nbsp;мире фитнеса. He&nbsp;откладывай на&nbsp;завтра&nbsp;— начни тренироваться уже сегодня!
        </Title>
    </Card>
);
