import { PersonNameTransformPipe } from './person-name-transform.pipe';

describe('PersonNameTransformPipe', () => {
  it('create an instance', () => {
    const pipe = new PersonNameTransformPipe();
    expect(pipe).toBeTruthy();
  });
});
