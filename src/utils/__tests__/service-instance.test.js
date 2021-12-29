import { ServiceInstance } from '@/utils';

const mockAxiosGet = jest.fn();

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: mockAxiosGet,
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  })),
}));

describe('utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('ServiceInstance()', () => {
    const service = new ServiceInstance();
    it('should be defined', async () => {
      const actual = service;
      expect(actual).toBeDefined();
    });

    it('should return get data from highlight', async () => {
      const expected = {
        data: {
          articles: [],
        },
      };
      mockAxiosGet.mockImplementationOnce(() => Promise.resolve(expected));

      const actual = await service.getTopHighlight({ country: 'us' });
      expect(mockAxiosGet).toBeCalledTimes(1);
      expect(mockAxiosGet).toBeCalledWith('/top-headlines', { params: { country: 'us' } });
      expect(actual).toEqual(expected);
    });

    it('should return get data from highlight', async () => {
      const expected = {
        data: {
          sources: [],
        },
      };
      mockAxiosGet.mockImplementationOnce(() => Promise.resolve(expected));

      const actual = await service.getNewsSources();
      expect(mockAxiosGet).toBeCalledTimes(1);
      expect(mockAxiosGet).toBeCalledWith('/sources');
      expect(actual).toEqual(expected);
    });
  });
});
