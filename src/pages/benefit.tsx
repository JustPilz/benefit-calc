import Seo from "@/components/Seo";
import useModal from "@/components/alert/useModal";
import TextButton from "@/components/buttons/TextButton";
import Footer from "@/components/footer/Footer";
import Item from "@/components/item/Item";
import Layout from "@/components/layout/Layout";
import ArrowLink from '@/components/links/ArrowLink';
import UnitsList from "@/components/units-list/UnitsList";
import { useRoundRobinTraversal } from "@/hooks";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { genRandomHash } from "@/utils";
import { calculatePosition } from "@/utils/calculatePosition";
import clsx from "clsx";
import { ChangeEvent, MouseEvent, TouchEvent, useCallback } from "react";
import { COLOR, MAX_ITEMS, UNITS, defaultItems } from "../constant/constants";
import { ItemRow, Unit } from "../constant/types";

export default function Calc() {
  const { openModal, Modal } = useModal();

  const [items, setItems] = useLocalStorage<ItemRow[]>("items", defaultItems);
  const [unit, setUnit] = useLocalStorage<Unit>("unit", "gr");
  const [perUnit, setPerUnit] = useLocalStorage<Unit>("perUnit", "gr");

  const getNextPerUnit = useRoundRobinTraversal(UNITS[unit].convertTo, perUnit);

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

  const switchPerUnit = (
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>
  ) => {
    const newPerUnit = getNextPerUnit();

    setPerUnit(newPerUnit);
  };

  const handleFieldChange = useCallback(
    (id: string, field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setItems((prevItems) => {
        const value = e.target.value.length > 0 ? Number(e.target.value) : -1;

        const tempItems = prevItems.map((item) =>
          item.id === id ? { ...item, [field]: value } : item
        );
        const items = calculatePosition(tempItems);

        return items;
      });
    },
    []
  );

  const clearItems = useCallback(() => {
    setItems(defaultItems);
  }, [items]);

  const addItem = useCallback(() => {
    console.log(items.length);
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
  }, [items]);

  const removeItem = useCallback(
    (id: string) => {
      setItems((prevItems) =>
        calculatePosition([...prevItems.filter((item) => item.id !== id)])
      );
    },
    [items]
  );

  return (
    <Layout>
      <Seo
        templateTitle="Benefit Calculator"
        description="Benefit calculator"
      />

      <main>
        <section className={clsx("bg-white", COLOR)}>
          <div
            className={clsx(
              "layout max-h-fit py-5",
              "mx-auto max-w-md",
              "text-black",
              "flex flex-col gap-4"
            )}
          >
            <ArrowLink direction="left" href="/">
              Назад
            </ArrowLink>

            <div>
              <UnitsList units={UNITS} changeUnit={changeUnit} unit={unit} />
              <div className="mt-4 w-full text-left">
                <div
                  id="header"
                  className="mb-1 flex flex-row gap-x-3 bg-gray-50 py-2 px-2 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                >
                  <span className="item font-semibold">Цена</span>
                  <span className="item font-semibold">{UNITS[unit].mass}</span>
                  <span className="item max-w-[80px] font-semibold">
                    {UNITS[unit].convertTo.length > 1 ? (
                      <TextButton isUpperCase onClick={switchPerUnit}>
                        За {UNITS[perUnit].name}
                      </TextButton>
                    ) : (
                      `За ${UNITS[perUnit].name}`
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
                <Footer clearItems={clearItems} addItem={addItem} />
              </div>
            </div>
          </div>
          <Modal />
        </section>
      </main>
    </Layout>
  );
}
