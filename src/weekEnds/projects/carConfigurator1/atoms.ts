import { atom } from 'recoil';

export const pageAtom = atom({
  key: 'pageAtomCar1',
  default: 0,
});

export const openAtom = atom({ key: 'openAtomCar1', default: false });

export const selectedAtom = atom({
  key: 'selectedChoicesCar1',
  default: {
    brake: 0,
    wheel: 0,
    body: 0,
    accessories: 0,
    tire: 0,
  },
});
export const subscribeAtom = atom({
  key: 'subscriber',
  default: {
    email: '',
    textArea: '',
  },
});
