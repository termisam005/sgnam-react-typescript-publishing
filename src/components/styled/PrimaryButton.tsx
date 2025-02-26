import styled from "styled-components";


interface Props{
    txt?: string;
    className?: string;
}

const PrimaryBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    overflow: hidden;
    padding: 0.125rem 0.75rem 0;
    border-radius: 0.125rem;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.871);
    background: #024294;
    box-shadow: inset 0 0 0.625rem #0476FF;

    &:hover,&.selected {
        background: #0155BD;
        box-shadow: inset 0 0 0.75rem rgba(39, 212, 255, 0.5);
    }
`;


const PrimaryButton = ({ txt, className }:Props) => {

    return (
        <PrimaryBtn className={className}>
            {txt}
        </PrimaryBtn>
    );
};

export default PrimaryButton;
