import css from "./Options.module.css"

export default function Options({ setValues, updateFeedback, totalFeedback }) {
    const resetFeedback = () => {
        setValues({ good: 0, neutral: 0, bad: 0 })
    }
    
    return (
        <div className={css.option}>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback > 0 &&
                <button onClick={resetFeedback} style={{backgroundColor: '#b1241a'}}>Reset</button>
            }
        </div>
    )
}