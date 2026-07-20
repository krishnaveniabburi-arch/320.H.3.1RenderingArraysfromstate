export default function Score({scoreData}) {
    return ( 
        <div >
            <p>Date: {scoreData.date}</p>
            <p>Score: {scoreData.score}</p>
        </div>
    );
}
