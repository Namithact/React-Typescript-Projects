import { useRef, type FormEvent } from "react";
type NewGoalProps ={
    onAddGoal :(goal:string,summary:string)=>void
}
export default function AddGoal({onAddGoal}:NewGoalProps) {
    const goal= useRef<HTMLInputElement>(null);
    const summary= useRef<HTMLInputElement>(null);
  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const goalEntered = goal.current!.value;
    const summaryEntered = summary.current!.value
    event.currentTarget.reset();
    onAddGoal(goalEntered,summaryEntered);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <p>
        <label htmlFor="goal"> YOUR GOAL</label>
        <input id="goal" name='goal' ref={goal}></input>
      </p>
      <p>
        <label htmlFor="summary"> SHORT SUMMARY</label>
        <input id="summary" name='summary' ref={summary}></input>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
