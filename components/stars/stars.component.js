import { useState } from "react";

import stars from "./Stars.module.scss";

import axios from "axios";

import Modal from "../modal/modal.component";
import { endpoint } from "../../apollo-client";
import { gql, useQuery } from "@apollo/client";

const Stars = () => {
  const [modVis, setModVis] = useState(null);

  const { data, error, loading } = useQuery(gql`
    query Query {
      sentence
    }
  `);

  const pow = () => {
    if (data) setModVis(data.sentence);
  };

  return (
    <>
      {modVis ? <Modal message={modVis} /> : ""}
      <div className={stars.stars}>
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
        <div onClick={pow} className={stars.star} />
      </div>
    </>
  );
};

export default Stars;
