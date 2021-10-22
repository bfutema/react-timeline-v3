import styled, { css } from 'styled-components';

interface IContainerProps {
  asideWidth?: number;
}

export const Container = styled.div<IContainerProps>`
  ${({ asideWidth = 300 }) => css`
    width: 100%;

    position: fixed;
    top: 220px;
    right: 0;
    bottom: 0;

    display: grid;
    grid-template-columns: ${asideWidth}px 1fr;

    @media (max-width: 360px) {
      grid-template-columns: 180px 1fr;
    }
  `}
`;

export const Users = styled.div`
  box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.2);

  overflow: scroll;

  display: flex;
  flex-direction: column;

  z-index: 2;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const ViewportData = styled.div`
  width: 100%;

  overflow: scroll;

  display: flex;
  flex-direction: column;

  z-index: 1;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const HeaderContainer = styled.div<IContainerProps>`
  ${({ asideWidth = 300 }) => css`
    width: 100%;

    position: absolute;
    top: -56px;

    display: grid;
    grid-template-columns: ${asideWidth}px 1fr;

    z-index: 3;
  `}
`;

export const HeaderItems = styled.div`
  box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  z-index: 2;
`;

export const HeaderViewportData = styled.div`
  width: 100%;

  padding-left: 1px;

  overflow: scroll;

  display: flex;

  z-index: 1;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const HeaderDay = styled.div`
  width: 47px;
  min-width: 47px;
  height: 55px;
  min-height: 55px;

  outline: 1px solid #223453;
  background: #6c87bf;

  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 18px;
  }
`;
