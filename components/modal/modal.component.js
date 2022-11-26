import { useRouter } from "next/router";
import s from "./Modal.module.scss";
import { useState } from "react";
import Link from "next/link";

const Modal = ({ dream, message, linkTo }) => {
  const router = useRouter();
  const style = message === "Success" ? true : false;

  const [visibility, setVisibility] = useState(1);

  if (!message) return;
  if (!visibility) return;

  const routerGo = () => {
    setVisibility(null);
    router.push("/");
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
        <span> {message} </span>{" "}
        <div onClick={(e) => routerGo()} className={s.exit}>
          {" "}
          X
        </div>{" "}
        {dream ? (
          <div className={s.seeDream}>
            <a href={`/dreams/${dream._id}`}>
              Check dream
            </a>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Modal;
