import { CARD_ACTION_ITEMS } from "@constants/CardActionItems"
import { CardActionItem } from "./CardActionItem"
import { Row } from "antd"

export const CardsAction = () => (

    <Row>
        {CARD_ACTION_ITEMS.map((item) => (
            <CardActionItem item={item} key={item.key}/>
        ))}
    </Row>

)
