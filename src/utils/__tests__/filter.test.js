import { filterTopHighLight } from '@/utils';

describe('utils', () => {
  describe('filterTopHighLight()', () => {
    const article = [{ content: 'hello' }, { context: undefined }];

    it('should return empty article if doesn\'t exist', () => {
      const actual = filterTopHighLight();
      expect(actual).toEqual([]);
    });

    it('should return article from top highlight api', () => {
      const [expected] = article;

      const actual = filterTopHighLight(article);
      expect(actual).toEqual([expected]);
    });
  });
});
