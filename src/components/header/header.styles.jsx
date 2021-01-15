import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderStyles = css`
  position: sticky;
  top: 0;
  background-color: white;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  ${HeaderStyles}
`;

export const LogoContainer = styled(Link)`
  ${HeaderStyles}
`;

export const OptionsContainer = styled.div`
  height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pinter;
`;

export const ProfilePic = styled.img`
  width: 30px;
  border-radius: 50%;
`;