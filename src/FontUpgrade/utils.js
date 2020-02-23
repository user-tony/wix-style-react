/* TODO - Remove this utils file when Madefor is ready to use */

export function isMadefor() {
  return window['useMadeforFont'];
}

export function madeforRegular(fallback) {
  return isMadefor() ? 'normal' : fallback;
}

export function madeforBold(fallback) {
  return isMadefor() ? 'bold' : fallback;
}
