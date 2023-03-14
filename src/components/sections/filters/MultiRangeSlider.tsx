import { FC, useCallback, useEffect, useState, useRef } from 'react';


export interface RangeValues {
  min: number;
  max: number;
}
interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: (value: RangeValues) => void;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <>
      <input
        className="appearance-none absolute pointer-events-none h-0 w-[374px] outline-none z-[3] left-5 mt-[19px]"
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event): void => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event): void => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
        }}
        className="appearance-none absolute pointer-events-none h-0 w-[374px] outline-none z-[4] right-5 mt-[19px]"
      />
      
        <div className="relative min-w-[374px] mt-5">
          <div className="absolute rounded-md h-[2.5px] bg-gray-200 z-[1] w-full" />
          <div ref={range} className="absolute rounded-md h-[2.5px] bg-primary z-[2]" />
        </div>


      <div className="flex items-center justify-center gap-2 mt-9">
        <p className="text-primary text-sm">{minVal}€</p>
        <span className="text-primary text-sm">-</span>
        <p className="text-primary text-sm">{maxVal}€</p>
      </div>
    </>
  );
};

export default MultiRangeSlider;
