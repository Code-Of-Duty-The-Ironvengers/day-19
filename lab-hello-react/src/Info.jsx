const content = [
  {
    src: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
    headline: "Declarative",
    text: `React makes it
    <br />
    painless to create
    <br />
    interactive UIs.`,
  },
  {
    src: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
    headline: "Components",
    text: `Build encapsulated
    <br />
    components that
    <br />
    mangage their state.`,
  },
  {
    src: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
    headline: "Single-Way",
    text: `A set of immutable
    <br />
    values are passed to
    <br />
    the components.`,
  },
  {
    src: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
    headline: "JSX",
    text: `Statically-typed,
    <br />
    designed to run on
    <br />
    modern browsers.`,
  },
];

function Article({ src, headline, text }) {
  return (
    <article>
      <img src={src} alt="" />
      <h2>{headline}</h2>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </article>
  );
}

function Info() {
  return (
    <section className="info">
      {content.map((item) => {
        return <Article {...item} />;
      })}
    </section>
  );
}

export default Info;
