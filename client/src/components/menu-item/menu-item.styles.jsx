import styled from "styled-components";

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${({size}) => size ? '300px': '240px'};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;
    .background-image {
      transition: transform 5s cubic-bezier(0.075, 0.82, 0.165, 1);
      transform: scale(1.1);
    }
    .content {
      opacity: .9;
    }
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;