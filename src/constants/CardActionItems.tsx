import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';

export const CARD_ACTION_ITEMS = [
    {
        key: 'workout',
        title: 'Расписать тренировки',
        icon: <HeartFilled style={{ color: '#2f54eb' }} />,
        body: 'Тренировки',
    },
    {
        key: 'calendar',
        title: 'Назначить календарь',
        icon: <CalendarTwoTone twoToneColor={['#2f54eb', '#2f54eb']} />,
        body: 'Календарь',
    },
    {
        key: 'profile',
        title: 'Заполнить профиль',
        icon: <IdcardOutlined style={{ color: '#2f54eb' }} />,
        body: 'Профиль',
    },
];
