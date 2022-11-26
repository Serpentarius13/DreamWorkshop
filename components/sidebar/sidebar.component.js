import Link from "next/link";
import { useRouter } from "next/router";
import s from "./sidebar.module.scss";

const Sidebar = ({ children }) => {
  const pathname = useRouter().pathname !== "/";
  return (
    <>
      {pathname ? (
        <div className={s.sidebar}>
          <div className={s.main}>
            <Link className={s.link} href="/"> Main menu</Link>{" "}
          </div>
          <div className={s.auxi}>
            <Link className={s.link} href="/write"> Write dream </Link>
            <Link className={s.link} href="/dreams"> Check dreams</Link>
          </div>
        </div>
      ) : (
        ""
      )}
      {children}
    </>
  );
};

export default Sidebar;
