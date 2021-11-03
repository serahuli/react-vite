import { css } from 'styled-components';

export function flex(direction?: string, justifyContent?: string, alignItem?: string) {
  direction = direction ?? 'row';
  justifyContent = justifyContent ?? 'space-between';
  alignItem = alignItem ?? 'center';
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItem};
  `;
}
