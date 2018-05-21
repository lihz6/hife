export default function strip(text: string, chars: string) {
  if (!text) return '';
  let start = 0, end = text.length;
  while (start < end && chars.indexOf(text.charAt(start)) > -1) start++;
  while (end > start && chars.indexOf(text.charAt(end - 1)) > -1) end--;
  return text.substring(start, end);
}