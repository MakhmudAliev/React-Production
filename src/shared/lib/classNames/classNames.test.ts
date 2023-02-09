import { classNames } from './classNames';

describe('classNames', () => {
  test('with first param only', () => {
    expect(classNames('someClassname')).toBe('someClassname');
  });

  test('with additional class', () => {
    expect(classNames('someClassname', {}, ['secondClassname', 'otherOne'])).toBe(
      'someClassname secondClassname otherOne'
    );
  });

  test('with mods', () => {
    const expected = 'someClassname secondClassname otherOne hovered scrollable';
    expect(classNames('someClassname', { hovered: true, scrollable: true }, ['secondClassname', 'otherOne'])).toBe(
      expected
    );
  });

  test('with mods false', () => {
    const expected = 'someClassname secondClassname otherOne hovered';
    expect(classNames('someClassname', { hovered: true, scrollable: false }, ['secondClassname', 'otherOne'])).toBe(
      expected
    );
  });

  test('with mods undefined', () => {
    const expected = 'someClassname secondClassname otherOne hovered';
    expect(classNames('someClassname', { hovered: true, scrollable: undefined }, ['secondClassname', 'otherOne'])).toBe(
      expected
    );
  });
});
