"use client";

import PlateEditor from "./components/PlateEditor";
import ReadOnlyPlateFields from "./components/ReadOnlyPlateFields";

function Page() {
  return (
    <div>
      <div className="border-8 p-4 border-red-200">
        <PlateEditor />
      </div>
      <ReadOnlyPlateFields />
    </div>
  );
}

export default Page;
