import { styled } from '@stitches/react';

interface PropTypes {
    label: string;
    category: 'primary' | 'secondary' | 'cancel';
    className?: string;             
}
export const Button = ({label, category, className}:PropTypes) => {
    return (
        <button></button>
    )
}