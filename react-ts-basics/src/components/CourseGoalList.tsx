import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal} from "../App"
import InfoBox from "./InfoBox";
import type { ReactNode } from "react";
type CourseGoalListProps={
    goals:CGoal[];
    onDeleteGoal:(id:number)=>void;
}
export default function CourseGoalList({goals,onDeleteGoal}:CourseGoalListProps) {
  if(goals.length===0){
    return <InfoBox mode="hint" >You have no goals yet.Start adding goals!</InfoBox>
  }
  let warningBox:ReactNode;
  if(goals.length>=4){
    warningBox= <InfoBox mode='warning' severity="high">You are adding too many goals.</InfoBox>
  }
  return (
    <>
    {warningBox}
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal onDelete={onDeleteGoal} title={goal.title} id={goal.id}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    </>
  );
}
