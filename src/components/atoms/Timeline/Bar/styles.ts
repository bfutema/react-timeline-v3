import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  ${({ color }) => css`
    min-width: 47px;
    height: 28px;

    border-radius: 6px;
    border: 2px solid ${lighten(0.1, color)};
    background: ${darken(0.05, color)};

    position: absolute;
    top: 23.5px;
    transform: translateY(-14px);

    cursor: pointer;

    transition: border, background 200ms;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      border: 2px solid ${lighten(0.2, color)};
      background: ${color};

      div {
        &::after {
          opacity: 1;
        }
      }
    }
  `}
`;

export const Interaction = styled.div`
  width: 14px;
  height: 28px;

  position: relative;

  cursor: e-resize;

  display: flex;
  align-items: center;

  &:after {
    content: '';

    width: 4px;
    height: 20px;

    background: white;

    position: absolute;

    opacity: 0;

    transition: opacity 200ms;
  }
`;

export const LeftInteraction = styled(Interaction)`
  margin-left: -2px;

  &::after {
    left: 3px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
`;

export const RightInteraction = styled(Interaction)`
  margin-right: -2px;

  &::after {
    right: 3px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
`;
