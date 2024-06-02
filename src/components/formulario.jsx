import { Input } from "./elements/input";
import Style from "../assets/form/form.module.css"

export default function Formulario() {
  return(
    <>
      <form action="">
        <Input types={"text"} placeholders={"Nombre"} values={""} classe={Style.input} />
      </form>
    </>
  )
};
