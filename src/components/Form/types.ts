import type { ControllerProps } from 'react-hook-form';

/* FIXME: #1 something is wrong with the typing */
export type ControlledComponentProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: ControllerProps['name'];
};
