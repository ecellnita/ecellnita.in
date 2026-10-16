import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOrdinal(n: number): string {
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) {
    return `${n}th`;
  }
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
}

export function formatBlogDate(dateStr: string): string {
  if (!dateStr) return '';
  const datePart = (dateStr.includes('T') ? dateStr.split('T')[0] : dateStr) ?? '';
  const parts = datePart.split('-');

  const yearStr = parts[0];
  const monthStr = parts[1];
  const dayStr = parts[2];

  if (!yearStr || !monthStr || !dayStr) {
    return dateStr;
  }

  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10) - 1;
  const day = parseInt(dayStr, 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return dateStr;
  }

  const date = new Date(year, month, day);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const weekday = daysOfWeek[date.getDay()] ?? '';
  const monthName = months[date.getMonth()] ?? '';

  return `${weekday}, ${getOrdinal(day)} ${monthName}, ${year}`;
}
