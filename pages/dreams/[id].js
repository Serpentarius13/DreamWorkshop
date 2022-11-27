import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DreamItem from "../../components/dreamItem/dream.component";
import getDreams from "../../utils/getDreams";

const link = {
  prev: null,
  next: null,
};

const DreamSingle = () => {
  const router = useRouter();

  const { id } = router.query;
  const { data, loading, error } = getDreams();

  const [dream, setDream] = useState(null);

  const [linkState, setLinkState] = useState(link);
  const { prev, next } = linkState;

  useEffect(() => {
    if (data) {
      const dreams = data.getAll;
      const index = dreams.indexOf(dream);

      const prev = dreams[index - 1];
      const next = dreams[index + 1];

      setLinkState({ prev, next });
    }
  }, [dream]);

  useEffect(() => {
    if (data) {
      const dreams = data.getAll;
      const dream = dreams.find((dream) => dream._id === id);

      setDream(dream);
    }
  }, [data, id]);


  return <>{dream && <DreamItem prev={prev} next={next} data={dream} />}</>;
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

// export async function getServerSideProps({ params }) {
//   const data = await getDreams();

//   console.log(data);

//   return {
//     props: {
//       dreams: data,
//     },
//   };
// }

export default DreamSingle;
