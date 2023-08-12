import { ReactNode } from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

interface WrapperProps {
  title: string;
  subtitle?: string;
  date: string;
  buttonNa: string[];
  children: ReactNode;
  Width: number;
}

const Wrapper: React.FC<WrapperProps> = ({
  title,
  subtitle,
  date,
  buttonNa,
  children,
  Width,
}) => {
  const isWideScreen = Width > 600;

  return (
    <div className="inline-block" style={{ width: `${Width}px` }}>
      <div className="flex items-start bg-slate-100 py-2 px-5">
        <p className="font-bold text-black text-lg">{title}</p>
      </div>
      <div
        className={`wrapper ${isWideScreen ? "flex" : "block"}`}
        style={{ width: `${Width}px` }}
      >
        {Width > 600 ? (
          <>
            <div className="flex justify-between">
              {subtitle ? (
                <p className="font-bold text-black mt-3">{subtitle}</p>
              ) : null}
              <p className="text-lg text-gray-500">{date}</p>
              <ButtonGroup buttons={buttonNa} />
            </div>
          </>
        ) : (
          <>
            <ButtonGroup buttons={buttonNa} />
            <div className="h-0.5 bg-gray-200 my-2"></div>
            <div>
              {subtitle ? (
                <p className="font-bold text-black mt-3">{subtitle}</p>
              ) : null}
              <p className="text-lg text-gray-500">{date}</p>
            </div>
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
