import { CARD_ACTION_ITEMS } from "@constants/CardActionItems"
import { CardActionItem } from "./CardActionItem"
import { Col, Row } from "antd"

export const CardsAction = () => (

    <Row gutter={[16, 5]} style={{marginTop: 16}}>
        {CARD_ACTION_ITEMS.map((item) => (
            <Col xs={{ span: 24 }} sm={{ span: 8 }} key={item.key}>
                <CardActionItem item={item}  />
            </Col>
        ))}
    </Row>

)
