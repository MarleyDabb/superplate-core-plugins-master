import React from 'react';
import {Button as ButtonBase, ButtonProps} from "@material-ui/core";

export type IButton = ButtonProps;

export const Button: React.FC<IButton> = ({ ...rest }) => {
    return <ButtonBase {...rest}>Hello World</ButtonBase>;
};
