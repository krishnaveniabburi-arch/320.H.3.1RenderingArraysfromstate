import { useState } from 'react';
import initialLearnerData  from './data/data';
import learner from './components/learner';


export default function App() {
  const [LearnerData, setLearnerData] = useState(initialLearnerData.learners);

  return (
    <div> 
      {LearnerData.map{(learner, index) => (
        <learner key={index} learner={learner} />
      )}}

    </div>
    );
  }
      
          
            
                
  


export default App
