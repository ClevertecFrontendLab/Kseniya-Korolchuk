import { CalendarTwoTone, HeartTwoTone, IdcardTwoTone } from '@ant-design/icons';

export const CARD_ACTION_ITEMS = [
    {
        key: 'workout',
        title: ' Расписать тренировки',
        icon: <HeartTwoTone />,
        body: 'Тренировки',
    },
    {
        key: 'calendar',
        title: 'Назначить календарь',
        icon: <CalendarTwoTone />,
        body: 'Календарь',
    },
    {
        key: 'profile',
        title: 'Заполнить профиль',
        icon: <IdcardTwoTone />,
        body: 'Профиль',
    },
];
