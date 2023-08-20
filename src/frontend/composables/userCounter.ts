export function useCounter(initialValue: number) {
  const count = ref(initialValue);
  const inc = () => count.value++;
  const dec = () => count.value--;
  return { count, inc, dec };
}