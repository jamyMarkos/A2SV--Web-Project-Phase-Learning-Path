const SubscribeForm = () => {
  return (
    <section className="bg-custBlack">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center bg-transparent text-slate-300 text-base space-x-8">
          <h3 className="text-[14px] text-white">
            <span className="text-btnColor text-[16px] font-bold underline mr-1 hover:cursor-pointer">
              Subscribe
            </span>
            to get a free eCookbook
          </h3>
          <form className="px-2">
            <input
              className="ml-4 px-2 py-1 font-light text-[#000] focus:outline border-0"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="ml-4 px-2 py-1 font-light text-custBlack focus:outline-none border-0"
              type="email"
              placeholder="Your Email"
            />
            <button
              type="submit"
              className="ml-4 bg-btnColor text-custBlack px-2 py-1 font-semibold hover:scale-105 hover:opacity-90 mt-1"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeForm;
