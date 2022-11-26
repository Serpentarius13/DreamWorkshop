import s from "./Dream.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DreamItem = ({ data, size, prev, next }) => {
  const { name, email, time, dreamName, description, _id } = data;

  const router = useRouter().query.hasOwnProperty("id");

  console.log('bobus')


  console.log(name);
  return (
    <div className={size ? s.dreamSmallBox : s.backgrounded}>
      <div>
        {(name || time) && !size ? (
          <div className={s.additionals}>
            {name ? (
              <p>
                {" "}
                Author&apos;s name: <span> {name} </span>{" "}
              </p>
            ) : (
              ""
            )}
            {time ? <p> Date of dream: {time} </p> : ""}
          </div>
        ) : (
          ""
        )}
        {prev ? (
          <Link className={s.previous} href={`/dreams/${prev._id}`}>
            {" "}
            Previous{" "}
          </Link>
        ) : (
          ""
        )}
        {next ? (
          <Link className={s.next} href={`/dreams/${next._id}`}>
            {" "}
            Next{" "}
          </Link>
        ) : (
          ""
        )}

        <div className={s.info}>
          <h1>
            {!size ? "Dream name:" : ""} <span> {dreamName} </span>{" "}
          </h1>
          <h3> Dream text: </h3>
          <p> {description} </p>
        </div>

        {!router ? (
          <Link className={s.checkout} href={`/dreams/${_id}`}>
            {" "}
            Check the dream out{" "}
          </Link>
        ) : (
          ""
        )}

        {email && !size ? (
          <Link className={s.send} href={`/mailform/${_id}`}>
            {" "}
            Send email to the dreamer!{" "}
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DreamItem;
