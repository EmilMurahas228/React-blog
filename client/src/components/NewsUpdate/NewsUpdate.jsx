import React, { useEffect, useState } from "react";
import "./NewsUpdate.scss";

import "../InputTags/InputTags";

//components
import InputTags from "../InputTags/InputTags";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//lib
import axios from "axios";
//

function NewsUpdate({ state, id, title, text, img, tag, setState }) {
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateText, setUpdateText] = useState("");
  const [updateImg, setUpdateImg] = useState("");
  const [updateTag, setUpdateTag] = useState("");
  useEffect(() => {
    setUpdateTitle(title);
    setUpdateText(text);
    setUpdateImg(img);
    setUpdateTag(tag);
  }, [title, text, img, tag]);

  const handlerChange = (newText) => {
    setUpdateText(newText);
  };

  const handlerUpdateNews = () => {
    axios.put(`http://localhost:3001/update/${id}`, {
      title: updateTitle,
      text: updateText,
      img: updateImg,
      tag: updateTag,
    });
  };

  const handlerChangeState = () => {
    setState(!state);
  };

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [
      { align: null },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
    [{ size: ["small", false, "large", "huge"] }],
    ["link", "image", "video", "formula"],
  ];
  return (
    <div className={state ? "news-update active" : "news-update"}>
      <div className="container">
        <div className="addNews__content">
          <div className="news-update__close" onClick={handlerChangeState}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L9 9M17 17L9 9M9 9L1 17M9 9L17 1"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <form className="addNews__form">
            <input
              className="addNews__form-title"
              type="text"
              placeholder="Введите название"
              onChange={(e) => setUpdateTitle(e.target.value)}
              defaultValue={updateTitle}
            />

            <ReactQuill
              value={updateText || ""}
              onChange={handlerChange}
              modules={{
                toolbar: toolbarOptions,
              }}
            />
            <InputTags setState={setUpdateTag} tagValue={updateTag} />
            <input
              className="addNews__form-url"
              type="text"
              placeholder="Введите ссылку на картинку"
              onChange={(e) => setUpdateImg(e.target.value)}
              defaultValue={updateImg}
            />
            <button className="addNews__form-btn" onClick={handlerUpdateNews}>
              Изменить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsUpdate;