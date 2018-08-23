import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import downArrow from '../assets/images/down-arrow.svg';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.span`
  display: inline-block;
  color: #7A7A7A;
  font-size: ${props => `${props.fontSize || 14}px`};
  line-height: ${props => `${props.height || 50}px`};
  cursor: pointer;
  &:after{
    content: '';
    width: 8px;
    height: ${props => `${props.height || 50}px`};
    float: right;
    margin-left: 5px;
    background-image: url(${downArrow});
    background-size: 7px 4px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const DropdownContent = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
  display: ${props => props.opened ? 'block' : 'none'};
  min-width: 70px;
  padding: 5px 0;
  background-color: white;
  border: 1px solid #d6d6d6;
  border-radius: 3px;
  box-shadow: 2px 2px 2px -1px #ccc;
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 6px 20px;
  line-height: 10px;
  color: #444;
  text-align: center;
  overflow: hidden;
  background-color: ${props => props.active ? '#f2f2f2' : 'white'};
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  } 
`;

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggle = () => this.setState(prevState => ({opened: !prevState.opened}))

  handleOptionClick = option => {
    this.props.onOptionClick(option);
    this.setState({opened: false});
  } 

  handleClickOutside = event => {
    const ref = this.dropdownRef.current; 
    if(ref && !ref.contains(event.target)){
      this.setState({opened: false});
    }
  }

  render(){
    const { options, title, buttonHeight, buttonFontSize } = this.props;
    return (
      <DropdownContainer innerRef={this.dropdownRef}>
        <DropdownButton 
          onClick={this.toggle} 
          height={buttonHeight}
          fontSize={buttonFontSize}
        >
          {title}
        </DropdownButton>
        <DropdownContent opened={this.state.opened}>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={this.handleOptionClick.bind(this, option)}>
              {option.text}
            </DropdownItem>
          ))}
        </DropdownContent>
      </DropdownContainer>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  onOptionClick: PropTypes.func,
  buttonHeight: PropTypes.number,
  buttonFontSize: PropTypes.number,
};

export default Dropdown;