import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/Editor";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Preview from "../preview/Preview";
import styles from "./Maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Byeonguk",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "quddnr005@naver.com",
      message: "go for it",
      fileName: "byeonguk",
      fileURL: null,
    },
    {
      id: "2",
      name: "Vins2",
      company: "Miree",
      theme: "dark",
      title: "Software Engineer",
      email: "quddnr005@naver.com",
      message: "go for it",
      fileName: "byeonguk",
      fileURL: "byeonguk.png",
    },
    {
      id: "3",
      name: "Byeonguk3",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "quddnr005@naver.com",
      message: "go for it",
      fileName: "byeonguk",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    console.log(card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
