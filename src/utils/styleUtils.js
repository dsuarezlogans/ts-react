export const center = () => `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const rightBorder = (width, backgroundColor) => `
  content: '';
  display: block;
  position: absolute;
  right: 0;
  height: 50%;
  width: ${width}px;
  background-color: ${backgroundColor};
  top: 25%;
`;