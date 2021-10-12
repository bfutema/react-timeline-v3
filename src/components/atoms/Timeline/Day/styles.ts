import styled, { css } from 'styled-components';

const containerVariations = {
  normal: css`
    background: #232b47;
  `,
  weekend: css`
    background: #29385c;
  `,
};

interface IContainerProps {
  itsWeekend: boolean;
}

export const Container = styled.div<IContainerProps>`
  ${({ itsWeekend }) => css`
    width: 47px;
    min-width: 47px;
    height: 47px;
    min-height: 47px;

    outline: 1px solid #0a192f;

    position: relative;

    cursor: pointer;

    user-select: none;

    transition: filter 200ms;

    &:hover {
      filter: brightness(0.9);
    }

    ${itsWeekend ? containerVariations.weekend : containerVariations.normal}
  `}
`;
