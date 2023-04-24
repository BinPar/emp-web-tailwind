import { Children, cloneElement, ReactElement, useEffect, useMemo, useRef } from 'react';
import { WithChildren } from '../../../model/react';
import ArrowRight from '../../icons/ArrowRight';

const maxItemsInViewport = 4;

const Carousel: React.FC<WithChildren> = ({ children }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const firstItem = useRef<HTMLElement>(null);
  const itemsCount = useRef<number>(0);
  const scrolling = useRef<boolean>(false);

  const items = useMemo(() => {
    const childrenArray = Children.toArray(children) as ReactElement[];
    itemsCount.current = childrenArray.length;
    const first = childrenArray.slice(0, maxItemsInViewport);
    const last = childrenArray.slice(-maxItemsInViewport);
    const clonedChildren = [...last, ...childrenArray, ...first];
    return Children.map<ReactElement, ReactElement>(clonedChildren, (item, i) => {
      const index = i - maxItemsInViewport;
      return cloneElement(item, {
        ref: index === 0 ? firstItem : undefined,
        key: `${index}`,
        index,
      });
    });
  }, [children]);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const { current: currentWrapper } = wrapper;
    const { current: currentContainer } = container;

    const onScroll = (): void => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        if (scrolling.current) {
          scrolling.current = false;
        } else if (currentWrapper && firstItem.current) {
          const { left: wrapperLeft, width: wrapperWidth } = currentWrapper.getBoundingClientRect();
          const { left: itemLeft, width: itemWidth } = firstItem.current.getBoundingClientRect();
          const left = itemLeft - wrapperLeft;
          const totalWidth = itemWidth * itemsCount.current;
          if (left > wrapperWidth) {
            scrolling.current = true;
            currentWrapper.scrollLeft += totalWidth;
          } else if (left < -totalWidth) {
            scrolling.current = true;
            currentWrapper.scrollLeft -= totalWidth;
          }
        }
      }, 150);
    };

    if (currentWrapper && currentContainer) {
      if (firstItem.current) {
        currentWrapper.scrollLeft = firstItem.current.offsetLeft;
      }
      currentWrapper.addEventListener('scroll', onScroll, false);
    }

    return (): void => {
      if (currentWrapper) {
        currentWrapper.addEventListener('scroll', onScroll, false);
      }
    };
  }, []);

  const goLeft = (): void => {
    if (wrapper.current && firstItem.current) {
      const { width } = firstItem.current.getBoundingClientRect();
      wrapper.current.scrollBy({ left: -width, behavior: 'smooth' });
    }
  };

  const goRight = (): void => {
    if (wrapper.current && firstItem.current) {
      const { width } = firstItem.current.getBoundingClientRect();
      wrapper.current.scrollBy({ left: width, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mt-8 z-10 w-full">
      <button
        type="button"
        onClick={goLeft}
        className="absolute z-20 -left-8 md:left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center select-none cursor-pointer screen-touch:hidden"
      >
        <ArrowRight className="fill-primary w-10 rotate-180" />
      </button>
      <div
        ref={wrapper}
        className="md:w-5/6 m-auto overflow-hidden snap-x snap-mandatory overflow-x-visible overflow-y-hidden touch-pan-x hideScrollbar"
      >
        <div ref={container} className="flex flex-row flex-nowrap translate-x-[var(--x)]">
          {items}
        </div>
      </div>
      <button
        type="button"
        onClick={goRight}
        className="absolute z-20 -right-8 md:right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full  flex items-center justify-center select-none cursor-pointer  screen-touch:hidden"
      >
        <ArrowRight className="fill-primary w-10" />
      </button>
    </div>
  );
};

export default Carousel;
