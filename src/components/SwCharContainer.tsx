import { SwCharName } from '../sw_char_name';
import React from "react";
interface SwCharProps {
    name: string;
}

const SwCharContainer: React.FC<SwCharProps> = ({ name }) => {
    return (<h2>{name}</h2>);
};

export default SwCharContainer;