import { motion } from 'framer-motion';
import { useEffect, useLayoutEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { creditAtom } from '../../../components/shared/Creadit';
import { useTl } from '../../../hooks/hooks';
import { useSoundsCar1 } from '../../../hooks/useSoundsCar1';
import { bodyColors } from './Model';
import { openAtom, selectedAtom } from './atoms';

function AnimationContent({ setPage }: any) {
  const tl = useTl();
  useEffect(() => {
    tl.current
      .fromTo(
        '.title',
        { opacity: 0 },
        {
          keyframes: {
            '0%': { opacity: 0, x: 0 },
            '50%': { opacity: 1, x: 0 },
            '100%': { opacity: 0, x: '80vw' },
          },

          scrollTrigger: {
            trigger: '.header',
            //  //markers: true,
            start: '0% top',
            end: '60% top',
            scrub: 1,
            pin: true,
          },
        },
      )
      .to(
        ['.card h3', '.card p'],

        {
          scrollTrigger: {
            trigger: '.card-container',
            ////markers: true,
            start: '-10% 50%',
            end: '100% 50%',
            scrub: 1,
            pin: true,
          },
          keyframes: [
            { opacity: 1, y: -150, ease: 'power4.out' },
            { opacity: 1 },
            { opacity: 0, x: 150, ease: 'power4.out' },
          ],
          stagger: 0.1,
        },
      );
  }, []);
  const open = useRecoilValue(openAtom);
  const creditOpen = useRecoilValue(creditAtom);
  return (
    <div className=" px-8" style={{ opacity: creditOpen || open ? 0 : 1 }}>
      <div className="h-screen  relative header ">
        <h1 className="absolute title italic  font-bold bottom-[20px] left-0 text-4xl opacity-0">
          Unleash the Velocity
        </h1>
      </div>
      <div className="h-screen   relative   card-container">
        <div className=" absolute bottom-1/2 right-0 w-[340px] p-4     card">
          {/* {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-20 h-20 bg-red-500"></div>
          ))} */}
          <h3 className="text-4xl mb-5 opacity-0">Experiment new Comfort </h3>
          <p className="italic font-light opacity-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            ipsum eaque vitae harum amet eum, deserunt quasi assumenda iusto
            velit! Cumque recusandae adipisci iure quam dolorem
          </p>
        </div>
      </div>

      <div className="h-screen"></div>
      <div className="h-[50vh]"></div>

      <StickComponent />
      <EndPara />
    </div>
  );
}
function EndPara() {
  const tl = useTl();
  const { mouseClickPlay: nextButtonSound } = useSoundsCar1(1.4);
  useLayoutEffect(() => {
    tl.current.fromTo(
      '.para',
      { opacity: 1 },
      {
        keyframes: {
          '0%': { opacity: 0, y: 50 },
          '20%': { opacity: 1, y: 0 },
          '40%': { opacity: 1, y: 0 },
          '60%': { opacity: 1, y: 0 },
          '80%': { opacity: 1 },
          '100%': { opacity: 0, y: 250, ease: 'power4.out' },
        },
        scrollTrigger: {
          trigger: '.end-para',
          //markers: true,
          start: 'top 40%',
          end: 'bottom top',
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      },
    );
    tl.current.to('.button-start ', {
      keyframes: [
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 0,
        },
        {
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        },
        {
          opacity: 1,
        },
        {
          opacity: 1,
        },
      ],
      duration: 1,
      scrollTrigger: {
        trigger: '.button-start',
        start: 'bottom 90%',
        end: '600px top',
        // markers: true,
        toggleActions: 'play pause resume reset',
        pin: true,
        scrub: true,
      },
    });
  }, []);
  const [open, setOpen] = useRecoilState(openAtom);
  useLayoutEffect(() => {
    if (!open) {
      tl.current.fromTo(
        '.button-start',
        {
          x: 30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: 'back.out(3)',
        },
      );
    }
  }, [open]);
  const { body } = useRecoilValue(selectedAtom);
  return (
    <div className="end-container relative">
      <motion.div className="h-[270vh]  flex justify-end items-start     end-para">
        <div
          className=" w-[370px] para   shadow shadow-gray-800 text-white p-4 rounded-lg opacity-0"
          style={{
            background: bodyColors[body],
            color: bodyColors[body] == '#f1f1f1' ? 'black' : 'white',
          }}
        >
          <h3 className="text-4xl mb-5  italic ">Customize it </h3>
          <p className="italic font-light  ">
            Customize it as you wish Make it Yours consectetur adipisicing elit.
            Mollitia ipsum eaque vitae harum amet eum, deserunt quasi assumenda
            iusto velit! Cumque recusandae adipisci iure quam dolorem
          </p>
        </div>
      </motion.div>

      <motion.button
        onClick={() => {
          nextButtonSound();
          tl.current.to('.button-start', {
            x: 30,
            ease: 'back.in(2)',
            opacity: 0,
            duration: 0.9,
            onComplete() {
              setOpen((s) => !s);
            },
          });
        }}
        className={` opacity-0  border black absolute bottom-[300px] right-[30px] px-8   bg-white py-2   rounded-full group button-start  hover:border-gray-500 shadow  `}
        style={{
          borderColor: bodyColors[body],
          color: bodyColors[body] == '#f1f1f1' ? 'black' : bodyColors[body],
          textShadow: '0px 0px 1px black',
        }}
      >
        Get Started
      </motion.button>
    </div>
  );
}
export default AnimationContent;

function StickComponent() {
  const tl = useTl();
  useLayoutEffect(() => {
    tl.current.fromTo(
      '.stick-content',
      { opacity: 0 },
      {
        keyframes: {
          '0%': { opacity: 0, y: 100, x: 0 },
          '20%': { opacity: 1, y: 0, x: 0 },
          '40%': { opacity: 1, y: 0, x: 0 },
          '60%': { opacity: 1, y: 0, x: -50, ease: 'power4.out' },
          '80%': { opacity: 0, y: 0, x: 250, ease: 'power4.out' },
        },

        duration: 3,
        scrollTrigger: {
          trigger: '.stick-content',
          ////markers: true,
          start: 'top 50%',
          end: 'bottom top',
          pin: true,
          scrub: 1,
        },
      },
    );
  }, []);
  return (
    <div className="h-screen  opacity-0 flex items-start justify-center pt-24 relative  stick-content  ">
      <motion.div className=" text-center flex justify-center items-center flex-col md:w-1/2  w-full    p-4   text-me   ">
        {/* {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-20 h-20 bg-red-500"></div>
          ))} */}
        <h3 className="text-4xl  mb-4 ">Experiment new Comfort </h3>
        <p className="italic font-light md:text-base text-xs ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          ipsum eaque vitae harum amet eum, deserunt quasi assumenda iusto
          velit! Cumque recusandae adipisci iure quam dolorem
        </p>
      </motion.div>
    </div>
  );
}
