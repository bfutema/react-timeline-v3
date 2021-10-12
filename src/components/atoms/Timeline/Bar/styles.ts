import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  /* width: 235px; */
  min-width: 47px;
  height: 28px;

  border-radius: 6px;
  border: 2px solid #5ce9e2;
  background: ${darken(0.2, '#5CE9E2')};

  position: absolute;
  top: 23.5px;
  transform: translateY(-14px);

  cursor: pointer;

  transition: border, background 200ms;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border: 2px solid ${lighten(0.2, '#5CE9E2')};
    background: #5ce9e2;
  }
`;

export const Interaction = styled.div`
  width: 12px;
  height: 28px;

  position: relative;

  cursor: e-resize;

  display: flex;
  align-items: center;

  &:hover {
    &::after {
      opacity: 1;
    }
  }

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
  &::after {
    left: 3px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
`;

export const RightInteraction = styled(Interaction)`
  &::after {
    right: 3px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
`;
