interface ILogoProps {
    collapsed: boolean;
}

const logoCollapsed = './assets/images/logoCollapsed.png';
const logoDefault = './assets/images/logoDefault.png';

export const Logo = (props: ILogoProps) => {
    const { collapsed } = props;
    return <img src={collapsed ? logoCollapsed : logoDefault} alt='logo' id='logo' />;
};
