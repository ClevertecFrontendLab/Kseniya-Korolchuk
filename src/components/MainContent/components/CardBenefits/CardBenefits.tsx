import { Card } from "antd";
import styles from "./CardBenefits.module.css";

export const CardBenefits: React.FC = () => (
    <Card className={styles['card_benefits']}>
        <p>С&nbsp;CleverFit ты&nbsp;сможешь:</p>
        <p>— планировать свои тренировки на&nbsp;календаре, выбирая тип и&nbsp;уровень нагрузки;</p>
        <p>— отслеживать свои достижения в&nbsp;разделе статистики, сравнивая свои результаты с&nbsp;нормами и&nbsp;рекордами;</p>
        <p>— создавать свой профиль, где ты&nbsp;можешь загружать свои фото, видео и&nbsp;отзывы о&nbsp;тренировках;</p>
        <p>— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и&nbsp;советам профессиональных тренеров.</p>
    </Card>
  );