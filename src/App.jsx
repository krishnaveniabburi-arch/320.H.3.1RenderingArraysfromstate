import { useState } from 'react';
import {initialLearnerData}  from './data/data';
import Learner from './components/learner';


export default function App() {
  const [learners, setLearners] = useState(initialLearnerData.learners);

  return (
    <div> 
      {learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}

    </div>
    );
  }
      
          
            
                
  

