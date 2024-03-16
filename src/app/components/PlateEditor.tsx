"use client";

import { cn } from "@udecode/cn";
import { Plate } from "@udecode/plate-common";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Editor } from "@/components/plate-ui/editor";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { plugins } from "@/lib/plate/plate-plugins";
import { ToolbarGroup } from "@/components/plate-ui/toolbar";
import { MarkToolbarButton } from "@/components/plate-ui/mark-toolbar-button";
import {
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { Icons, iconVariants } from "@/components/icons";
import { MARK_BG_COLOR, MARK_COLOR } from "@udecode/plate-font";
import { ColorDropdownMenu } from "@/components/plate-ui/color-dropdown-menu";
import { AlignDropdownMenu } from "@/components/plate-ui/align-dropdown-menu";
import { TurnIntoDropdownMenu } from "@/components/plate-ui/turn-into-dropdown-menu";
import { PLATE_INITIAL_VALUES } from "../const/plateInitialValues";

function PlateEditor() {
  const initialValues = PLATE_INITIAL_VALUES

  return (
    <DndProvider backend={HTML5Backend}>
      <TooltipProvider>
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
            <FixedToolbar className="mb-14">
              <ToolbarGroup>
                <TurnIntoDropdownMenu />
                <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
                  <Icons.bold />
                </MarkToolbarButton>
                <MarkToolbarButton
                  tooltip="Italic (⌘+I)"
                  nodeType={MARK_ITALIC}
                >
                  <Icons.italic />
                </MarkToolbarButton>
                <MarkToolbarButton
                  tooltip="Underline (⌘+U)"
                  nodeType={MARK_UNDERLINE}
                >
                  <Icons.underline />
                </MarkToolbarButton>
                <ColorDropdownMenu nodeType={MARK_COLOR} tooltip="Text Color">
                  <Icons.color
                    className={iconVariants({ variant: "toolbar" })}
                  />
                </ColorDropdownMenu>
                <ColorDropdownMenu
                  nodeType={MARK_BG_COLOR}
                  tooltip="Highlight Color"
                >
                  <Icons.bg className={iconVariants({ variant: "toolbar" })} />
                </ColorDropdownMenu>
                <AlignDropdownMenu />
                {/* <IndentListToolbarButton nodeType={ListStyleType.Disc}/>
                <IndentListToolbarButton nodeType={ListStyleType.Initial}/> */}
              </ToolbarGroup>
            </FixedToolbar>

            <Editor
              className="px-2 [&_*]:!mt-0 [&_*]:!leading-none"
              autoFocus
              focusRing={false}
              variant="ghost"
              size="md"
            />
          </div>
        </Plate>
      </TooltipProvider>
    </DndProvider>
  );
}

export default PlateEditor;
