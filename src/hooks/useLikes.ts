import { useLocalStorage } from "./useLocalStorage";

export const useLikes = () => {
  const [likes, setLikes] = useLocalStorage<Record<string, boolean>>(
    "likes",
    {}
  );

  const setLike = (id: string) => (value: boolean) => {
    setLikes({ ...likes, [id]: value });
  };
  return [likes, setLike] as const;
};
