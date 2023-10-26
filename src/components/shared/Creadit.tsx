import { AnimatePresence, motion } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import { BiDonateHeart } from 'react-icons/bi';
import { BsInfoCircleFill } from 'react-icons/bs';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { bodyColors } from '../../weekEnds/projects/carConfigurator1/Model';
import { sheet } from '../../weekEnds/projects/carConfigurator1/ModelAnime';
import { selectedAtom } from '../../weekEnds/projects/carConfigurator1/atoms';
export const creditAtom = atom({
  key: 'creditAtom',
  default: false,
});
function CreditInfo() {
  const [creditOpen, setCreditOpen] = useRecoilState(creditAtom);
  const { body } = useRecoilValue(selectedAtom);
  const positionRef = useRef(0);
  useLayoutEffect(() => {
    if (creditOpen) {
      positionRef.current = sheet.sequence.position;
      sheet.sequence.play({
        range: [0, 33.3],
        iterationCount: Infinity,
        rate: 0.7,
      });
    } else {
      sheet.sequence.position = positionRef.current;
    }
  }, [creditOpen]);
  return (
    <div className="z-[111]">
      <span
        onClick={() => setCreditOpen((s) => !s)}
        className="w-5 drop-shadow-lg h-5 cursor-pointer   fixed bottom-10 left-6 z-[99] text-xl hover:opacity-50 "
        style={{
          color: bodyColors[body] == '#f1f1f1' ? 'black' : bodyColors[body],
        }}
      >
        <BsInfoCircleFill />
      </span>
      <AnimatePresence>
        {creditOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              animate: { opacity: 1 },
              exit: { opacity: 0, transition: { duration: 0.3 } },
              initial: { opacity: 0 },
            }}
          >
            <CreditUI />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
function CreditUI() {
  const { body } = useRecoilValue(selectedAtom);
  const setCreditOpen = useSetRecoilState(creditAtom);
  return (
    <div className=" top-0 left-0 fixed h-screen w-full">
      <span
        onClick={() => setCreditOpen(false)}
        className="absolute top-0 left-0 w-full h-full backdrop-blur bg-gray-400/70 hover:opacity-90 duration-700"
      />
      <motion.div
        variants={{
          animate: {
            y: 0,
            x: '-50%',
            opacity: 1,
            transition: { delay: 0.4, duration: 1 },
          },
          exit: { y: 100, opacity: 0, x: '-50%' },
          initial: { y: 100, x: '-50%', opacity: 0 },
        }}
        className="md:min-w-[500px] min-w-[320px] min-h-[300px] flex  justify-center  fixed md:top-4 left-1/2 -translate-x-1/2 rounded "
      >
        <span
          className="  w-full h-full  blur-lg backdrop-blur-sm absolute  rounded-xl   opacity-60 bg-gray-300 "
          style={{
            boxShadow: `1px 1px 1px ${bodyColors[body]} , 1px 1px 3px ${bodyColors[body]} , 1px 1px 9px ${bodyColors[body]}`,
          }}
        />
        <div className="relative p-4">
          <h1
            className="text-center text-xl py-2 flex items-center justify-center space-x-4  "
            style={{
              color: bodyColors[body],
              textShadow: `-2px 2px 0px  ${bodyColors[body]}50, 1px -1px 0px  #ff000050 `,
            }}
          >
            <p>Credit & Thanks</p>{' '}
            <span>
              <BiDonateHeart />
            </span>
          </h1>
          <div className="font-bold italic text-xs">
            <p className="p-1">
              i couldn't make all this happen without these people
            </p>
            <p className="font-normal ">
              thank you so much for truly being here in this world,all your help
              and !
            </p>

            <ul className="list-disc space-y-1  pl-8 pt-4">
              <li className="   space-x-2 text-blue-500 hover:text-blue-900 cursor-pointer ">
                <span className="underline underline-offset-2  ">
                  @SaraDrasner
                </span>
                <span className="text-gray-800 no-underline text-xs">
                  (SVG Essentials & Animation)
                </span>
              </li>
              {[
                { name: ' @jenkramer', at: 'CSS Course', link: '' },
                { name: ' KentCDots', at: 'EpicReact', link: '' },
                { name: ' RaynFolrance', at: 'ReactRouter', link: '' },
                { name: ' Kyle Simpson', at: 'Javascript Courses', link: '' },
                { name: ' Well Sentance', at: 'Javascript Courses', link: '' },
                { name: ' Estelle Weliame', at: 'CSS Courses', link: '' },
                {
                  name: ' SaraDrasner',
                  at: 'SVG Essentials & Animation',
                  link: '',
                },
                { name: ' Tyler Mcgecen', at: 'UI Dev', link: '' },
                {
                  name: ' Tanner linsley',
                  at: 'React Query',
                  link: 'https://twitter.com/tannerlinsley',
                },
                { name: 'Bad traversy', at: 'UI Dev', link: '' },
                {
                  name: ' Tyler Mcgecen',
                  at: 'Traversy Media Javascript/React',
                  link: '',
                },
                { name: 'Maximilian schwarzmüller', at: 'React', link: '' },
                { name: 'Scott Moss', at: 'GraphQl/Next', link: '' },
                { name: 'Maximilian schwarzmüller', at: 'React', link: '' },
              ].map((i, index) => (
                <li
                  key={index}
                  className="   space-x-2 text-blue-500 hover:text-blue-900 cursor-pointer "
                >
                  <a href={i.link} target="_blank">
                    <span className="underline underline-offset-2  ">
                      @{i.name}
                    </span>
                  </a>
                  <span className="text-gray-800 no-underline text-xs">
                    ({i.at})
                  </span>
                </li>
              ))}

              <li className="text-gray-900 mt-2 block space-x-2 ">
                <span className="text-blue-500"> .....</span>
                <span>and All supported friends </span>
              </li>
            </ul>
          </div>
          <div className="mt-6 space-y-2 text-xs font-bold">
            <h2
              className="text-sm"
              style={{ textShadow: '-1px 1px 0px ' + bodyColors[body] }}
            >
              Credit for this Project{' '}
            </h2>
            <ul className="list-disc">
              <li>
                3d Car at{' '}
                <a
                  href="https://sketchfab.com/3d-models/fictional-supercar-v12-goblin-0a20e49ad5774d778567cb5c3f345786"
                  className="text-blue-800 px-1"
                  target="_blank"
                >
                  @SketchFab
                </a>
                <a
                  href="http://creativecommons.org/licenses/by/4.0/"
                  className="text-gray-00 px-1 underline"
                  target="_blank"
                >
                  License
                </a>
                created by :
                <a
                  target="_blank"
                  href="https://sketchfab.com/ollitei"
                  className="text-blue-700 px-1 underline"
                >
                  @Ollitei
                </a>
              </li>
              <li>
                Inspiration :{' '}
                <a
                  href="https://sketchfab.com/3d-models/fictional-supercar-v12-goblin-0a20e49ad5774d778567cb5c3f345786"
                  className="text-blue-800 px-1 underline"
                  target="_blank"
                >
                  {' '}
                  pinterset @3d configurator
                </a>
              </li>
              <li>
                Sound :{' '}
                <a
                  href="https://sketchfab.com/3d-models/fictional-supercar-v12-goblin-0a20e49ad5774d778567cb5c3f345786"
                  className="text-blue-800 px-1 underline"
                  target="_blank"
                >
                  {' '}
                  Youtube @Creativity sound
                </a>
              </li>
            </ul>
            <li className="text-blue-500 px-1 underline italic">
              <a
                href="https://sketchfab.com/3d-models/fictional-supercar-v12-goblin-0a20e49ad5774d778567cb5c3f345786"
                target="_blank"
              >
                {' '}
                Created By MahdiSoultana
              </a>
            </li>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CreditInfo;
