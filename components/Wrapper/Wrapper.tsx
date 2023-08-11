import { ReactNode } from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

interface WrapperProps {
  title: string;
  subtitle?: string;
  date: string;
  buttonNa: string[];
  children: ReactNode;
}
const button = ["LAST WEEK", "LAST TWO WEEKS", "LAST MONTH"];
const Wrapper: React.FC<WrapperProps> = ({
  title,
  subtitle,
  date,
  buttonNa,
  children,
}) => {
  return (
    <div className="inline-block">
      <div className="flex items-start bg-slate-100 py-2 px-5">
        <p className="font-bold text-black text-lg">{title}</p>
      </div>
      <div className="wrapper">
        <ButtonGroup buttons={buttonNa} />
        <div className="h-0.5 bg-gray-200 my-2"></div>
        {subtitle ? (
          <p className="font-bold text-black mt-3">{subtitle}</p>
        ) : null}

        <p className="text-lg text-gray-500">{date}</p>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
