import TiptapRichTextEditor from "@/components/Tiptap/TiptapRichTextEditor";
import { Button } from "@/components/ui/button";
import React, { MouseEventHandler } from "react";
import { FiArrowDown, FiArrowUp, FiTrash } from "react-icons/fi";

function TextSection({
  onRemove,
  onMoveUp,
  onMoveDown,
  onInputChange,
  section,
}: {
  onRemove: MouseEventHandler;
  onMoveUp: MouseEventHandler;
  onMoveDown: MouseEventHandler;
  onInputChange: (id: string, content: string | undefined) => void;
  section: { id: string; sectionType: string; text?: string };
}) {
  return (
    <div className="p-2 mt-3 bg-gray-100 rounded shadow-sm border">
      <div className="flex justify-between items-center">
        <div></div>
        <div>
          <Button onClick={onMoveUp} size="sm" variant="outline">
            <FiArrowUp></FiArrowUp> Move Up
          </Button>
          <Button
            onClick={onMoveDown}
            size="sm"
            className="ml-1"
            variant="outline"
          >
            <FiArrowDown></FiArrowDown> Move Down
          </Button>
          <Button
            onClick={onRemove}
            size="sm"
            className="ml-1"
            variant="destructive"
          >
            <FiTrash className="mr-2" /> Remove
          </Button>
        </div>
      </div>
      <div className="mt-1">
        <TiptapRichTextEditor
          onChange={(newContent: string) =>
            onInputChange(section.id, newContent)
          }
          content={section.text}
        />
      </div>
    </div>
  );
}

export default TextSection;
