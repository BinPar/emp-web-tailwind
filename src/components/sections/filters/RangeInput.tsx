import { twMerge } from 'tailwind-merge';
import { WithClassName } from '../../../model/react';

interface RangeProps {
  min: number;
  max: number;
  value: number;
  onChangeVal: (newValue: string) => void;
}
const RangeInput: React.FC<WithClassName<RangeProps>> = ({
  className,
  min,
  max,
  value,
  onChangeVal,
}) => (
  <input
    className={twMerge(
      'appearance-none absolute pointer-events-none h-0 w-full outline-none',
      className,
    )}
    type="range"
    min={min}
    max={max}
    value={value}
    onChange={(event): void => onChangeVal(event.target.value)}
  />
);
export default RangeInput;
