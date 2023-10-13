import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import LightDarkButton from '../../../components/shared/LightDarkButton';
import {
  amountAtom,
  coatMaterial,
  coatPricesFabric,
  coatPricesLeather,
  getPrice,
  legsMaterial,
  legsPricesMetal,
  legsPricesWood,
  selectedCoatMaterial,
  selectedLegsMaterial,
} from './atoms';

import { AiOutlineClose } from 'react-icons/ai';
import { BsSliders } from 'react-icons/bs';
function Interface() {
  return (
    <>
      <div className="z-[100] fixed -top-4 left-28 select-none">
        <LightDarkButton />
      </div>
      <InterfaceConfigurator />
    </>
  );
}
const InterfaceConfigurator = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.button
        animate={open ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
        onClick={() => setOpen(true)}
        className="fixed  top-2 right-4 dark:text-black dark:hover:text-green-500 text-white hover:text-green-400 p-6 select-none"
      >
        <BsSliders size="26" />
      </motion.button>

      <motion.div
        animate={open ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        className="max-w-sm  select-none w-full border text-white dark:text-black  bg-white/10 dark:bg-white/40 border-gray-700 dark:border-gray-700/20 rounded-2xl shadow shadow-black dark:shadow-black/20 p-5 pt-2 text-xl text-center  fixed top-5  h-auto overflow-y-auto right-5 "
      >
        <span className="w-full h-full bg-black/40 dark:bg-gray-900/10 top-0 left-0 absolute backdrop-blur-sm blur z-[-1]  " />
        <article>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-3 hover:opacity-60 p-1 rounded bg-red-500 z-[100]"
          >
            <AiOutlineClose size="24" />
          </button>
          <CoatMaterial />
          <LegsMaterial />
          <AmountButton />
          <PriceButton />
        </article>
      </motion.div>
    </>
  );
};
const CoatMaterial = memo(() => {
  const [coatM, setCoatM] = useRecoilState(coatMaterial);
  const [selectedCoatM, setSelectedCoatM] =
    useRecoilState(selectedCoatMaterial);
  return (
    <div className="mt-4 relative">
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
            className={`w-full  py-2  border-2   flex items-center justify-center mt-3   text-sm rounded-full ${
              selectedCoatM == el
                ? 'bg-green-500 '
                : 'bg-white hover:bg-green-100   text-black  '
            } ${
              coatM.type == el
                ? 'border-green-500'
                : 'border-transparent dark:border-black/10 '
            }`}
            key={key}
          >
            {el}
          </button>
        ))}
      </div>
      {selectedCoatM == 'fabric' ? (
        <>
          <div className=" grid grid-cols-4  gap-3 place-content-center mt-4 ">
            {[1, 2, 3].map((el, key) => (
              <motion.div
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      delay: 0.15 * key,
                    },
                  },
                  hidden: {
                    opacity: 0,
                  },
                }}
                animate="visible"
                initial="hidden"
                key={key + 'fabric'}
                onClick={() =>
                  setCoatM({
                    type: 'fabric',
                    value: el,
                  })
                }
              >
                <div
                  className={`w-[70px] h-[70px]   bg-gray-500/10 rounded-xl shadow text-xl overflow-hidden ${
                    el == coatM.value && coatM.type == 'fabric'
                      ? 'border-gray-100 border-[3px] shadow-gray-100/50 dark:border-green-400  '
                      : 'border-gray-500 border shadow-gray-200/10 hover:border-gray-100 hover:shadow-gray-100/50 cursor-pointer scale-90 duration-100 hover:scale-100 '
                  }`}
                >
                  <img
                    src={`/models/chair/fabric/${el}/preview.jpg `}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-sm">{coatPricesFabric[key]}$</span>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-4  gap-3 place-content-center mt-4 ">
            {[1, 2].map((el, key) => (
              <motion.div
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      delay: 0.15 * key,
                    },
                  },
                  hidden: {
                    opacity: 0,
                  },
                }}
                animate="visible"
                initial="hidden"
                key={key + 'leather'}
                onClick={() =>
                  setCoatM({
                    type: 'leather',
                    value: el,
                  })
                }
              >
                <div
                  className={`w-[70px] h-[70px]   bg-gray-500/10 rounded-xl shadow text-xl overflow-hidden ${
                    el == coatM.value && coatM.type == 'leather'
                      ? 'border-gray-100 border-[3px] shadow-gray-100/50  dark:border-green-400'
                      : 'border-gray-500 border shadow-gray-200/10 hover:border-gray-100 hover:shadow-gray-100/50 cursor-pointer scale-90 duration-100 hover:scale-100'
                  }`}
                >
                  <img
                    src={`/models/chair/leather/${el}/preview.jpg `}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-sm">{coatPricesLeather[key]}$</span>
              </motion.div>
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
    <div className="mt-5">
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
            } ${
              legsM.type == el
                ? 'border-green-500'
                : 'border-transparent dark:border-black/10'
            }`}
            key={key}
          >
            {el}
          </button>
        ))}
      </div>

      {selectedLegsM == 'metal' ? (
        <div className="grid grid-cols-4 gap-3 place-content-center mt-4 ">
          {[1, 2, 3].map((el, key) => (
            <StaggerAnime delay={key * 0.15}>
              <div
                onClick={() => {
                  setLegsM({
                    type: 'metal',
                    value: el,
                  });
                }}
                key={key}
              >
                <div
                  className={` w-[70px] h-[70px]   bg-gray-500/10 rounded-xl shadow text-xl overflow-hidden ${
                    el == legsM.value && legsM.type == 'metal'
                      ? 'border-gray-100 border-[3px] shadow-gray-100/50  dark:border-green-400'
                      : 'border-gray-500 border shadow-gray-200/10 hover:border-gray-100 hover:shadow-gray-100/50 cursor-pointer scale-90 duration-100 hover:scale-100'
                  }`}
                >
                  <img
                    src={`/models/chair/metal/${el}/preview.jpg `}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-sm">{legsPricesMetal[key]}$</span>
              </div>
            </StaggerAnime>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3 place-content-center mt-4 ">
          {[1, 2, 3].map((el, key) => (
            <StaggerAnime delay={key * 0.15} key={el + 'wood'}>
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
                    ? 'border-gray-100 border-[3px] shadow-gray-100/50  dark:border-green-400'
                    : 'border-gray-500 border shadow-gray-200/10 hover:border-gray-100 hover:shadow-gray-100/50 cursor-pointer scale-90 duration-100 hover:scale-100'
                }`}
              >
                <img
                  src={`/models/chair/wood/${el}/preview.jpg `}
                  className="object-cover w-full h-full"
                />
              </div>{' '}
              <span className="text-sm">{legsPricesWood[key]}$</span>
            </StaggerAnime>
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
    <a href="https://www.linkedin.com/in/mahdisoultana/" target="_blank">
      <button className="w-full border py-2 bg-white  text-black flex items-center justify-center   hover:bg-transparent hover:text-white dark:hover:bg-black mt-8 relative  ">
        <span> Checkout</span>
        <motion.span
          key={price}
          initial={{ y: -24, scale: 1.5 }}
          animate={{ y: -13, scale: 1 }}
          className="absolute top-1/2  -translate-y-1/2 right-4"
        >
          {Number(price).toFixed(2)}$
        </motion.span>
      </button>
    </a>
  );
});
export default Interface;

import { ReactNode } from 'react';
function StaggerAnime({
  children,
  delay,
}: {
  delay: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={{
        visible: {
          opacity: 1,
          transition: {
            type: 'spring',
            delay,
          },
        },
        hidden: {
          opacity: 0,
        },
      }}
      animate="visible"
      initial="hidden"
    >
      {children}
    </motion.div>
  );
}
