import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";


function QuestionsAnswersForm({user_answers: userAnswers, user_id: userId}) {

    const [questions, setQuestions] = useState([]);
    const [answer, setAnswer] = useState(userAnswers);
    const [newAnswers, setNewAnswers] = useState([]);

    console.log("userAnswers", userAnswers)
    console.log("answer", answer)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL
          }questions/`).then((results) => {
            return results.json();
          })
          .then((data) => {
            setQuestions(data);
          });

    }, []);
    
    const handleChange = (event) => {
        // target of event is input
        const {id, value} = event.target;
        
        console.log("id:", id,  " - value:", value)
        console.log("question id", id.substring(id.lastIndexOf('.') + 1))
        
        let question = id.substring(id.lastIndexOf('.') + 1)
        
        setNewAnswers((prevNewAnswers) => ({
            ...prevNewAnswers,
            user: userId,
            question: question,
            [id]: value,

                    
        }));
        
        // setNewAnswers((prevNewAnswers) => {

        //     const index = prevNewAnswers.findIndex(
        //       (answer) =>
        //         answer.user === userId && answer.question === question.id
        //     );
            
        //     console.log("prevNewAnswers:", prevNewAnswers)
            
            
        //     if (index !== -1) {
        //       // Update existing answer
        //       return [
        //         ...prevNewAnswers.slice(0, index),
        //         { user: userId, question: question.id, answer: value },
        //         ...prevNewAnswers.slice(index + 1),
        //       ];
        //     } else {
        //       // Add new answer
        //       return [
        //         ...prevNewAnswers,
        //         { user: userId, question: question.id, answer: value },
        //       ];
        //     }
        //   });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        fetch(`${import.meta.env.VITE_API_URL}users-answers/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAnswers),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Answers submitted successfully!");
          })
          .catch((error) => {
            console.error("Error submitting answers:", error);
          });
      };

    return(
        <>
        {/* <form onSubmit={handleSubmit}> */}
            {userAnswers && questions.map((question, key) => {
                    const answerObj = userAnswers.find((a) => a.question === question.question);
                    const value = newAnswers[`answer.${userId}.${question.id}`] ?? (answerObj?.answer ?? "");
                    
                    return (
                        <li key={key}>
                            <label htmlFor={`answer.${userId}.${question.id}`}>{question.question}</label>
                            <textarea
                                id={`answer.${userId}.${question.id}`}
                                onChange={handleChange}
                                cols={48}
                                rows={5}
                                value={value}
                            />
                        </li>
                    );
                })}
        {/* </form> */}
        {/* {questions.map((question, key) => {
            return (
            <>
            <li key={key}>
                <label htmlFor="answer">{question.question}</label>
                <textarea
                id={`answer.${question.id}`}
                onChange={handleChange}
                cols={48}
                rows={5}
                // value={userAnswers.answer}
                value={
                    (userAnswers.map(answer_object => {
                        if (question.id == answer_object.question) {
                            return answer_object?.answer
                        }
                    }))
                }
                />
            </li>
            </>
            )
        })
        } */}
    </>
    )
}

export default QuestionsAnswersForm;