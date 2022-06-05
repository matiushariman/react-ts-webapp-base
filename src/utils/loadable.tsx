import { lazy, Suspense } from 'react';

function loadable(importFunc: { (): Promise<any> }, fallback: React.ReactNode = null) {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

export default loadable;
