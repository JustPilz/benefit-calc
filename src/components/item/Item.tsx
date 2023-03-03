import clsx from "clsx";
import { ChangeEvent } from "react";
import { HiTrash } from "react-icons/hi";
import IconButton from "../buttons/IconButton";
import Input from "../input/Input";

type ItemProps = {
  id: string;
  mass: number | "";
  price: number | "";
  perNum: number;
  handleFieldChange: (
    id: string,
    field: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  removeItem: (id: string) => void;
  itemsLength: number;
  profitable: boolean;
};

const Item = ({
  id,
  mass,
  price,
  perNum,
  handleFieldChange,
  removeItem,
  itemsLength,
  profitable,
}: ItemProps) => {
  const tdClassName = "item item-short py-1";

  const perStr = +perNum.toFixed(2) || 0;

  const per = perNum ? `${perStr} ₽` : "";

  const profitableClassName = "border-green-500 bg-green-50";

  return (
    <div key={id} className={clsx("flex flex-row gap-x-4 gap-y-2 px-2")}>
      <span className={tdClassName}>
        <Input
          type="number"
          value={mass}
          onChange={handleFieldChange(id, "mass")}
          className={clsx(profitable && profitableClassName)}
        />
      </span>
      <span className={tdClassName}>
        <Input
          type="number"
          value={price}
          onChange={handleFieldChange(id, "price")}
          className={clsx(profitable && profitableClassName)}
        />
      </span>
      <span
        className={clsx(
          tdClassName,
          "max-w-[80px] truncate text-base",
          profitable && "text-green-600"
        )}
      >
        {per}
      </span>
      <span className={clsx(tdClassName, "max-w-fit")}>
        <IconButton
          onClick={() => removeItem(id)}
          variant="outline"
          className="w-10"
          icon={HiTrash}
          disabled={itemsLength <= 2}
        />
      </span>
    </div>
  );
};

export default Item;
