import score from './Score'
export default function learner({learner}) {
    return (
        <div>
            <p>{learner.name} {learner.bio}</p>

            {learner.scores.map((score, index) => (
                <score key={index} scoreData={score} />
            ))}
        </div>
    )
}