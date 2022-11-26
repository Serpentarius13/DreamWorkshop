
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import DreamItem from "../../components/dreamItem/dream.component";
import { getDreams } from "./getDreams";


const link = {
  prev: null,
  next: null,
};

const DreamSingle = ({ dreams }) => {
  const router = useRouter();
  const { id } = router.query;
  const dream = dreams.find((el) => el._id === id);

  console.log(id, dream);

  console.log(dreams, dream);

  const [linkState, setLinkState] = useState(link);

  useEffect(() => {
    if (dreams) {
      const index = dreams.indexOf(dream);

      const prev = dreams[index - 1];
      const next = dreams[index + 1];

      setLinkState({ prev, next });
    }
  }, [dream]);

  const { prev, next } = linkState;

  if (router.isFallback) return <div> Boba </div>;

  return (
    <div className={s.appear}>
      {dream && <DreamItem prev={prev} next={next} data={dream} />}
    </div>
  );
};

// export async function getStaticPaths() {
//   const data = await getDreams();
//   console.log(data);

//   return {
//     paths: data.map((el) => ({
//       params: { id: el._id },
//     })),
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const data = await getDreams();

//   return {
//     props: {
//       dreams: data,
//     },
//   };
// }

export async function getServerSideProps({ params }) {
  const data = await getDreams();

  return {
    props: {
      dreams: data,
    },
  };
}

export default DreamSingle;
