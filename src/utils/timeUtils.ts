export function formattedHours(hours: number): string {
  return (hours % 12 || 12).toString().padStart(2, '0');
}

export function formattedMinutes(minutes: number): string {
  return minutes.toString().padStart(2, '0');
}

export function beforeMidday(hours: number): boolean {
  return hours < 12;
}

export function getFormattedTime(now: Date): string {
  const minute = formattedMinutes(now.getMinutes());
  const hour = formattedHours(now.getHours());
  const meridiem = beforeMidday(now.getHours()) ? 'AM' : 'PM';

  return `${hour}:${minute} ${meridiem}`;
}
