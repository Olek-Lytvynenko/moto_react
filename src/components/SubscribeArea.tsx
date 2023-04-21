export const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__container">
          <div className="subscribe__info">
            <h2 className="subscribe__title">Subscribe A Free Update</h2>
            <h3 className="subscribe__subtitle">
              Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
              zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
              bedrijfstak sinds.
            </h3>
          </div>
          <div className="subscribe__content">
            <div className="subscribe__container-input">
            <input
              type="text"
              className="subscribe__input"
              placeholder="Enter Your Emeil"
            />
            </div>
            <button className="button subscribe__button">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </section>
  );
};
