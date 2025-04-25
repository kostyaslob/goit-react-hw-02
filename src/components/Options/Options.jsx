export default function Options({ setValues, updateFeedback, totalFeedback }) {
    const resetFeedback = () => {
        setValues({ good: 0, neutral: 0, bad: 0 })
    }
    
    return (
        <div>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback > 0 &&
                <button onClick={resetFeedback}>Reset</button>
            }
        </div>
    )
}