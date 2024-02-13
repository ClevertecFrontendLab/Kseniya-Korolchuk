import { Button } from "antd";
import { ReactNode } from "react";
import { ExitIcon } from "../CustomIcon/ExitIcon";
import styles from "./MenuButton.module.css";

type IMenuButtonProps = {
    children?: ReactNode;
};

export const MenuButton = ({ children }: IMenuButtonProps) =>
(
    <Button
        block
        type={'text'}
        size={'large'}
        icon={<ExitIcon className={'icon'} />}
        className={styles['menu_button']}>
        {children}
    </Button>
);
