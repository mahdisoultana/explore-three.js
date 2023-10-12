import { memo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  amountAtom,
  coatMaterial,
  getPrice,
  legsMaterial,
  selectedCoatMaterial,
  selectedLegsMaterial,
} from './atoms';

function Interface() {
  return (
    <div className="max-w-sm w-full border text-white bg-white/10 border-gray-700 rounded-2xl shadow shadow-black p-5 pt-2 text-xl  fixed top-5  h-auto overflow-y-auto right-5">
      <article>
        <CoatMaterial />
        <LegsMaterial />
        <AmountButton />
        <PriceButton />
      </article>
    </div>
  );
}
const CoatMaterial = memo(() => {
  const [coatM, setCoatM] = useRecoilState(coatMaterial);
  const [selectedCoatM, setSelectedCoatM] =
    useRecoilState(selectedCoatMaterial);
  return (
    <div className="mt-4">
      <h2 className="text-sm">
        {' '}
        <span>Coat Material :</span>
        <span className="text-green-400 px-2 ml-4 font-bold">
          {coatM.type + coatM.value}
        </span>
      </h2>
      <div className="space-x-4 flex items-center justify-center ">
        {['fabric', 'leather'].map((el, key) => (
          <button
            onClick={() => {
              setSelectedCoatM(el as 'leather' | 'fabric');
            }}
            className={`w-full  py-2  border-2  flex items-center justify-center mt-3   text-sm rounded-full ${
              selectedCoatM == el
                ? 'bg-green-500 '
                : 'bg-white hover:bg-green-100   text-black'
            } ${coatM.type == el ? 'border-green-500' : 'border-transparent'}`}
            key={key}
          >
            {el}
          </button>
        ))}
      </div>
      {selectedCoatM == 'fabric' ? (
        <>
          <div className="grid grid-cols-4  gap-3 place-content-center mt-4 ">
            {[1, 2, 3].map((el, key) => (
              <div
                onClick={() =>
                  setCoatM({
                    type: 'fabric',
                    value: el,
                  })
                }
                key={key}
                className={`w-[70px] h-[70px]   bg-gray-500/10 rounded-xl shadow text-xl overflow-hidden ${
                  el == coatM.value && coatM.type == 'fabric'
                    ? 'border-gray-100 border-[3px] shadow-gray-100/50  '
                    : 'border-gray-500 border shadow-gray-200/10 hover:border-gray-100 hover:shadow-gray-100/50 cursor-pointer scale-90 duration-100 hover:scale-100'
                }`}
              >
                <img
                  src={`/models/chair/fabric/${el}/preview.jpg `}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-4  gap-3 place-content-center mt-4 ">
            {[1, 2].map((el, key) => (
              <div
                onClick={() =>
                  setCoatM({
                    type: 'leather',
                    value: el,
                  })
                }
                key={key}
                className={`w-[70px] h-[70px]   bg-gray-500/10 rounded-xl shadow text-xl overflow-hidden ${
                  el == coatM.value && coatM.type == 'leather'
                    ? 'border-gray-100 border-[3px] shadow-gray-100/50  '
                    : 'border-gray-500 border shadow-gray-200/10 hover:border-gray-100 hover:shadow-gray-100/50 cursor-pointer scale-90 duration-100 hover:scale-100'
                }`}
              >
                <img
                  src={`/models/chair/leather/${el}/preview.jpg `}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
});
const LegsMaterial = memo(() => {
  const [selectedLegsM, setSelectedLegsM] =
    useRecoilState(selectedLegsMaterial);
  const [legsM, setLegsM] = useRecoilState(legsMaterial);
  return (
    <div className="mt-10">
      <h2 className="text-sm">
        {' '}
        <span>Legs Material :</span>
        <span className="text-green-400 px-2 ml-4 font-bold">
          {' '}
          {legsM.type + legsM.value}
        </span>
      </h2>
      <div className="space-x-4 flex items-center justify-center ">
        {['wood', 'metal'].map((el, key) => (
          <button
            onClick={() => {
              setSelectedLegsM(el as 'wood' | 'metal');
            }}
            className={`w-full  py-2  border-2  flex items-center justify-center mt-3   text-sm rounded-full ${
              selectedLegsM == el
                ? 'bg-green-500 '
                : 'bg-white hover:bg-green-100   text-black'
            } ${legsM.type == el ? 'border-green-500' : 'border-transparent'}`}
            key={key}
          >
            {el}
          </button>
        ))}
      </div>

      {selectedLegsM == 'metal' ? (
        <div className="grid grid-cols-4 gap-3 place-content-center mt-4 ">
          {[1, 2, 3].map((el, key) => (
            <div
              onClick={() => {
                setLegsM({
                  type: 'metal',
                  value: el,
                });
              }}
              key={key}
              className={` w-[70px] h-[70px]   bg-gray-500/10 rounded-xl shadow text-xl overflow-hidden ${
                el == legsM.value && legsM.type == 'metal'
                  ? 'border-gray-100 border-[3px] shadow-gray-100/50  '
                  : 'border-gray-500 border shadow-gray-200/10 hover:border-gray-100 hover:shadow-gray-100/50 cursor-pointer scale-90 duration-100 hover:scale-100'
              }`}
            >
              <img
                src={`/models/chair/metal/${el}/preview.jpg `}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3 place-content-center mt-4 ">
          {[1, 2, 3].map((el, key) => (
            <div
              onClick={() => {
                setLegsM({
                  type: 'wood',
                  value: el,
                });
              }}
              key={key}
              className={` w-[70px] h-[70px]   bg-gray-500/10 rounded-xl shadow text-xl overflow-hidden ${
                el == legsM.value && legsM.type == 'wood'
                  ? 'border-gray-100 border-[3px] shadow-gray-100/50  '
                  : 'border-gray-500 border shadow-gray-200/10 hover:border-gray-100 hover:shadow-gray-100/50 cursor-pointer scale-90 duration-100 hover:scale-100'
              }`}
            >
              <img
                src={`/models/chair/wood/${el}/preview.jpg `}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
});
const AmountButton = memo(() => {
  const [amount, setAmount] = useRecoilState(amountAtom);
  return (
    <div className="mt-10 flex items-center space-x-4">
      <h2 className="">Amount</h2>
      <input
        type="number"
        className="pl-3 w-full py-1 text-black border  bg-white"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
        min={1}
        max={10}
      />
    </div>
  );
});
const PriceButton = memo(() => {
  const price = useRecoilValue(getPrice);
  return (
    <button className="w-full border py-2 bg-white text-black flex items-center justify-center   hover:bg-transparent hover:text-white mt-8 relative  ">
      <span> Checkout</span>
      <span className="absolute top-1/2  -translate-y-1/2 right-4">
        {Number(price).toFixed(2)}$
      </span>
    </button>
  );
});
export default Interface;
