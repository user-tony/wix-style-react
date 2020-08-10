import React from 'react';
import { classes } from './Avatar.st.css';

const personSvg = (
  <svg className={classes.placeholder} viewBox="0 0 48 48">
    <path d="M24,12 C28.418278,12 32,15.581722 32,20 L32,22 C32,26.418278 28.418278,30 24,30 C19.581722,30 16,26.418278 16,22 L16,20 C16,15.581722 19.581722,12 24,12 Z M24,32 C33.8734019,32 42.1092023,38.8710577 44,48 L4,48 C5.89079771,38.8710577 14.1265981,32 24,32 Z" />
  </svg>
);

const businessSvg = (
  <svg className={classes.placeholder} viewBox="0 0 48 48">
    <path d="M21,13.387 C21,12.705 21.669,12.223 22.316,12.438 L22.316,12.438 L34.632,16.544 C35.449,16.816 36,17.581 36,18.441 L36,18.441 L36,34 L38,34 L38,36 L10,36 L10,34 L12,34 L12,21.659 C12,21.259 12.238,20.898 12.606,20.74 L12.606,20.74 L17.606,18.597 C18.266,18.314 19,18.799 19,19.517 L19,19.517 L19,34 L21,34 Z M32,29 L25,29 L25,31 L32,31 L32,29 Z M32,24 L25,24 L25,26 L32,26 L32,24 Z M32,19 L25,19 L25,21 L32,21 L32,19 Z" />
  </svg>
);

const smallBusinessSvg = (
  <svg className={classes.placeholder} viewBox="0 0 24 24">
    <path d="M18,17 L18,8.754 C18,8.308 17.704,7.916 17.275,7.793 L11.637,6.182 C11.318,6.091 11,6.331 11,6.663 L11,17 L9,17 L9,8.934 C9,8.535 8.555,8.297 8.223,8.518 L6.223,9.852 C6.083,9.944 6,10.101 6,10.268 L6,17 L5,17 L5,18 L6,18 L9,18 L11,18 L18,18 L19,18 L19,17 L18,17 Z" />
  </svg>
);

export const placeholderSVGs = {
  size90: { circle: personSvg, square: businessSvg },
  size72: { circle: personSvg, square: businessSvg },
  size60: { circle: personSvg, square: businessSvg },
  size48: { circle: personSvg, square: businessSvg },
  size36: { circle: personSvg, square: businessSvg },
  size30: { circle: personSvg, square: businessSvg },
  size24: { circle: personSvg, square: smallBusinessSvg },
  size18: { circle: personSvg, square: smallBusinessSvg },
};
