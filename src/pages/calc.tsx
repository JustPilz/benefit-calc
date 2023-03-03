import clsx from "clsx";
import {
  useState,
  MouseEvent,
  TouchEvent,
  useCallback,
  ChangeEvent,
  useEffect,
} from "react";
import { HiPlus } from "react-icons/hi";

import Button from "@/components/buttons/Button";
import TextButton from "@/components/buttons/TextButton";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { COLOR, defaultItems, MAX_ITEMS, UNITS } from "../constant/constants";
import { ItemRow, Unit } from "../constant/types";
import { genRandomHash } from "@/utils";
import useModal from "@/components/alert/useModal";
import { useRoundRobinTraversal } from "@/hooks";
import Table from "@/components/table/Table";
import Item from "@/components/item/Item";

const calculatePosition = (array: ItemRow[]) => {
  // Filter out objects with negative mass or price values
  const filteredArray = array.filter((obj) => obj.mass >= 0 && obj.price >= 0);

  // Find the minimum value of price / mass
  const min = Math.min(
    ...filteredArray.map(({ price, mass }: ItemRow) => price / mass)
  );

  // Add index position based on quotient value order
  const newArray = array.map((obj, index) => {
    const quotient = obj.price / obj.mass;
    let position = -1;
    if (obj.mass >= 0 && obj.price >= 0) {
      position =
        quotient === min
          ? 0
          : filteredArray.filter((o) => o.price / o.mass < quotient).length;
    }
    return { ...obj, position };
  });

  return newArray;
};

export default function ComponentsPage() {
  const { openModal, Modal } = useModal();

  const [items, setItems] = useState<ItemRow[]>(defaultItems);

  const [unit, setUnit] = useState<Unit>("gr");
  const [perUnit, setPerUnit] = useState<Unit>("gr");

  const getNext = useRoundRobinTraversal(UNITS[unit].convertTo, perUnit);

  function changeUnit(
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
  ) {
    const target = e.target as HTMLButtonElement;
    const newUnit = target.id as Unit;
    setUnit(newUnit);
    if (!UNITS[newUnit].convertTo.includes(perUnit)) {
      setPerUnit(UNITS[newUnit].convertTo[0] as Unit);
    }
  }

  function switchPerUnit(
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
  ) {
    const i = getNext();

    setPerUnit(i);
  }

  const handleFieldChange = useCallback(
    (id: string, field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setItems((prevItems) => {
        const value = e.target.value.length > 0 ? Number(e.target.value) : -1;

        const tempItems = prevItems.map((item) =>
          item.id === id ? { ...item, [field]: value } : item
        );
        const r = calculatePosition(tempItems);
        console.log(r);
        return r;
      });
    },
    []
  );

  const clearItems = () => {
    setItems(defaultItems);
  };

  const addItem = () => {
    if (items.length == MAX_ITEMS) {
      return openModal(
        "Информация",
        `Можно сравнивать не больше ${MAX_ITEMS} позиций`
      );
    }
    setItems((prevItems) =>
      calculatePosition([
        ...prevItems,
        {
          id: genRandomHash(5),
          mass: -1,
          price: -1,
          position: -1,
        },
      ])
    );
  };

  const removeItem = (id: string) => {
    setItems((prevItems) =>
      calculatePosition([...prevItems.filter((item) => item.id !== id)])
    );
  };

  return (
    <Layout>
      <Seo
        templateTitle="Calc"
        description="Pre-built components with awesome default"
      />

      <main>
        <section className={clsx("bg-white", COLOR)}>
          <div
            className={clsx(
              "layout max-h-fit py-5",
              "mx-auto max-w-md",
              "text-black"
            )}
          >
            {/* <h1>За грамм</h1> */}
            {/* <ArrowLink direction="left" href="/">
              Назад
            </ArrowLink> */}

            <div className="flex flex-col flex-wrap gap-2">
              <p className={clsx("!mt-1 text-sm text-gray-600")}>
                Единица измерения
              </p>
              <div className="space-x-2">
                {Object.entries(UNITS).map(([key, value]) => (
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

            <div className="mt-4 w-full text-left">
              <div
                id="header"
                className="mb-1 flex flex-row gap-x-3 bg-gray-50 py-2 px-2 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
              >
                <span className="item font-semibold">{UNITS[unit].mass}</span>
                <span className="item font-semibold">Цена</span>
                <span className="item max-w-[80px] font-semibold">
                  {UNITS[unit].convertTo.length > 1 ? (
                    <TextButton isUpperCase onClick={switchPerUnit}>
                      За 1 {UNITS[perUnit].name}
                    </TextButton>
                  ) : (
                    `За 1 ${UNITS[perUnit].name}`
                  )}
                </span>
                <span className="item max-w-[38px]"></span>
              </div>
              {items.map(({ id, mass, price, position }, idx) => {
                const perNum =
                  price > 0 && mass > 0
                    ? (price / mass) * (UNITS[perUnit].coef / UNITS[unit].coef)
                    : 0;

                return (
                  <Item
                    key={id}
                    id={id}
                    mass={mass < 0 ? "" : mass}
                    price={price < 0 ? "" : price}
                    perNum={perNum}
                    handleFieldChange={handleFieldChange}
                    removeItem={removeItem}
                    itemsLength={items.length}
                    profitable={position === 0}
                  />
                );
              })}
              <div
                id="footer"
                className="mt-1 flex flex-row place-content-between bg-gray-50 py-2 px-2 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
              >
                <TextButton onClick={clearItems}>Очистить</TextButton>
                <Button
                  variant="primary"
                  leftIcon={HiPlus}
                  size="sm"
                  onClick={addItem}
                >
                  Добавить
                </Button>
              </div>
            </div>
            {/* <Table /> */}
          </div>
          <Modal />
        </section>
      </main>
    </Layout>
  );
}
