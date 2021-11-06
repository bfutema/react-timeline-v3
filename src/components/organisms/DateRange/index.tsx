import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FiCalendar } from 'react-icons/fi';

import { format as f } from 'date-fns';

import {
  Container,
  ErrorMessage,
  IconContainer,
  LabelContainer,
} from './styles';

type IFormat = { showFormat: string; returnFormat: string };
type IValue = { original: [Date, Date]; formatted: string };

interface IDateRangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  format?: IFormat;
  errorMessage?: string;
}

const DateRange: React.FC<IDateRangeProps> = ({
  name,
  label,
  format = { showFormat: 'dd/MM/yyyy', returnFormat: 'yyyy-MM-dd' },
  errorMessage,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<IValue>();

  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isErrored, setIsErrored] = useState<boolean>(!!errorMessage);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(
    e => {
      const startDate = new Date(2021, 0, 1);
      const endDate = new Date(2021, 0, 5);

      const { showFormat } = format;

      const formatted = `${f(startDate, showFormat)} - ${f(
        endDate,
        showFormat,
      )}`;

      inputRef.current?.setAttribute('value', formatted);

      if (rest.onChange) rest.onChange(e);

      setValue({ original: [startDate, endDate], formatted });
      setIsFilled(!!inputRef.current?.value);
      setIsFocused(false);
      setIsErrored(false);
    },
    [format, rest],
  );

  const feedbackProps = useMemo(
    () => ({ isErrored, isFilled, isFocused }),
    [isErrored, isFilled, isFocused],
  );

  const feedbackMessage = useMemo(() => {
    return !!errorMessage && !isFilled;
  }, [errorMessage, isFilled]);

  return (
    <Container {...feedbackProps}>
      {label && <LabelContainer {...feedbackProps}>{label}</LabelContainer>}

      <input
        {...rest}
        ref={inputRef}
        readOnly
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      <IconContainer {...feedbackProps}>
        <FiCalendar size={24} />
      </IconContainer>

      {feedbackMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export { DateRange };
