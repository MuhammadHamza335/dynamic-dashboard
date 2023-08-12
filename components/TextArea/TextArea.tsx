interface Props {
  title: string;
  number: number;
  price: string;
  percentage: number;
  totalPrice: string;
}

const TextArea: React.FC<Props> = ({
  title,
  number,
  price,
  percentage,
  totalPrice,
}) => {
  return (
    <div className="flex flex-col bg-white p-4 border border-slate-50">
      <div className="flex items-end">
        <p className="font-bold text-black">{title}</p>
        <p className="text-xs ml-2 text-black">({number})</p>
      </div>
      <div className="h-0.5 bg-gray-200 my-2"></div>
      <p className="text-2xl text-black">
        <span className="font-bold">$</span>
        {price}
      </p>
      <div className="flex justify-between mt-5">
        <p className="text-black">({percentage}%)</p>
        <p className="text-black">(${totalPrice})</p>
      </div>
    </div>
  );
};

export default TextArea;
