import { ClassAttributes, RefObject } from 'react';

export interface CustomResponse {
  ok: boolean;
  error?: string 
}
export function isOffsetGreaterThanZero<T extends HTMLElement>(
  selector: string | RefObject<T>,
  classToAdd: string | ClassAttributes<T>
): CustomResponse {
  let element;
  if (typeof selector === 'string') {
    element = document.querySelector<T>(selector);
  } else {
    element = selector.current;
  }

  if (!element) {
    return { 
      ok: false, 
      error: 'no element Founded with this selector' 
    };
  }

  if (element.offsetTop > 0) {
    element.className = element.className + classToAdd;
    return {
      ok: true,
    }
  }

 return {
  ok: true
}
};
