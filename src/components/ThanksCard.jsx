import React from "react";

function ThanksCard({ selectedRate, maxRate }) {
    return (
        <section className="container-card">
            <article>
                <img
                    src="../../images/illustration-thank-you.svg"
                    alt="card, voucher and orange ball cartoon"
                />
                <span className="result">
                    You selected {selectedRate} out of {maxRate}
                </span>
                <h1>Thank you!</h1>
                <p>
                    We appreciate you taking the time to give a rating. If you
                    ever need more support, don’t hesitate to get in touch!
                </p>
            </article>
        </section>
    );
}

export default ThanksCard;
