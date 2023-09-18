import React from 'react';
import { RecoilRoot } from 'recoil';

function Context({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default Context;
