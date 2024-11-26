/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolbarOfRichTextEditor from "./ToolbarOfRichTextEditor";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";

const TiptapRichTextEditor = ({ onChange, content }: any) => {
  console.log(content);

  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  const editor = useEditor({
    content: content,
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-slate-700 items-start w-full gap-1 font-medium rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full px-4">
      <ToolbarOfRichTextEditor editor={editor} />
      <EditorContent editor={editor} className="bg-white" />
    </div>
  );
};

export default TiptapRichTextEditor;
