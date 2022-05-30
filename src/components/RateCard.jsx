import React from "react";
import { AiFillStar } from "react-icons/ai";
import CircleContainer from "./CircleContainer";
import Button from "./Button";

function RateCard({ maxRate, selectedRate, handleRate, handleSubmit }) {
    const rateArray = Array.from({ length: maxRate }, (_, index) => index + 1);

    return (
        <section className="container-card">
            <CircleContainer
                value={<AiFillStar />}
                valueClass="color-primary"
            />
            <article>
                <h1>How did we do?</h1>
                <p>
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
                <section className="rate-values">
                    {rateArray.map((rate) => {
                        return (
                            <Button
                                key={rate}
                                className={
                                    rate !== selectedRate
                                        ? "btn-circle"
                                        : "btn-circle--selected"
                                }
                                onClick={handleRate}
                            >
                                {rate}
                            </Button>
                        );
                    })}
                </section>
                <Button
                    type="submit"
                    className="btn-primary"
                    onSubmit={handleSubmit}
                >
                    submit
                </Button>
            </article>
        </section>
    );
}

export default RateCard;
