import { formattedHours, formattedMinutes, beforeMidday, getFormattedTime } from '../src/utils/timeUtils';

describe('timeUtils', () => {
  describe('formattedHours', () => {
    test('converts 0 to 12', () => {
      expect(formattedHours(0)).toBe('12');
    });

    test('converts 12 to 12', () => {
      expect(formattedHours(12)).toBe('12');
    });

    test('converts 13 to 01', () => {
      expect(formattedHours(13)).toBe('01');
    });

    test('converts 9 to 09', () => {
      expect(formattedHours(9)).toBe('09');
    });

    test('converts 23 to 11', () => {
      expect(formattedHours(23)).toBe('11');
    });
  });

  describe('formattedMinutes', () => {
    test('pads single digit minutes with leading zero', () => {
      expect(formattedMinutes(5)).toBe('05');
    });

    test('does not pad double digit minutes', () => {
      expect(formattedMinutes(15)).toBe('15');
    });

    test('formats 0 as 00', () => {
      expect(formattedMinutes(0)).toBe('00');
    });
  });

  describe('beforeMidday', () => {
    test('returns true for hours before 12', () => {
      expect(beforeMidday(0)).toBe(true);
      expect(beforeMidday(11)).toBe(true);
    });

    test('returns false for hours 12 and after', () => {
      expect(beforeMidday(12)).toBe(false);
      expect(beforeMidday(23)).toBe(false);
    });
  });

  describe('getFormattedTime', () => {
    test('formats morning time correctly', () => {
      const date = new Date(2026, 0, 14, 9, 5);
      expect(getFormattedTime(date)).toBe('09:05 AM');
    });

    test('formats afternoon time correctly', () => {
      const date = new Date(2026, 0, 14, 15, 30);
      expect(getFormattedTime(date)).toBe('03:30 PM');
    });

    test('formats midnight correctly', () => {
      const date = new Date(2026, 0, 14, 0, 0);
      expect(getFormattedTime(date)).toBe('12:00 AM');
    });

    test('formats noon correctly', () => {
      const date = new Date(2026, 0, 14, 12, 0);
      expect(getFormattedTime(date)).toBe('12:00 PM');
    });
  });
});