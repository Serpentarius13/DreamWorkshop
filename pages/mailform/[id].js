import { useState } from "react";
import { getDreams } from "../dreams/getDreams";
import useLocalStorage from "../../components/hooks/useLocalStorage";

import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

import s from "../../components/form/Form.module.scss";
import Modal from "../../components/modal/modal.component";

const form = {
  fromName: "",
  message: "",
  fromEmail: "",
};

const SendDream = ({ dreams }) => {
  const { id } = useRouter().query;

  const dream = dreams.find((el) => el._id === id);

  const { email, name, description, dreamName } = dream;

  const [formState, setFormState] = useState(form);

  const { message, fromName, fromEmail } = formState;

  const [sent, setSent] = useLocalStorage("sent", false);
  const [modal, showModal] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  const sendMail = (event) => {
    event.preventDefault();

    const to_name = name ? name : "Incognito";

    const from =
      fromEmail.length > 0
        ? `You can reply by sending email to: ${fromEmail}`
        : "";

    const forma = document.createElement("form");
    const object = {
      dreamName,
      description,
      to_email: email,
      to_name,
      from_name: fromName,
      message,
      from_email: from,
    };

    Object.keys(object).forEach((key) => {
      const input = document.createElement("input");
      input.name = key;
      input.value = object[key];
      forma.appendChild(input);
    });
    emailjs
      .sendForm(
        "service_bgnfi8b",
        "template_iymcter",
        forma,
        "pXNTzN4AOBU5GTAFw"
      )
      .then(
        (result) => {
          if (sent === id.toString()) {
            alert(
              "You have already sent email to this user. If he responded, you can continue talking with him on yourself."
            );
            return;
          } else {
            setSent(id.toString());
          }
          showModal("Success");
        },
        (error) => showModal("Failure")
      );
  };

  return (
    <div
      className={s.formContainer}
      // style={{ backgroundImage: "url(/email.jpg)" }}
    >
      <form className={s.formBox} onSubmit={sendMail}>
        <input
          type="email"
          name="fromEmail"
          value={fromEmail}
          placeholder="Your email for responses"
          onChange={handleChange}
        />
        <input
          type="text"
          name="fromName"
          value={fromName}
          placeholder="Your name"
          onChange={handleChange}
          required
          className={s.mailFormName}
        />
        <textarea
          type="text"
          name="message"
          value={message}
          placeholder="Your message for responses"
          onChange={handleChange}
          required
        />
        <button type="submit"> Click me! </button>
      </form>
      {modal ? <Modal message={modal} /> : ""}
    </div>
  );
};

export default SendDream;

export async function getServerSideProps({ params }) {
  const data = await getDreams();

  return {
    props: {
      dreams: data,
    },
  };
}
