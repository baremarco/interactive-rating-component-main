import React, { useState } from "react";
import Footer from "./components/Footer";
import RateCard from "./components/RateCard";
import ThanksCard from "./components/ThanksCard";

function App() {
    const [submitted, setSubmitted] = useState(false);
    const [maxRate, setMaxRate] = useState("5");
    const [selectedRate, setSelectedRate] = useState(0);

    const handleRate = (rate) => {
        if (rate === selectedRate) {
            setSelectedRate(0);
        } else {
            setSelectedRate(rate);
        }
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <>
            <main className="container">
                {submitted ? (
                    <ThanksCard maxRate={maxRate} selectedRate={selectedRate} />
                ) : (
                    <RateCard
                        maxRate={maxRate}
                        selectedRate={selectedRate}
                        handleRate={handleRate}
                        handleSubmit={handleSubmit}
                    />
                )}
            </main>
            <Footer />
        </>
    );
}

export default App;
