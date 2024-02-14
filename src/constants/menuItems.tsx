import { CalendarTwoTone, HeartFilled, TrophyFilled, IdcardOutlined } from "@ant-design/icons";

export const MENU_ITEMS = [
    {
        key: '1',
        icon: <CalendarTwoTone twoToneColor={["#061178", "#061178"]} />,
        label: 'Календарь',
    },
    {
        key: '2',
        icon: <HeartFilled style={{color: "#061178"}}/>,
        label: 'Тренировки',
    },
    {
        key: '3',
        icon: <TrophyFilled style={{color: "#061178"}}/>,
        label: 'Достижения',
    },
    {
        key: '4',
        icon: <IdcardOutlined style={{color: "#061178"}}/>,
        label: 'Профиль',
    },
];
