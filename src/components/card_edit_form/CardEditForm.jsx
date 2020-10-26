import React from "react";
import Button from "../button/Button";
import ImgFileInput from "../img_file_input/ImgFileInput";
import styles from "./CardEditForm.module.css";

const CardEditForm = ({ card }) => {
  const {
    name,
    company,
    title,
    message,
    theme,
    fileName,
    fileURL,
    email,
  } = card;
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea className={styles.textarea} name="message" value={message} />
      <div className={styles.fileInput}>
        <ImgFileInput />
      </div>
      <Button name="Deleate" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
