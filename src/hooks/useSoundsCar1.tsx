//@ts-ignore
import useSound from 'use-sound';

export const useSoundsCar1 = (mouseRate = 2.5) => {
  const [navPlay, { stop: navStop }] = useSound(
    '/sounds/car1/button-click.mp3',
    {
      interrupt: true,
    },
  );
  const [mouseClickPlay, { mouseClickStop }] = useSound(
    '/sounds/car1/mouse-click.mp3',
    {
      playbackRate: mouseRate,
      volume: mouseRate !== 2.5 ? 0.4 : 1,
      interrupt: true,
    },
  );

  return { navPlay, navStop, mouseClickPlay, mouseClickStop };
};

export const useBackgroundMusic = (open: boolean) => {
  const [carMusicPlay, { carMusicStop }] = useSound(
    '/sounds/car1/car motivation scolling .mp3',
    {
      volume: open ? 0.5 : 0.1,
      playbackRate: open ? 0.5 : 1,
    },
  );
  return { carMusicPlay, carMusicStop };
};
