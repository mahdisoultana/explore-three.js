import { atom } from 'recoil';

export const countState = atom({
  key: 'countState',
  default: 5,
});

export const phaseState = atom<'ready' | 'start' | 'end' | 'restart'>({
  key: 'phaseState',
  default: 'ready',
});

export const timerState = atom({
  key: 'timerState',
  default: 0,
});
