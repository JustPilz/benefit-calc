import { HiTrash } from "react-icons/hi";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import Input from "../input/Input";

const tableRowHeader =
  "table-row bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400";

const tableRow =
  "table-row bg-white px-2 dark:border-gray-700 dark:bg-gray-800";

const tableCell = "table-cell py-2 px-2 font-semibold border";

const lastColumn = "bg-red-50 w-4";

const footer =
  "mt-2 flex flex-row place-content-between bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400";

const Table = () => {
  return (
    <>
      <section className="table w-full">
        <header className={tableRowHeader}>
          <span className={tableCell}>Column A</span>
          <span className={tableCell}>Column B</span>
          <span className={tableCell}>Column C</span>
          <span className={`${tableCell} ${lastColumn}`}></span>
        </header>
        <div className={tableRow}>
          <div className={tableCell}>
            <Input type="number" />
          </div>
          <div className={tableCell}>
            <Input type="number" />
          </div>
          <div className={tableCell}>
            <Input type="number" />
          </div>
          <div className={`${tableCell} ${lastColumn}`}>
            <Button>w</Button>
          </div>
        </div>
        <div className={tableRow}>
          <div className={tableCell}>
            <Input type="number" />
          </div>
          <div className={tableCell}>
            <Input type="number" />
          </div>
          <div className={tableCell}>
            <Input type="number" />
          </div>
          <div className={`${tableCell} ${lastColumn}`}>
            <IconButton onClick={() => {}} variant="outline" icon={HiTrash} />
          </div>
        </div>
      </section>
      <div className={footer}>
        <div className={tableCell}>Text of column C</div>
        <div className={tableCell}>Text of column D</div>
      </div>
    </>
  );
};

export default Table;
