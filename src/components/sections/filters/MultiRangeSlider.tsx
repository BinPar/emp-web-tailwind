

import { useCallback, useEffect, useState, useRef } from 'react';
import Minus from '../../icons/Minus';
import Plus from '../../icons/Plus';
import RangeInput from './RangeInput';

export interface RangeValues {
  min: number;
  max: number;
}
interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: (value: RangeValues) => void;
  valueSuffix?: string;
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({ min, max, valueSuffix, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const onChangeMinVal = (newValue: string): void => {
    const value = Math.min(+newValue, maxVal - 1);
    setMinVal(value);
  };
  const onChangeMaxVal = (newValue: string): void => {
    const value = Math.max(+newValue, minVal + 1);
    setMaxVal(value);
  };
  return (
    <div className='max-w-[374px] relative'>
      <RangeInput
        min={min}
        max={max}
        value={minVal}
        onChangeVal={onChangeMinVal}
        className="z-[3] left-0"
      />
      <RangeInput
        min={min}
        max={max}
        value={maxVal}
        onChangeVal={onChangeMaxVal}
        className="z-[4] right-0"
      />
      <div className="relative min-w-[374px]">
        <div className="absolute rounded-md h-[2.5px] bg-gray-200 z-[1] w-full" />
        <div ref={range} className="absolute rounded-md h-[2.5px] bg-primary z-[2]" />
      </div>
      <Minus className="w-6 text-gray-200 absolute -left-[6px] top-3" />
      <Plus className="w-6 text-gray-200 absolute -right-[6px] top-3" />
      <div className="flex items-center justify-center gap-2 mt-3 pt-3">
        <p className="text-primary text-sm">
          {minVal}
          {valueSuffix}
        </p>
        <span className="text-primary text-sm">-</span>
        <p className="text-primary text-sm">
          {maxVal}
          {valueSuffix}
        </p>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
