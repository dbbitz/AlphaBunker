import { styled } from '@stitches/react';

interface PropTypes {
    label: string;
    category: 'primary' | 'secondary' | 'cancel';
    className?: string;             
}
export const Button = ({label, category, className}:PropTypes) => {
    if(category == 'primary'){
        return (
            <button className={`${className} bg-btn-primary-base flex flex-row justify-center items-center p-2.5 gap-2.5 rounded text-white font-medium leading-6 text-sm`}>{label}</button>

        )
    }
    return (
        <button className={className}>{label}</button>
    )
}