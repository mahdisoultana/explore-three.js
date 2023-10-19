import { memo, useLayoutEffect, useRef, useState } from 'react';
// import Splitting from 'splitting';
// import 'splitting/dist/splitting-cells.css';
// import 'splitting/dist/splitting.css';

import { SplitText } from '@cyriacbr/react-split-text';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';
function HtmlContent() {
  const containerRef = useRef<any>(null);
  const [page, setPage] = useState(0);
  const setNav = useSetRecoilState(openAtom);
  const headers = [
    { words: ['Customize', 'your Car'] },
    { words: ['Base', 'Color'] },
    { words: ['Wheel ', 'type'] },
    { words: ['Brake', 'Color'] },
    { words: ['Accessories ', 'Car body'] },
    { words: [''] },
  ];
  const tl = useTl();

  const able = useRef(true);
  useLayoutEffect(() => {
    let ctx: gsap.Context;
    let tm = setTimeout(() => {
      //approach 1 useing gsap.context with classNaming with help of Ref Root
      ctx = gsap.context(() => {
        gsap.set('.char', { opacity: 0 });
        // if (page == 0) {
        //   tl.current.fromTo(
        //     '.container-configurator',
        //     {
        //       width: '0px',
        //       ease: 'power4.out',
        //     },
        //     {
        //       duration: 1.5,
        //       width: '330px',
        //       ease: 'power4.out',
        //     },
        //     '+=.5',
        //   );
        // }
        tl.current.to('.char', {
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
        });
        if (page >= 1) {
          colorTl(tl.current, false);
        }
        if (page == headers.length - 1) {
          feedbackScene();
        }

        tl.current.fromTo(
          '.button-next',
          {
            opacity: 0,
            x: 20,
          },
          {
            opacity: 1,
            x: 0,
            onComplete() {
              able.current = true;
            },
          },
          '-=1',
        );
      }, containerRef);
      // approach 2 using querySelectorAll from the dom
      // const char = h1Ref.current.querySelectorAll('.char');

      // gsap.set(char, { opacity: 0 });
      // tl.current = gsap.timeline({ duration: 1 });
      // tl.current.to(char, {
      //   opacity: 1,
      //   duration: 0.8,
      //   stagger: 0.08,
      // });
    }, 0);
    return () => {
      ctx?.revert();
      clearTimeout(tm);
    };
  }, [page]);

  return (
    <section
      className="flex w-full h-[99.9vh] font-Montserrat  overflow-hidden"
      ref={containerRef}
    >
      <div className="w-full h-full bg-gray-900/90"></div>
      <div className=" w-[330px] relative flex-shrink-0 h-full bg-white container-configurator">
        <LinesNav tl={tl.current} />

        <div className=" flex-col items-center justify-center   flex  h-full content-container   ">
          <h1 className="text-5xl pt-10   ml-auto pr-5 mt-auto text-right">
            {headers[page].words.map((word, key) => (
              <SplitText
                key={key}
                className={`${
                  key == 0 && 'block'
                } whitespace-nowrap flex space-x-4 justify-end`}
                LetterWrapper={({ children }: any) => (
                  <span
                    className={`char  whitespace-nowrap`}
                    style={{ opacity: 0 }}
                  >
                    {children}
                  </span>
                )}
              >
                {word}
              </SplitText>
            ))}
          </h1>
          <div className="h-24 mt-10 w-full bg-green-500/0">
            {page == 1 && <BaseColor />}
            {page == 2 && (
              <BaseColor
                colors={[
                  {
                    color: 'bg-indigo-500',
                    border: 'border-indigo-500',
                    caption: 'indigo material ',
                  },
                  {
                    color: 'bg-gray-400',
                    border: 'border-gray-400',
                    caption: 'gray palestine',
                  },
                  {
                    color: 'bg-black',
                    border: 'border-black',
                    caption: 'dark Metal',
                  },
                ]}
              />
            )}
            {page == 3 && (
              <BaseColor
                colors={[
                  {
                    color: 'bg-gray-600',
                    border: 'border-gray-600',
                    caption: 'gray palestine',
                  },
                  {
                    color: 'bg-black',
                    border: 'border-black',
                    caption: 'dark Metal',
                  },
                ]}
              />
            )}
            {page == 4 && (
              <BaseColor
                colors={[
                  {
                    color: 'bg-gray-600',
                    border: 'border-gray-600',
                    caption: 'gray palestine',
                  },
                  {
                    color: 'bg-black',
                    border: 'border-black',
                    caption: 'dark Metal',
                  },
                ]}
              />
            )}
            {page == 5 && (
              <article className="p-5 space-y-4 end-container  opacity-0">
                <h1 className="text-2xl -mt-28 capitalize mb-10">
                  Thank you for trying <br /> our configurator .
                </h1>
                <p className="pl-2 text-sm italic opacity-0">
                  i would love to hear your feedback :
                </p>
                <input
                  type="email"
                  className="email w-full p-2  placeholder:text-xs  border border-gray-900  rounded opacity-1 "
                  placeholder="email"
                />
                <textarea
                  placeholder="feedback"
                  name="feedback"
                  id="feedback"
                  className="h-[130px] w-full border  border-gray-900 rounded opacity-0 p-2 text-bold text-sm italic"
                ></textarea>
                <span className="text-lg text-center  p-4 flex items-center justify-center flex-col     absolute italic top-0  left-1/2 -translate-x-1/2 w-3/4 opacity-0  thank-you">
                  <p> Thank you very much </p>
                  <p> for your support</p>
                  <p>and your time </p>
                  <p> see you soon !</p>
                </span>
              </article>
            )}
          </div>

          <button
            className={`  mt-auto mb-10 border black relative px-6 ml-auto mr-6 bg-white py-1 border-black rounded-full group button-next opacity-0 hover:border-gray-500 shadow `}
            onClick={() => {
              if (able.current) {
                able.current = false;

                tl.current.to('.char', {
                  opacity: 0,
                  duration: 0.8,
                  stagger: -0.08,
                });
                if (page >= 1) {
                  colorTl(tl.current, true);
                }
                if (headers.length - 1 == page) {
                  feedbackScene(true);
                }
                tl.current
                  .fromTo(
                    '.btn-overlay',
                    {
                      opacity: 0,
                      scale: 0,
                    },
                    {
                      keyframes: [
                        {
                          scale: 1,
                          opacity: 1,
                        },

                        { opacity: 0 },
                      ],
                    },
                    '-=2.4',
                  )
                  .to(
                    '.button-next',
                    {
                      opacity: 0,
                      x: 10,
                      onComplete() {
                        setPage(() => {
                          if (headers.length - 1 <= page) {
                            tl.current
                              .to('.thank-you  ', {
                                opacity: 1,
                              })
                              .fromTo(
                                '.thank-you p',
                                { opacity: 0, scale: 1.1 },
                                {
                                  scale: 1,
                                  opacity: 1,
                                  stagger: 0.5,
                                  ease: 'back.out(3)',
                                },
                              )
                              .to('.thank-you p', {
                                opacity: 1,
                                duration: 2,
                                onComplete() {
                                  setNav(false);
                                  let tm: number;
                                  tm = setTimeout(() => {
                                    setPage(0);
                                    clearTimeout(tm);
                                  }, 3000);
                                },
                              });
                            // .to(
                            //   '.container-configurator',
                            //   {
                            //     duration: 1.5,

                            //     width: '0px',
                            //     ease: 'power4.out',
                            //   },
                            //   '+=.5',
                            // );
                            return page;
                          } else {
                            return page + 1;
                          }
                        });
                      },
                    },
                    '-=.2',
                  );
              }
            }}
          >
            <span className="-inset-3  bg-black/10   rounded-full absolute pointer-events-none btn-overlay opacity-0 scale-0 " />
            <span className="inset-0 bg-white group-active:bg-gray-100 duration-300 rounded-full absolute pointer-events-none" />
            <p className="relative">
              {headers.length - 1 === page
                ? 'Send '
                : headers.length - 2 === page
                ? 'complete ! as you wish it 💕 '
                : 'Next'}
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
function useTl(config?: gsap.TimelineVars | undefined) {
  return useRef<gsap.core.Timeline>(gsap.timeline(config));
}
const BaseColor = memo(
  ({
    onSelect = () => {},
    colors = [
      {
        color: 'bg-gray-100',
        border: 'border-gray-100',
        caption: ' light Metal',
      },
      {
        color: 'bg-red-400',
        border: 'border-red-400',
        caption: ' red Metal',
      },
      {
        color: 'bg-gray-400',
        border: 'border-gray-400',
        caption: 'light dark Metal',
      },
      { color: 'bg-black', border: 'border-gray-950', caption: 'dark Metal' },
    ],
  }: any) => {
    const [color, setColor] = useState(0);

    return (
      <article className=" ml-auto  mr-4 base-color-container opacity-0">
        <motion.li
          key={color}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [0, 1], y: 0 }}
          className=" text-left  flex justify-end items-center  capitalize list-disc text-gray-800 font-light"
        >
          {colors[color].caption}
        </motion.li>
        <div className=" flex justify-end space-x-4 pt-4 ">
          {colors.map((item, i) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              key={i}
              onClick={() => {
                setColor(i);

                onSelect(item);
              }}
              className={`relative w-7 h-7 cursor-pointer hover:shadow-black/10 hover:shadow-lg rounded-full color ${item.color} shadow shadow-black/40`}
            >
              {i == color && (
                <motion.span
                  layoutId={'underline'}
                  className={`absolute -top-[5px] -left-[5px] -right-[5px] -bottom-[5px]  border-2 rounded-full ${item.border}`}
                ></motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </article>
    );
  },
);
// // just in case for the moment we need it globally
const openAtom = atom({ key: 'openAtomCar1', default: false });

const LinesNav = memo(({ tl }: any) => {
  const [open, setOpen] = useRecoilState(openAtom);
  const [able, setAble] = useState(true);

  useLayoutEffect(() => {
    gsap.set('.container-configurator', { width: 0 });
  }, []);
  useLayoutEffect(() => {
    if (open) {
      tl.to('.container-configurator', {
        duration: 1.5,
        width: '330px',
        ease: 'power4.out',
      }).to(
        '.content-container',
        {
          duration: 1.5,
          opacity: 1,
          ease: 'power2.out',
          onComplete() {
            setAble(true);
          },
        },
        '-=.5',
      );
    } else {
      //
      tl.to('.content-container', {
        duration: 1,
        opacity: 0,
        ease: 'power4.out',
      }).to(
        '.container-configurator',
        {
          duration: 1,
          width: '0px',
          ease: 'power2.in',
          onComplete() {
            setAble(true);
          },
        },
        '-=.7',
      );
    }
  }, [open]);
  return (
    <motion.div
      animate={{
        opacity: able ? [0, 1] : [1, 0],
        x: able ? [50, 0] : [0, 50],
        stroke: open ? ['white', 'black'] : ['black', 'white'],
        transition: { duration: 0.3, type: 'spring' },
      }}
      onClick={() => {
        setOpen((s) => !s);
        setAble(false);
      }}
      className={`
      ${able ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none '}
         p-2 py-1   absolute top-6 right-6`}
    >
      <div className=" h-10 space-y-1 inline-flex p-2  flex-col items-center justify-center rotate-90">
        <LinesNav2 />
      </div>
    </motion.div>
  );
});

function LinesNav2() {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38.64 9.69"
      className="w-10 h-10 rotate-90"
    >
      <line className="cls-1" y1="0.5" x2="38.64" y2="0.5" strokeWidth={3} />
      <line className="cls-1" y1="9.19" x2="38.64" y2="9.19" strokeWidth={3} />
    </svg>
  );
}

function colorTl(tl: gsap.core.Timeline, reverse: boolean) {
  if (reverse) {
    tl.fromTo(
      '.color',
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: 10,
        stagger: -0.2,
        duration: 0.4,
        ease: 'back.in(4)',
      },
      '-=.1',
    ).fromTo(
      '.base-color-container',
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -5,
      },
      '-=.1',
    );
  } else {
    tl.fromTo(
      '.base-color-container',
      {
        opacity: 0,
        y: -5,
      },
      { opacity: 1, duration: 1.2, y: 0, ease: 'back.out(3)' },
      '-=.1',
    ).fromTo(
      '.color',
      {
        opacity: 0,
        y: -5,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.22,
        duration: 1.4,
        ease: 'back.out(3)',
      },
      '-=.1',
    );
  }
  return tl;
}

export default HtmlContent;

function feedbackScene(reverse: boolean) {
  const tl = gsap.timeline();
  if (reverse) {
    tl.to('.end-container textarea', { opacity: 0, y: -10 })
      .to('.end-container .email', { opacity: 0, y: 10 })
      .to('.end-container p', { opacity: 0, y: 10 })
      .to('.end-container h1', { opacity: 0, y: 10 });
  } else {
    tl.fromTo(
      '.end-container',
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 1 },
      'labelEnd',
    )
      .fromTo(
        '.end-container p',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
        'labelEnd+=.2',
      )
      .fromTo('.email', { opacity: 0, y: -5 }, { opacity: 1, y: 0 }, '-=.4')
      .fromTo(
        '.end-container textarea',
        { opacity: 0, y: -5 },
        { opacity: 1, y: 0 },
      );
  }
  return tl;
}
