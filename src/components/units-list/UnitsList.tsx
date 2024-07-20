import { Unit, UnitData } from "@/constant/types";
import { MouseEvent, TouchEvent } from "react";
import Button from "../buttons/Button";

type UnitsListProps = {
  units: Record<Unit, UnitData>;
  changeUnit: (
    arg0: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
  ) => void;
  unit: Unit;
};

const UnitsList = ({ units, changeUnit, unit }: UnitsListProps) => {
  return (
    <div className="flex flex-col flex-wrap gap-2">
      <p className={"!mt-1 text-sm text-gray-600"}>Единица измерения</p>
      <div className="space-x-2">
        {Object.entries(units)
          .filter(([_, value]) => value.visible)
          .map(([key, value]) => (
            <Button
              key={key}
              id={key}
              onClick={changeUnit}
              variant={unit === key ? "primary" : "outline"}
            >
              {value.short}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default UnitsList;
