import React, {FC} from 'react';
import {css} from "@emotion/react";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <div>
        <h1 css={css`color: red`}>Hello React</h1>
    </div>;
}
