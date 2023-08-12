import { theme } from './../../styles/theme';
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5.625rem;

  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0px 4px 4px 0px rgba(12, 12, 12, 0.41);

  padding: 0 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;


`;

export const HeaderLogo = styled.img`
  width: 5rem;
  height: 5rem;
  transition: all 0.3s ease-in-out;
`;


export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderListItem = styled.div`
  margin: 0 1.25rem;

  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderItem = styled.p`
  font-size: 1rem;
  color: ${(props)=>props.theme.colors.text_gray};
`;

export const HeaderIconWrapper = styled.div`
  width: 1.875rem;
  height: 1.875rem;
`;
