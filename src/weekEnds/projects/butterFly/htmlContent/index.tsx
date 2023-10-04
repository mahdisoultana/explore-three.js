function HtmlContent() {
  return (
    <div className=" relative w-full h-full  font-light text-white ">
      {[
        {
          text: ['Life can be challenging'],
        },
        { text: ['Sometimes you struggle '] },
        { text: ['In unity we find strength'] },
        {
          text: ['Our help can turn your life ', 'for the better'],
        },
        {
          text: ['We are here to help you', 'find your way'],
        },
      ].map((item, index) => (
        <section
          key={index}
          className="h-screen flex items-center justify-center"
        >
          <div className="w-1/2 h-1/3 flex flex-col items-center">
            {item.text.map((text, index) => (
              <h1
                key={index}
                className="capitalize lg:text-5xl text-2xl leading-[24px]  text-center"
              >
                {text}
              </h1>
            ))}
          </div>
        </section>
      ))}
      <section className="h-screen flex items-center justify-center flex-col">
        <div className="w-1/2 h-auto flex flex-col items-center">
          {["it's time", 'to get the support', ' you need'].map(
            (text, index) => (
              <h2
                key={index}
                className="capitalize lg:text-5xl text-2xl leading-10  text-left"
              >
                {text}
              </h2>
            ),
          )}
          <div className="mt-5"></div>
          {["it's time", 'you get', 'the support you need'].map(
            (text, index) => (
              <h2
                key={index}
                className="capitalize lg:text-2xl text-2xl leading-10  text-left"
              >
                {text}
              </h2>
            ),
          )}
        </div>
        <a href="https://www.linkedin.com/in/mahdisoultana/" target="no_blank">
          <button className=" mt-5 group relative h-12 w-48 overflow-hidden rounded-lg border bg-white text-lg shadow">
            <div className="absolute inset-0 w-3  bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black hover:text-white ">
              Get Help Now
            </span>
          </button>
        </a>
      </section>
    </div>
  );
}

export default HtmlContent;
