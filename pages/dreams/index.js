import client from "../../apollo-client";
import Link from "next/link";

import DreamPage from "../../components/dreamPage/dreamPage.component";
import getDreams from "../../utils/getDreams";

const DreamReel = () => {
  const { data, loading, error } = getDreams();

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
