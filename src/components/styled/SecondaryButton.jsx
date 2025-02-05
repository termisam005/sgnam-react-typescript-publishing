import React from 'react';
import styled from "styled-components";


const SecondaryBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    overflow: hidden;
    padding: 0.125rem 0.75rem 0;
    border-radius: 0.125rem;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.871);
    background: rgba(255, 255, 255, 0.122);

    &:hover,&.selected {
        background: rgba(255, 255, 255, 0.16);
    }
`;


const SecondaryButton = ({ className, onClick, txt }) => {

    return (
        <SecondaryBtn className={className} onClick={onClick}>
            {txt}
        </SecondaryBtn>
    );
};

export default SecondaryButton;
