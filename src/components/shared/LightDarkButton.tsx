import { motion } from 'framer-motion';
import { atom, useRecoilState } from 'recoil';
export const LightDarkAtom = atom({
  key: 'LightDarkAtom',
  default: false,
});
export default function LightDarkButton({ className = '' }) {
  const [background, setBackground] = useRecoilState(LightDarkAtom);
  const classes = {
    dark: 'bg-black',
    light: 'bg-white',
  };
  return (
    <motion.button
      onClick={() => {
        setBackground((s) => !s);
      }}
      title={background ? 'off' : 'on'}
      className={`w-[4rem] h-[1.55rem] z-[100] rounded-full  ${
        !background ? classes.dark : classes.light
      }   group absolute group top-8 right-8 flex items-center hover:opacity-80 shadow ${
        !background ? 'shadow-black/50' : 'shadow-yellow-100/70'
      } ${className}`}
    >
      <motion.div
        animate={{
          x: background ? '-8%' : '123%',
          transition: { duration: 0.3 },
        }}
        className={`h-[1.8rem] w-[1.8rem] rounded-full  relative z-20 ${
          !background ? classes.light : classes.dark
        } `}
      />
      <div className="w-full h-full absolute top-0 left-0 flex items-center z-10">
        <span className="w-full h-full block">🌛</span>
        <span className="w-full h-full block">🌞</span>
      </div>
    </motion.button>
  );
}
