import { useEffect, useState } from "react";

import useLocalStorage from "../../components/hooks/useLocalStorage";

import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

import s from "../../components/form/Form.module.scss";
import Modal from "../../components/modal/modal.component";

import getDreams from "../../utils/getDreams";

import Loader from "../../components/loading/loader.component";

import Head from "next/head";

const form = {
  fromName: "",
  message: "",
  fromEmail: "",
};

const SendDream = () => {
  const { id } = useRouter().query;

  const { data, loading, error } = getDreams();

  const [dream, setDream] = useState(null);

  useEffect(() => {
    if (data) {
      const dreams = data.getAll;

      const dream = dreams.find((el) => el._id === id);
      setDream(dream);
    }
  }, [data]);

  const { email, name, description, dreamName } = dream
    ? dream
    : { email: "", name: "", description: "", dreamName: "" };

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

    if (sent === id.toString()) {
      alert(
        "You have already sent email to this user. If he responded, you can continue talking with him on yourself."
      );
      return;
    }

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
          setSent(id.toString());

          showModal("Success");
        },
        (error) => showModal("Failure")
      );
  };

  if (loading) return <Loader></Loader>;
  if (error) return <Modal message={"Try again later"}></Modal>;

  if (dream)
    return (
      <div
        className={s.formContainer}
        style={{ backgroundImage: "url(/email.jpg)" }}
      >
        <Head>
          <title> Send email to dreamer </title>
          <meta
            name="description"
            content="Dream workshop - send email to dreamer"

          />
          <link rel="icon" href="/jung.jpg"></link>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
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

// export async function getServerSideProps({ params }) {
//   const data = await getDreams();

//   return {
//     props: {
//       dreams: data,
//     },
//   };
// }
