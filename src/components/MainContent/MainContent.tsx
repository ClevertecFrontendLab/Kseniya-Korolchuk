import { Button, Layout } from 'antd';
import { CardBenefits } from './components/CardBenefits/CardBenefits';
import { CardsAction } from './components/CardsAction/CardsAction';
import { CardDescription } from './components/CardDescription/CardDescription';
import { CardDownload } from './components/CardDownload/CardDownload';
import styles from './MainContent.module.css';
const { Content } = Layout;

export const MainContent = () => (
    <Content className={styles['main_content']}>
        <div className={styles['main_container']}>
            <CardBenefits />
            <CardDescription />
            <CardsAction />
        </div>
        <div className={styles['main_footer']}>
            <Button className={styles['footer_button']} type='link' size={'large'}>
                Смотреть отзывы
            </Button>
            <CardDownload />
        </div>
    </Content>
);
