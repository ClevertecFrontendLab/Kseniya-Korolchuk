import { Button, Card } from 'antd';
import { ReactNode } from 'react';


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
        >
            <Button type='text' icon={icon} >
                {body}
            </Button>
        </Card>
    );
}
