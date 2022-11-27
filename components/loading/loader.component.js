import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.loaderBox}>
      {" "}
      <div className={s.loader}> </div>
    </div>
  );
};

export default Loader;
