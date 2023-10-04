function HtmlContent() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-white h-screen flex items-center justify-center">
        PHANTOM
      </h1>

      <div className="h-screen flex pr-5 justify-end items-center">
        <div className="max-w-[440px] text-white">
          <h2 className="text-4xl mb-8 ">Be a Man of the Future.</h2>
          <p className=" mb-8">
            Featuring a sleek, metallic design inspired by advanced technology,
            this aftershave bottle is as stylish as it is functional. But it's
            not just a pretty face - inside, you'll find a nourishing and
            protective aftershave formula that will leave your skin feeling
            refreshed and hydrated.
          </p>
          <a
            href="https://www.upwork.com/freelancers/~01c3b60e1c04398fd9"
            target="_blank"
          >
            {' '}
            <button className="border p-4 py-2 text-white hover:bg-white hover:text-black hover:scale-[1.2] duration-100">
              Hire Me
            </button>
          </a>
        </div>
      </div>
      <div className="h-screen flex pl-5 justify-start items-center">
        <div className="max-w-[440px] text-white">
          <h2 className="text-4xl mb-8 ">Be a Man of the Future.</h2>
          <p className=" mb-8">
            Featuring a sleek, metallic design inspired by advanced technology,
            this aftershave bottle is as stylish as it is functional. But it's
            not just a pretty face - inside, you'll find a nourishing and
            protective aftershave formula that will leave your skin feeling
            refreshed and hydrated.
          </p>
          <a href="https://github.com/mahdisoultana" target="_blank">
            <button className="border p-4 py-2 text-white hover:bg-white hover:text-black hover:scale-[1.2] duration-100">
              Read Code
            </button>
          </a>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center flex-col">
        <h2 className="text-4xl font-bold text-white  pb-16 ">
          Cutting-Edge of Grooming
        </h2>

        <a href="https://www.linkedin.com/in/mahdisoultana/" target="_blank">
          <button className="border p-8 text-lg  py-2 hover:text-white bg-white hover:bg-transparent text-black hover:scale-[1.2] duration-100">
            Contact now
          </button>
        </a>
      </div>
    </div>
  );
}

export default HtmlContent;
