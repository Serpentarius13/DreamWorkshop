import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import DreamItem from "../../components/dreamItem/dream.component";

import { useQuery } from "@apollo/client";

import { gql } from "@apollo/client";

const query = gql`
  query Query {
    getAll {
      name
      time
      email
      dreamName
      description
      _id
    }
  }
`;

const link = {
  prev: null,
  next: null,
};

const DreamSingle = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery(query);

  const [dream, setDream] = useState(null);

  const [linkState, setLinkState] = useState(link);

  useEffect(() => {
    if (data) {
      const getAlled = data.getAll;
      const index = getAlled.indexOf(dream);

      const prev = getAlled[index - 1];
      const next = getAlled[index + 1];

      setLinkState({ prev, next });
    }
  }, [dream]);

  useEffect(() => {
    if (data) {
      console.log(data);
      const dreams = data.getAll;
      const dream = dreams.find((el) => el._id === id);
      setDream(dream);
    }
  }, [data, id]);

  const { prev, next } = linkState;

  if (router.isFallback) return <div> Boba </div>;

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
