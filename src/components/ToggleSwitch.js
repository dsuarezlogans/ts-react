import React from 'react';
import styled from 'styled-components';

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 15px;
  input {
    display: none;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #7D7D7D;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 16px;
  &:before{
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 1px;
    bottom: 1px;
    background-color: white;
    -webkit-transition: .2s;
    transition: .2s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  &:checked + span {
    background-color: #7D7D7D;
  }

  &:focus + span {
    box-shadow: 0 0 1px #7D7D7D;
  }

  &:checked + span:before {
    -webkit-transform: translateX(15px);
    -ms-transform: translateX(15px);
    transform: translateX(15px);
  }
`;

const ToggleSwitch = ({className}) => (
  <Switch className={className}>
    <Input type="checkbox"/>
    <Slider/>
  </Switch>
);

export default ToggleSwitch;