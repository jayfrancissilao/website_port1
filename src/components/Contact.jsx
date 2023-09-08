const Contact = () => {
  return (
    <div id="contacts" className="1 flex flex-col items-center gap-y-5 mt-20">
      <h1 className="2 text-2xl uppercase font-semibold">Contact</h1>
      <form
        action=""
        className="3 flex flex-col gap-y-3 text-sm w-[500px] md:w-[400px] sm:w-[270px]"
      >
        <input
          type="text"
          placeholder="name"
          className="outline-none border  border-gray-400 p-2  w-full"
        />
        <input
          type="email"
          placeholder="email"
          className="outline-none border border-gray-400 p-2  w-full"
        />
        <textarea
          placeholder="Message"
          className="outline-none border border-gray-400 p-2 min-w-full
          min-h-[100px] max-h-[150px]"
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          className="outline-none border border-gray-400 p-2 w-full bg-slate-400 text-white cursor-pointer"
        />
      </form>
      <p className="text-lg m-7 tracking-wider font-light">
        Copy right by jay silao <span>{new Date().getFullYear()}</span>
      </p>
    </div>
  );
};

export default Contact;
