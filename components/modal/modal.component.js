import { useRouter } from "next/router";
import s from "./Modal.module.scss";
import { useState } from "react";
import Link from "next/link";
import translate from "translate";

const Modal = ({ dream, message, linkTo }) => {
  const router = useRouter();
  const style = message === "Success" ? true : false;

  const [visibility, setVisibility] = useState(1);

  const [bobus, vobus] = useState(null);

  if (!message) return;
  if (!visibility) return;

  const checkTranslation = async () => {
    if(bobus) return;
    console.log(vobus)
    if (message.length > 10) {
      const translated = await translate(message, { from: "la" });
      vobus(translated);
    }
  };

  return (
    <div
      className={s.modalBox}
      style={
        style
          ? { backgroundImage: "url(/success.jpg)" }
          : { backgroundImage: "url(/failure.jpg)" }
      }
    >
      <div
        className={s.modal}
        style={
          style
            ? { backgroundColor: "#6c3ef7" }
            : { backgroundColor: "#868e96" }
        }
      >
        {" "}
        <span onClick={(e) => checkTranslation()}> {bobus || message} </span>{" "}
        <div className={s.exit}>
          {" "}
          <a href="/"> X </a>
        </div>{" "}
        {dream ? (
          <div className={s.seeDream}>
            <a href={`/dreams/${dream._id}`}>Check dream</a>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Modal;
