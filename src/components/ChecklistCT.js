import SectionHeader from "./SectionHeader";

function ChecklistCT() {
  return (
    <>
      <SectionHeader />
      <div className="grid grid-rows-8 h-screen">
        <div>
          <div className="h-full bg-red-200">Judul</div>
        </div>
        <div className="row-span-6 h-full bg-slate-400">tabel</div>
        <div className="row-span-1 h-full bg-slate-200">Footer</div>
      </div>
    </>
  );
}

export default ChecklistCT;
