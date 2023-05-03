import { fetchProductOverviews } from '.';

describe('fetchProductOverviews', () => {
  it('レスポンスを返すこと', async () => {
    const response = await fetchProductOverviews();
    expect(response).toBeTruthy();
  });
});
