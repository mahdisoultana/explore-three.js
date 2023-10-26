import { atom, selector } from 'recoil';
type CoatMaterial = {
  type: 'leather' | 'fabric';
  value: number;
};
type LegsMaterial = {
  type: 'wood' | 'metal';
  value: number;
};
export const coatMaterial = atom<CoatMaterial>({
  key: 'coatMaterial',
  default: {
    type: 'fabric',
    value: 1,
  },
});
export const legsMaterial = atom<LegsMaterial>({
  key: 'legsMaterial',
  default: {
    type: 'metal',
    value: 2,
  },
});
export const selectedCoatMaterial = atom<'leather' | 'fabric'>({
  key: 'selectedCoatMaterial',
  default: 'fabric',
});
export const selectedLegsMaterial = atom<'wood' | 'metal'>({
  key: 'selectedLegsMaterial',
  default: 'metal',
});

export const amountAtom = atom<number>({
  key: 'amountAtom',
  default: 1,
});

export const getPrice = selector({
  key: 'getPrice',
  get: ({ get }) => {
    const amount = get(amountAtom);
    const coatM = get(coatMaterial);
    const legsM = get(legsMaterial);

    let coatPrice = 0;
    let legsPrice = 0;
    if (coatM.type === 'leather') {
      coatPrice = coatPricesLeather[coatM.value - 1];
    } else {
      coatPrice = coatPricesFabric[coatM.value - 1];
    }
    if (legsM.type === 'wood') {
      legsPrice = legsPricesWood[legsM.value - 1];
    } else {
      legsPrice = legsPricesMetal[legsM.value - 1];
    }

    return (coatPrice + legsPrice) * amount;
  },
});

export const getTypePrice = selector({
  key: 'getTypePrice',
  get: ({ get }) => {
    const coatM = get(coatMaterial);
    const legsM = get(legsMaterial);

    let coatPrice = 0;
    let legsPrice = 0;
    if (coatM.type === 'leather') {
      coatPrice = coatPricesLeather[coatM.value - 1];
    } else {
      coatPrice = coatPricesFabric[coatM.value - 1];
    }
    if (legsM.type === 'wood') {
      legsPrice = legsPricesWood[legsM.value - 1];
    } else {
      legsPrice = legsPricesMetal[legsM.value - 1];
    }
    return { coatPrice, legsPrice, coatType: coatM.type, legsType: legsM.type };
  },
});

//
export const coatPricesLeather = [15, 10];
export const coatPricesFabric = [13, 8, 10];
export const legsPricesWood = [6, 7, 8];
export const legsPricesMetal = [10, 12, 11];
