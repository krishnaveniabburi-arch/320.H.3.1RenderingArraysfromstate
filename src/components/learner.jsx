import Score from './Score'
export default function Learner({learner}) {
    return (
        <div>
            <p>{learner.name} {learner.bio}</p>

            {learner.scores.map((score, index) => (
                <Score key={index} scoreData={score} />
            ))}
        </div>
    )
}