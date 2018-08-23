import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import _ from 'lodash';

import Dropdown from '../components/Dropdown';
import ToggleSwitch from '../components/ToggleSwitch';
import leftArrow from '../assets/images/left-arrow.svg';
import rightArrow from '../assets/images/right-arrow.svg';
import toDo from '../assets/images/to-do.svg';
import { months } from '../utils/time';
import { center, rightBorder } from '../utils/styleUtils';

const ControlBarContainer = styled.div`
  padding: 0 35px;
  height: 40px;
  * {
    font-size: 14px;
    color: #7A7A7A;
  }
`;

const ControlBarButton = styled.div`
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  display: inline-block;
  line-height: 40px;
  height: 100%;
`;

const ScrollButtonsContainer = styled.div`
  position: relative;
  top: -2px;
  margin: 0 15px;
`;

const ScrollButton = styled.div`
  width: 35px;
  height: 40px;
  display: inline-block;
  vertical-align: middle;
  position: relative;

  &:first-child:after{
    ${rightBorder(1, '#E2E2E2')}
  }
`;

const Icon = styled.img`
  width: 13px;
  height: 13px;
  ${center()}
`;

const MonthsList = styled.div`
  margin: 0 15px;
`;

const MonthItem = ControlBarButton.extend`
  margin: 0 8px;
  font-size: 13px;
  font-weight: normal;
  &:hover {
    font-weight: bold;
  }
`;

const Navbar = styled.div`
  float: ${props => props.direction};
  > * {
    display: inline-block;
  }
`;

const ZoomSwitch = styled.div`
  margin: 0 5px;
  position: relative;
  top: -2px;
  
  * {
    vertical-align: middle;
  }
`;

class ControlBar extends Component {
  constructor(props){
    super(props);
    
    const currentYear = moment().year();
    const yearsRangeLength = 14;
    const yearsRange = _.range(currentYear - yearsRangeLength/2, currentYear + yearsRangeLength/2 + 1);
    this.yearDropdownItems = yearsRange.map(year => ({ text: year.toString(), value: year }));

    this.colorDropdownItems = [
      {text: 'Color by Project', value: 'project' },
      {text: 'Color by Client', value: 'client'},
      {text: 'Color by Booker', value: 'booker'},
    ];

    this.state = {
      selectedYear: currentYear,
      selectedMonth: moment().month(),
      selectedColor: this.colorDropdownItems[0]
    };
  }

  render(){
    return (
      <ControlBarContainer>
        <Navbar direction="left">
          <ControlBarButton active>Today</ControlBarButton>

          <ScrollButtonsContainer>
            <ScrollButton>
              <Icon src={leftArrow}/>
            </ScrollButton>
            <ScrollButton>
              <Icon src={rightArrow}/>
            </ScrollButton>
          </ScrollButtonsContainer>

          <Dropdown 
            options={this.yearDropdownItems}
            onOptionClick={({value}) => this.setState({selectedYear: value})}
            title={this.state.selectedYear.toString()}
            buttonFontSize={14}
            buttonHeight={40}
          />

          <MonthsList>
            {months.map(month =>
              <MonthItem key={month.value}>{month.text}</MonthItem>
            )}
          </MonthsList>
        </Navbar>

        <Navbar direction="right">
          <ZoomSwitch>
            <ControlBarButton>-</ControlBarButton>
            <ToggleSwitch/>
            <ControlBarButton>+</ControlBarButton>
          </ZoomSwitch>

          <ScrollButton>
            <Icon src={toDo}/>
          </ScrollButton>

          <Dropdown 
            options={this.colorDropdownItems}
            onOptionClick={color => this.setState({selectedColor: color})}
            title={this.state.selectedColor.text}
            buttonFontSize={14}
            buttonHeight={40}
          />
        </Navbar>
      </ControlBarContainer>
    );
  }
}

export default ControlBar;
