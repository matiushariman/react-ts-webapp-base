import { Helmet as ReactHelmet, HelmetProps as ReactHelmetProps } from 'react-helmet-async';

export type HelmetProps = {
  title: ReactHelmetProps['title'];
};

export const Helmet = ({ title }: HelmetProps): JSX.Element => (
  <ReactHelmet>
    <title>{title}</title>
  </ReactHelmet>
);
