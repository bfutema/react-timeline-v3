import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  z-index: 10;

  @media (max-width: 360px) {
    width: 180px;
  }
`;

interface IItemProps {
  type: 'project' | 'user' | 'header';
}

const itemVariations = {
  header: css`
    height: 55px;

    > div {
      padding: 8px 8px 8px 24px;

      strong {
        font-size: 18px;
        font-weight: bold;
        text-transform: capitalize;
      }
    }
  `,
  project: css`
    > div {
      padding: 8px 24px;

      gap: 2px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      span {
        color: #92abd8;
        font-size: 12px;
        font-weight: normal;
      }
    }
  `,
  user: css`
    > div {
      padding: 8px 24px 8px 48px;
    }
  `,
};

export const Item = styled.div<IItemProps>`
  ${({ type }) => css`
    height: 47px;

    box-shadow: 6px 0 0 0 rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      width: 100%;
      height: 100%;

      outline: 1px solid #0a192f;
      background: #292f4d;

      display: flex;
      align-items: center;
      justify-content: space-between;

      cursor: pointer;

      user-select: none;

      transition: filter 200ms;

      &:hover {
        filter: brightness(0.9);
      }

      strong {
        color: #ffffff;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: 500;
      }
    }

    ${itemVariations[type]}
  `}
`;

interface IColorPickerProps {
  color: string;
}

export const ColorPicker = styled.div<IColorPickerProps>`
  ${({ color }) => css`
    width: 22px;
    height: 22px;

    border-radius: 2px;
    border: 1px solid #0a192f;
    background: ${color};

    transition: filter 200ms;

    &:hover {
      filter: brightness(1.4);
    }
  `}
`;

export const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    padding: 0 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      color: #ffffff;
      font-size: 14px;
      font-weight: normal;
    }
  }
`;
