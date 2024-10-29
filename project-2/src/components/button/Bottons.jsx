import { BiSolidMessageAltDots } from "react-icons/bi";
import styles from "./Bottons.module.css";

const Buttons = (props) => {
  const { isOutline , icon, text , ...rest } = props; // object destructuring 
  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Buttons;

/// use rest operators 🤡wait and see
