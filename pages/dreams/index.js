import client from "../../apollo-client";
import { gql } from "@apollo/client";
import Link from "next/link";

import DreamPage from "../../components/dreamPage/dreamPage.component";

import { useQuery } from "@apollo/client";

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

const DreamReel = () => {
  const { data, loading, error } = useQuery(query);


  return <>{data && <DreamPage dreams={data.getAll}></DreamPage>}</>;
};

export default DreamReel;

// export async function getServerSideProps() {
//   const data = await getDreams();
//   return {
//     props: {
//       dreams: data,
//     },
//     revalidate: 30,
//   };
// }
