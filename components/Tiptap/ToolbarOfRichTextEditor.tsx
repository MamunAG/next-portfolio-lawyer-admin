/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useCallback } from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
  Minus,
  Link2,
} from "lucide-react";
import Link from "@tiptap/extension-link";

type Props = {
  editor: Editor | null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ToolbarOfRichTextEditor = ({ editor }: Props) => {
  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);

  if (!editor) {
    return null;
  }
  return (
    <div
      className="px-3 py-2 rounded p-1-tl-md p-1-tr-md flex justify-between items-start
    gap-5 w-full flex-wrap border border-gray-700"
    >
      <div className="flex justify-start items-center gap-2 w-full lg:w-10/12 flex-wrap ">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "bg-slate-700 text-white rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <Underline className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <Strikethrough className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <Heading2 className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 3 }).run();
          }}
          className={
            editor.isActive("heading", { level: 3 })
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <Heading3 className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 4 }).run();
          }}
          className={
            editor.isActive("heading", { level: 4 })
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <Heading4 className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 5 }).run();
          }}
          className={
            editor.isActive("heading", { level: 5 })
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <Heading5 className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 6 }).run();
          }}
          className={
            editor.isActive("heading", { level: 6 })
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <Heading6 className="w-4 h-4" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive("blockquote")
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <Quote className="w-4 h-4" />
        </button>
        {/* <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setCode().run();
          }}
          className={
            editor.isActive("code")
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1"
          }
        >
          <Code className="w-4 h-4" />
        </button> */}
        <button
          className="icon"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600 p-1 hover:bg-slate-700 hover:text-white p-1 hover:rounded p-1"
          }
        >
          <Undo className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600  hover:bg-slate-700 hover:text-white  hover:rounded p-1"
          }
        >
          <Redo className="w-4 h-4" />
        </button>
        <button
          onClick={setLink}
          className={
            editor.isActive("link")
              ? "bg-slate-700 text-white  rounded p-1"
              : "text-slate-600  hover:bg-slate-700 hover:text-white  hover:rounded p-1"
          }
        >
          <Link2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ToolbarOfRichTextEditor;
