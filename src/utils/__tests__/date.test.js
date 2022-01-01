import { onChangeFormatDate } from '@/utils';

describe('utils', () => {
  describe('onChangeFormatDate()', () => {
    const date = new Date('2022/01/01');
    it('should return date 01/01/2022 to format', () => {
      const expected = '01 January 2022';

      const actual = onChangeFormatDate(date);
      expect(actual).toEqual(expected);
    });
  });
});
