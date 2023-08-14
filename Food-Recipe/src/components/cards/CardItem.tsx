import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  description: string;
  date: string;
}

const CardItem: React.FC<Props> = ({ id, title, description, date }) => {
  // const handleClick = () => {

  // }

  return (
    <Link to={`/details/${id}`}>
      <section className="max-w-6xl px-5 mx-auto mt-8 text-center">
        <div
          className="bg-[#999] rounded-lg shadow-md overflow-hidden"
          id="card"
        >
          <div
            className="bg-cover bg-center h-36 md:h-48 lg:h-56 xl:h-64"
            style={{ backgroundImage: `url(/item${id}.jpg)` }}
          ></div>
          <div className="p-4 sm:p-3 md:p-4 lg:p-5 xl:p-6">
            <h2 className="text-xl text-center text-custBlack font-normal mb-1 md:text-left">
              {title}
            </h2>
            <p className="text-gray-600 text-[11px] text-center md:text-left">
              {description.substring(0, 80)}...
            </p>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center px-4 mb-2">
              <div className="flex items-center">
                <img
                  src="/pp.jpg"
                  alt="A women cooking"
                  className="border rounded-[50%] w-12 h-12"
                />
                <div className="ml-2">
                  <p className="text-[8px] text-slate-600 text-left">
                    Maggy Dawson
                  </p>
                  <p className="text-[10px] text-gray-500 text-left">{date}</p>
                </div>
              </div>
              <img src="/fav.png" alt="" className="ml-1 w-[15px] h-[13px]" />
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default CardItem;
