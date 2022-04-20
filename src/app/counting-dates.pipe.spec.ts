import { CountingDatesPipe } from './counting-dates.pipe';

describe('CountingDatesPipe', () => {
  it('create an instance', () => {
    const pipe = new CountingDatesPipe();
    expect(pipe).toBeTruthy();
  });
});
