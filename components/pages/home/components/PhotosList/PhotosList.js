import useSWR from "swr";

import Image from "next/image";

import styles from "./PhotosList.module.css";

const ITEMS_TO_SHOW = 6;

const PhotosList = ({ index }) => {
  let photosData = [];

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `${process.env.API_URL}?sol=1000&page=${index + 1}&api_key=${
      process.env.API_KEY
    }`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  const { photos } = data;

  // get only n = ITEMS_TO_SHOW randomly
  const shuffledArray = photos.sort(() => 0.5 - Math.random());
  photosData = shuffledArray.slice(0, 6);

  const photosList = photosData.map((photoData) => (
    <div key={photoData.id}>
      <Image
        alt={photoData.img_src}
        src={photoData.img_src}
        width="480"
        height="480"
        className={styles.image}
      />
    </div>
  ));

  return <div className={styles.photosListWrapper}>{photosList}</div>;
};

export default PhotosList;
