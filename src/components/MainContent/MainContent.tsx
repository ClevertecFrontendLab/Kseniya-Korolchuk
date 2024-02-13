import { Button, Col, Layout, Row } from "antd";
import { CardBenefits } from "./components/CardBenefits";
import { CardsAction } from "./components/CardsAction/CardsAction";
import { CardDescription } from "./components/CardDescription";
import { CardDownload } from "./components/CardDownload/CardDownload";
import styles from "./MainContent.module.css";
const { Content } = Layout;


export const MainContent = () => (
    <Content
        className={styles['main_content']}
        style={{
            padding: 24,
            maxWidth: 752,
        }}
    >
        <CardBenefits />
        <CardDescription />
        <CardsAction />
        <Content>
            <Row>
                <Col>
                    <Button type="link" size={"large"}>
                        Смотреть отзывы
                    </Button>
                </Col>
                <Col>
                    <CardDownload />
                </Col>
            </Row>
        </Content>
    </Content>
);
