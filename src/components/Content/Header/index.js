import style from "../Header/style.module.css";
export default function Header() {
  return (
    <>
      <div className={style.logo}>MSI 2020</div>
      <div className={style.title}>Hey!</div>
      <div className={style.subtitle}>Let’s try to find a joke for you:</div>
    </>
  );
}
