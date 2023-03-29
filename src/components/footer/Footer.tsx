import { HiPlus } from "react-icons/hi";
import Button from "../buttons/Button";
import TextButton from "../buttons/TextButton";

type FooterProps = {
  addItem: () => void;
  clearItems: () => void;
};

export const Footer = ({ addItem, clearItems }: FooterProps) => {
  return (
    <div
      id="footer"
      className="mt-1 flex flex-row place-content-between bg-gray-50 py-2 px-2 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
    >
      <TextButton onClick={clearItems}>Очистить</TextButton>
      <Button variant="primary" leftIcon={HiPlus} size="sm" onClick={addItem}>
        Добавить
      </Button>
    </div>
  );
};

export default Footer;
