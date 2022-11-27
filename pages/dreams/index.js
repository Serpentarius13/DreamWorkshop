import DreamPage from "../../components/dreamPage/dreamPage.component";
import getDreams from "../../utils/getDreams";

import Loader from "../../components/loading/loader.component";
import Modal from "../../components/modal/modal.component";

const DreamReel = () => {
  const { data, loading, error } = getDreams();

  if (loading) return <Loader></Loader>;
  if (error) return <Modal message={"Try again later"}></Modal>;

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
