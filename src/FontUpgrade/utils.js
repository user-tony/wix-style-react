/* TODO - Remove this utils file when Madefor is ready to use */

export function isMadefor() {
  return window && window['useMadeforFont'];
}

export function setMadefor(value) {
  if (window) {
    if (value) window['useMadeforFont'] = value;
    else delete window['useMadeforFont'];
  }
}

export function madeforRegular(fallback) {
  return isMadefor() ? 'normal' : fallback;
}

export function madeforBold(fallback) {
  return isMadefor() ? 'bold' : fallback;
}
