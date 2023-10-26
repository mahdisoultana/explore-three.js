import { useTexture } from '@react-three/drei';

function useTexturesModel(
  rootTexture: string,
  addons?: { [key: string]: string },
) {
  const texture = useTexture({
    map: `${rootTexture}/base.jpg`,
    normalMap: `${rootTexture}/normal.jpg`,
    roughnessMap: `${rootTexture}/roughness.jpg`,
    aoMap: `${rootTexture}/ambient.jpg`,
    ...addons,
  });
  return texture;
}

export default useTexturesModel;
