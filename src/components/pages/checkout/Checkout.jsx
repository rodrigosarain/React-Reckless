import "./chekout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="main-container">
      <section className="main-container__background-section">
        <div className="card">
          <img
            className="card__logo"
            src="../../../MEDIA/card-logo.svg"
            alt="logo"
          />
          <p className="card__number">0000 0000 0000 0000</p>
          <div className="card__details">
            <p className="card__details-name">Jane Appleseed</p>
            <p>
              <span className="card__month">00</span>/
              <span className="card__year">00</span>
            </p>
          </div>
        </div>

        <div className="card-back">
          <p className="card-back__cvc">000</p>
        </div>
      </section>
      <section className="main-container__form-section">
        <form className="form" action="">
          <label className="form__label" htmlFor="cardholder">
            Cardholder Name
          </label>
          <input
            className="form__input"
            type="text"
            name="cardholder"
            id="cardholder"
            placeholder="e.g. Jane Appleseed"
          />
          <div className="form__cardholder--error error"></div>

          <label className="form__label" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            className="form__input"
            type="text"
            name="cardNumber"
            id="cardNumber"
            maxLength="19"
            placeholder="e.g. 1234 5678 9123 0000"
          />
          <div className="form__inputnumber--error error"></div>

          <div className="form__date-cvc">
            <label className="form__label" htmlFor="cardMonth">
              Exp. Date (MM/YY)
            </label>

            <label className="form__label" htmlFor="cardCvc">
              CVC
            </label>

            <div className="form__date">
              <input
                className="form__input"
                type="text"
                maxLength="2"
                name="cardMonth"
                id="cardMonth"
                placeholder="MM"
              />
              <input
                className="form__input"
                type="text"
                maxLength="2"
                name="cardYear"
                id="cardYear"
                placeholder="YY"
              />
            </div>

            <input
              className="form__input"
              type="text"
              maxLength="3"
              name="cardCvc"
              id="cardCvc"
              placeholder="e.g. 123"
            />

            <div className="form__errors-container">
              <div className="form__input-mm--error error"></div>
              <div className="form__input-yy--error error"></div>
            </div>

            <div className="form__input-cvc--error error"></div>
            <Link to="/checkoutOfi">
              <input className="form__submit" type="submit" value="Confirm" />
            </Link>
          </div>
        </form>
        <section className="thanks-section">
          <img
            className="thanks-section__img"
            src="../MEDIA/icon-complete.svg"
            alt="complete icon"
          />
          <h1 className="thanks-section__title">Thank you!</h1>
          <p className="thanks-section__text">We added your card details</p>
          <button className="thanks-section__button">Continue </button>
        </section>
      </section>
    </div>
  );
};

export default Checkout;
