import React, { useState } from 'react';
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";


const LoadingSpinner = ({isLoading}) => {

    console.log(isLoading)
    let [color, setColor] = useState("#DE7127");

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `; 
    return (
        <div>
            <BounceLoader color={color} loading={isLoading} css={override} size={50} />
        </div>
    );
};

export default LoadingSpinner;