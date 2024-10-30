import "./Banner.css"
const Banner = ({handleCoin}) => {
  return (
    <div className="w-11/12 mx-auto bg-black rounded-lg mb-14 mt-28">
      <div className="flex items-center justify-center text-center flex-col banner p-10 text-white">
        <div>
          <img src="https://i.ibb.co.com/xHHQjh4/banner-main.png" alt="" />
        </div>
        <h2 className="font-bold text-3xl mt-5">Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <p className="font-semibold text-base mt-3">Beyond Boundaries Beyond Limits</p>
        <div className="mt-5 border border-gray-200 p-1 rounded-lg bg-transparent">
          <button onClick={handleCoin} className="btn border-none bg-green-400 text-black font-bold text-base">Claim Free Credit</button>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
