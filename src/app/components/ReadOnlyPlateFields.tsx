"use client";

import { cn } from "@udecode/cn";
import { Plate } from "@udecode/plate-common";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Editor } from "@/components/plate-ui/editor";
import { plugins } from "@/lib/plate/plate-plugins";
import { PLATE_INITIAL_VALUES } from "../const/plateInitialValues";

function ReadOnlyPlateFields({ className }: { className?: string }) {
  const initialValues = PLATE_INITIAL_VALUES;

  return (
    <div className={className}>
      <DndProvider backend={HTML5Backend}>
        <Plate
          plugins={plugins}
          initialValue={initialValues}
          onChange={(value) => {
            const plateContent = JSON.stringify(value);
            localStorage.setItem("plateContent", plateContent);
          }}
        >
          <div
            className={cn(
              "relative",
              "[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4"
            )}
          >
            <Editor
              className="px-2 [&_*]:!mt-0 [&_*]:!leading-none"
              autoFocus
              focusRing={false}
              variant="ghost"
              size="md"
              readOnly
            />
          </div>
        </Plate>
      </DndProvider>
    </div>
  );
}

export default ReadOnlyPlateFields;
