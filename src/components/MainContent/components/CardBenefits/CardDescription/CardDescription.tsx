import { Card } from "antd";
import { Typography } from 'antd';
import styles from "./CardDescription.module.css";

const { Title } = Typography;

export const CardDescription: React.FC = () => (
    <Card className={styles['card_description']}>
        <Title level={4}>
            CleverFit&nbsp;— это не&nbsp;просто приложение, a&nbsp;твой личный помощник в&nbsp;мире фитнеса. He&nbsp;откладывай на&nbsp;завтра&nbsp;— начни тренироваться уже сегодня!
        </Title>
    </Card>
);
