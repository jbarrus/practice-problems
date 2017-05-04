export default function rotate(items: any[], n:number = 1): any[] {
  if (!items) {
    return [];
  }

  if (n >= items.length) {
    n = n % items.length;
  }

  if (items.length < 2 || n === 0) {
    return items;
  }

  return rotate([items[items.length - 1], ...items.slice(0, items.length-1)], n - 1);
}