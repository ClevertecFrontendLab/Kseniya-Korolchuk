import { Button } from "antd";
import { ReactNode } from "react";
import { ExitIcon } from "../CustomIcon/ExitIcon";

type IMenuButtonProps = {
    children?: ReactNode;
};

export const MenuButton = ({ children }: IMenuButtonProps) =>
    (
        <Button
            block
            style={{position: 'absolute', textAlign: 'start'}}
            type={'text'}
            size={'large'}
            icon={<ExitIcon className={'icon'}/>}
        >
            {children}
        </Button>
    );
