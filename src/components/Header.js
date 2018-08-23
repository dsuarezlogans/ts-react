import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

import downArrow from '../assets/images/down-arrow.svg';
import defaultAvatar from '../assets/images/default-avatar.png';

const StyledHeader = styled.div`
  height: 50px;
  min-width: 990px;
  background-color: #A9D43E;
`;

const Main = styled.div`
  padding: 0 20px;
`;

const LeftMenu = styled.ul`
  height: 100%;
  float: left;
  margin: 0;
`;

const RightMenu = styled.ul`
  height: 100%;
  float: right;
  padding-right: 14px;
  margin: 0;
`;

const MenuItem = styled.li`
  display: inline-block;
  height: 100%;
  padding: 0 14px;
  color: #4D6610;
  font-size: 14px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  line-height: 50px;
  cursor: pointer;
`;

const ItemLink = styled(Link)`
  display: block;
  color: #4D6610;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  text-decoration: none;
  outline: none;
`;

const Dropwdown = styled.span`
  display: inline-block;
  &:after{
    content: '';
    width: 8px;
    height: 50px;
    float: right;
    margin-left: 5px;
    background-image: url(${downArrow});
    background-size: 7px 4px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  vertical-align: middle;
  border-radius: 50%;
`;

const Header = () => (
  <StyledHeader>
    <Main>
      <LeftMenu>
        <MenuItem>
          <ItemLink to="/dashboard">Dashboard</ItemLink>
        </MenuItem>

        <MenuItem>
          <ItemLink to="/schedule" active>Schedule</ItemLink>
        </MenuItem>

        <MenuItem>
          <ItemLink to="/resources">Resources</ItemLink>
        </MenuItem>
      </LeftMenu>

      <RightMenu>
        <MenuItem>
          <Dropwdown>Giancarlo Guzman</Dropwdown>
        </MenuItem>
        <MenuItem>
          <Avatar src={defaultAvatar}/>
        </MenuItem>
      </RightMenu>
    </Main>
  </StyledHeader>
);

export default Header;