/** Stylable formatter
 * receives amount of control buttons
 * and returns appropriate padding
 */

const BASE_PADDING = 12;
const BUTTON_WIDTH = 30;
const GAP_WIDTH = 6;
const MAX_BUTTON_AMOUNT = 2;

module.exports = function(amount) {
  if (amount > MAX_BUTTON_AMOUNT) {
    throw new Error(`Modal accepts up to ${MAX_BUTTON_AMOUNT} control buttons`);
  }
  return `${BASE_PADDING + BUTTON_WIDTH * amount + GAP_WIDTH * (amount - 1)}px`;
};
