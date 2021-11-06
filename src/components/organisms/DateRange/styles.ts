import styled, { css } from 'styled-components';

interface IFeedbackProps {
  isErrored: boolean;
  isFilled: boolean;
  isFocused: boolean;
}

const feedbackVariations = {
  filled: css`
    outline-color: #ffffff;

    input {
      height: 80%;
    }

    svg {
      stroke: #00b1ff;
    }
  `,
  focused: css`
    outline-color: #00b1ff;
    box-shadow: 0px 6px 4px rgba(27, 32, 60, 0.8);

    input {
      height: 80%;
    }

    svg {
      stroke: #00b1ff;
    }
  `,
  errored: css`
    outline-color: #ff6c70;

    input {
      height: 80%;
    }

    svg {
      stroke: #ff6c70;
    }
  `,
};

type IContainerProps = IFeedbackProps;

export const Container = styled.div<IContainerProps>`
  ${({ isErrored, isFilled, isFocused }) => css`
    width: fit-content;
    min-width: 250px;
    height: 40px;
    min-height: 40px;

    outline: 2px solid #b1c5dd;
    border-radius: 6px;
    background: #ffffff;

    position: relative;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    transition: all 400ms;

    input {
      height: 100%;

      border: none;
      border-radius: 6px;

      color: #232323;
      font-size: 16px;
      font-weight: normal;

      padding: 8px;

      flex: 1;

      transition: all 400ms;
    }

    ${isFilled && feedbackVariations.filled}
    ${isFocused && feedbackVariations.focused}
    ${isErrored && feedbackVariations.errored}
  `}
`;

type ILabelContainerProps = IFeedbackProps;

const labelContainerVariations = {
  filled: css`
    background-color: #334b7a;

    top: -14px;

    opacity: 1;
    visibility: visible;
  `,
  focused: css`
    background-color: #6c87bc;

    top: -14px;

    opacity: 1;
    visibility: visible;
  `,
  errored: css`
    background-color: #0a192f;

    color: #ff6c70;

    top: -14px;

    opacity: 1;
    visibility: visible;
  `,
};

export const LabelContainer = styled.div<ILabelContainerProps>`
  ${({ isFocused, isFilled, isErrored }) => css`
    width: fit-content;

    background: #b1c5dd;

    color: #ffffff;
    font-size: 14px;
    font-weight: normal;

    padding: 2px 8px;

    position: absolute;
    top: 0px;
    left: 8px;

    opacity: 0;
    visibility: hidden;

    transition: all 400ms;

    ${isFilled && labelContainerVariations.filled}
    ${isFocused && labelContainerVariations.focused}
    ${isErrored && labelContainerVariations.errored}
  `}
`;

type IIconContainerProps = IFeedbackProps;

export const IconContainer = styled.div<IIconContainerProps>`
  ${({ isErrored, isFilled, isFocused }) => css`
    height: 100%;

    box-shadow: none !important;

    margin: 0 8px;

    transition: color 400ms;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      stroke: #b1c5dd;
      transition: stroke 400ms;
    }

    ${isFilled && feedbackVariations.filled}
    ${isFocused && feedbackVariations.focused}
    ${isErrored && feedbackVariations.errored}
  `}
`;

export const ErrorMessage = styled.div`
  color: #ff6c70;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.4px;

  position: absolute;
  bottom: -24px;
  left: 0;
`;
