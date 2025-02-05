import React, { useState } from 'react';
import styled from "styled-components";


const SelectBox = styled.div`
    position: relative;
    width: 10rem;
    height:28px;
    padding:0px 8px;
    border-radius: 0.125rem;
    background-color: #282931;
    align-self: center;
    cursor: pointer;
    &::before {
      content: "⌵";
      position: absolute;
      top: 1px;
      right: 8px;
      color: #49c181;
      font-size: 20px;
    }
`;
const Label = styled.label`
    font-size: 14px;
    margin-left: 4px;
    text-align: center;
`;
const SelectOptions = styled.ul`
    position: absolute;
    list-style: none;
    top: 32px;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: 90px;
    max-height: ${(props) => (props.show ? "none" : "0")};
    padding: 0;
    border-radius: 8px;
    background-color: #222222;
    color: #fefefe;
`;
const Option = styled.li`
    font-size: 14px;
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;
    &:hover {
      background-color: #595959;
    }
`;


const StyledSelect = () => {

    const [currentValue, setCurrentValue] = useState("1학년");
    const [showOptions, setShowOptions] = useState(false);

    const handleOnChangeSelectValue = (e) => {
      const { innerText } = e.target;
      setCurrentValue(innerText);
    };

    return (
      <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
        <Label>{currentValue}</Label>
        <SelectOptions show={showOptions}>
          <Option onClick={handleOnChangeSelectValue}>1학년</Option>
          <Option onClick={handleOnChangeSelectValue}>2학년</Option>
          <Option onClick={handleOnChangeSelectValue}>3학년</Option>
          <Option onClick={handleOnChangeSelectValue}>4학년</Option>
        </SelectOptions>
      </SelectBox>
    );
};

export default StyledSelect;
