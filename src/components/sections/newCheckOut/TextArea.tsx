import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';

interface TextAreaProps {
  valueInput: string;
  label: string;
  id: string;
  initialHeight: string;
}
const TextArea: React.FC<WithClassName<TextAreaProps>> = ({
  valueInput,
  className,
  label,
  initialHeight,
  id,
}) => {
  const [value, setValue] = useState(valueInput);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const { scrollHeight } = textareaRef.current;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [value]);

  const handleValueChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(event.target.value);
  };

  return (
    <div className='mb-3 lg:mb-0'>
      <label
        className="mb-3 block text-sm xs2:text-base text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px]"
        htmlFor={id}
      >
        {label}
      </label>
     
        <textarea
          style={{ height: initialHeight }}
          id={id}
          className={twMerge('w-full appearance-none outline-none min-h-[120px] p-3 rounded-lg border border-gray-300 text-xs xs:text-sm text-gray-400 font-medium tracking-[.9px] leading-5', className)}
          value={value}
          onChange={handleValueChange}
          ref={textareaRef}
        />

    </div>
  );
};

export default TextArea;
