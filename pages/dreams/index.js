import client from "../../apollo-client";
import { gql } from "@apollo/client";
import Link from "next/link";
import { getDreams } from "../../getDreams";
import DreamPage from "../../components/dreamPage/dreamPage.component";

const DreamReel = ({ dreams }) => {
  console.log(dreams);
  return <DreamPage dreams={dreams}></DreamPage>;
};

export default DreamReel;

export async function getStaticProps() {
  const data = await getDreams();
  return {
    props: {
      dreams: data,
    },
    revalidate: 30,
  };
}
