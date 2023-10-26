import { easeOut } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { scrollAtom } from './scrollAtom';
function useScrollPage() {
  const scroll = useRecoilValue(scrollAtom);

  return easeOut(scroll);
}

export default useScrollPage;
