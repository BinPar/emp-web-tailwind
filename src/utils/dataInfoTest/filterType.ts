import { FilterRealData, FilterTempData } from './filterModelTemp';

export const dataTypeFilter = ['papel', 'digital', 'duo'];

export const valueTypeFilter = ['papel', 'digital', 'duo'];

const dataType: FilterRealData[] = [];
const tempData: FilterTempData = {
  dataList: dataTypeFilter,
  valueList: valueTypeFilter,
};
Object.keys(tempData).forEach((k) => {
  const array = tempData[k as keyof typeof tempData];
  if (array) {
    array.forEach((str, i) => {
      if (!dataType[i]) {
        dataType[i] = {
          data: '',
          value: '',
        };
      }
      dataType[i][k.replace('List', '') as keyof FilterRealData] = str;
    });
  }
});

export default dataType;
