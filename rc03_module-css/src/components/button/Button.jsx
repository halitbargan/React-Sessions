import btnStyle from "./button.module.css";

//* Eğer CSS'deki class adi kebap-case seklinde yazilmis ise
//* module ile bu class'a erismek icin ornekte goruldugu gibi
//* koseli parentez ile erisim yapilir.Koseli parentez erisimi
//* en garanti yontemdir.

//* ORN:moduleName["class-adi"]

const Button = ({btnName}) => {
  return (
    <div className= {btnStyle["title"]}>
        <button className={btnStyle["btn-blue"]}>{btnName}</button>
    </div>
  )
}

export default Button