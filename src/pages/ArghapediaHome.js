import SectionHeader from "../components/SectionHeader";
import SectionFooter from "../components/SectionFooter";
function ArghapediaHome() {
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-100">
        <SectionHeader />
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-row">
            <div className="flex flex-col w-[15%] h-fit border-2 text-center">
              <span className="border-b-2">Management</span>
              <div className="flex flex-col">
                <span>Part Management</span>
                <span>Machine History</span>
                <span>Password Bank</span>
              </div>
            </div>
            <div className="flex flex-col w-[15%] h-fit border-2 text-center">
              <span className="border-b-2">Verification</span>
              <div className="flex flex-col">
                <span>Account</span>
              </div>
            </div>
            <div className="flex flex-col w-[20%] h-fit border-2 text-center">
              <span className="border-b-2">Machine Data</span>
              <div className="flex flex-col">
                <span>Electrical Drawing New</span>
                <span>Machine Data Update</span>
                <span>Work Instruction</span>
                <span>Part Catalog</span>
                <span>Test Connection</span>
                <span>Manual</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div>Application</div>
            <div>Slitter Tools</div>
            <div>Utility</div>
          </div>
        </div>
        <SectionFooter />
      </div>
    </>
  );
}

export default ArghapediaHome;
