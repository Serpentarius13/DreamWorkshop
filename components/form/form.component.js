import { useState } from "react";
import Modal from "../modal/modal.component";
import s from "./Form.module.scss";

const dreamForm = {
  name: "",
  email: "",
  time: "",
  dreamName: "",
  description: "",
};

const DreamForm = ({ sendHandler }) => {
  const [dreamState, setDreamState] = useState(dreamForm);
  const { name, email, time, dreamName, description } = dreamState;

  const [modal, setModal] = useState(null);

  const inputHandle = (event) => {
    const { name, value } = event.target;

    setDreamState({ ...dreamState, [name]: value });
  };

  const submitHandle = async (event) => {
    event.preventDefault();

    try {
      await sendHandler({ variables: dreamState });
    } catch (err) {

      setModal("Try again later please.");
    }
  };

  if (modal) return <Modal message={modal} />;

  return (
    <div className={s.formContainer}>
      <form className={s.formBox} onSubmit={submitHandle}>
        <h4> Optional fields </h4>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Your name"
          onChange={inputHandle}
        />{" "}
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Your email"
          onChange={inputHandle}
        />
        <div className={s.timed}>
          <label> Time when dream occured </label>
          <input
            type="time"
            name="time"
            value={time}
            placeholder="Time when dream occured"
            onChange={inputHandle}
          />
        </div>
        <h4> Required fields </h4>
        <input
          type="text"
          name="dreamName"
          value={dreamName}
          placeholder="Dream name"
          onChange={inputHandle}
          required
        />
        <textarea
          type="text"
          name="description"
          value={description}
          placeholder="Dream description"
          onChange={inputHandle}
          required
        />
        <button type="submit"> Send dream </button>
      </form>
    </div>
  );
};

export default DreamForm;
