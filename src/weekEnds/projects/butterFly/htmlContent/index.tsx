function HtmlContent() {
  return (
    <div className=" relative w-full h-full font-Cormorant text-white ">
      {[
        {
          text: ['Life can be challenging'],
        },
        { text: ['Sometimes you struggle '] },
        { text: ['In unity we find strength'] },
        {
          text: ['Our help can turn tides'],
        },
        {
          text: [' lighting the', 'path.'],
        },
        {
          text: ['Together, we make', 'a difference,', 'creating', 'hope.'],
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
                className="capitalize lg:text-5xl text-2xl leading-10  text-center"
              >
                {text}
              </h1>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default HtmlContent;
