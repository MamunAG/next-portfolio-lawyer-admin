/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

const Notes = ({ content }: { content: string }) => {
  //   useEffect(() => {
  //     const existingDataString = localStorage.getItem("myData");
  //     if (existingDataString) {
  //       const existingData = JSON.parse(existingDataString);
  //       setData(existingData);
  //     }
  //   }, []);

  return (
    <div className="max-w-6xl mx-auto px-5">
      <div>
        <div className="px-4 py-3 font-bold text-slate-950">Note -</div>
        <div
          className="ProseMirror whitespace-pre-line border border-slate-700 px-6 py-4 rounded-lg"
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Notes;
