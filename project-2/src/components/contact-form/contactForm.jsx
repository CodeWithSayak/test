import Buttons from "../button/Bottons";
import styles from "./contactform.module.css";
import { BiSolidMessageAltDots } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {


  const onSubmit = (event) => {
    event.preventDefault();

    name = "text" , event.target[0];


    console.log();
    console.log();
    console.log("text" , event.target[2]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Buttons
            text="VIA SUPPORT CHAT"
            icon={<BiSolidMessageAltDots fontSize="24px" />}
          />
          <Buttons
            text="VIA CALL"
            icon={<MdContactPhone fontSize="24px" />}
          />
        </div>
        <Buttons         
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="name">Email</label>
            <input type="text" name="Email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="name">Text</label>
            <textarea name="Text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Buttons text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="./images/Service 24_7-pana 1.png" alt="model" />
      </div>
    </section>
  );
};

export default ContactForm;
