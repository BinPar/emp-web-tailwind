export interface TempData {
  srcList: string[];
  titleList: string[];
  authorList: string[];
  infoList?: string[];
  typeList: string[];
  type2List?: string[];
  initialList: string[];
  fullTextList: string[];
  oldPriceList: string[];
  currentPriceList: string[];
}

export interface RealData {
  src: string;
  title: string;
  author: string;
  type: string;
  type2?: string;
  info?: string;
  initial: string;
  fullText: string;
  oldPrice: string;
  currentPrice: string;
}
