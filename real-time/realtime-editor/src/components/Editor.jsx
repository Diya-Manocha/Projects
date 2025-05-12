import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";

const TOOLBAR_OPTIONS = [
  ["bold", "italic", "underline"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["clean"],
];

export default function Editor() {
  const wrapperRef = useRef(null);
  const socketRef = useRef();
  const quillRef = useRef();

  useEffect(() => {
    const socket = io("http://localhost:3001");
    socketRef.current = socket;

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const editor = document.createElement("div");
    wrapperRef.current.innerHTML = "";
    wrapperRef.current.append(editor);

    const quill = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });

    quillRef.current = quill;

    quill.on("text-change", (delta, oldDelta, source) => {
      if (source !== "user") return;
      socketRef.current.emit("send-changes", delta);
    });

    socketRef.current.on("receive-changes", (delta) => {
      quill.updateContents(delta);
    });
  }, []);

  return <div className="container mx-auto mt-10" ref={wrapperRef}></div>;
}
