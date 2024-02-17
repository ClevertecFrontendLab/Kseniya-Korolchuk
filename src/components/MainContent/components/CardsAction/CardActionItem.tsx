import { Button, Card } from 'antd';
import { ReactNode } from 'react';
import styles from './CardsAction.module.css';

export const CardActionItem = ({
    item,
}: {
    item: { title: string; icon: ReactNode; body: string };
}) => {
    const { title, icon, body } = item;
    return (
        <Card
            title={title}
            bordered={false}
            className={styles['card_action']}
            headStyle={{

            }}
        >
            <Button type='text' icon={icon} className={styles['card_button']}>
                {body}
            </Button>
        </Card>
    );
};
