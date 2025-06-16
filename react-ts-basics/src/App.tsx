import goalImage from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import AddGoal from "./components/AddGoal";
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal(goal:string,description:string) {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      description: description,
    };
    setGoals((prevGoal) => {
      return [...prevGoal, newGoal];
    });
  }
  function handleDeleteGoal(id:number){
    setGoals(prevGoal=>prevGoal.filter((goal)=>goal.id!=id))
  }
  return (
    <main>
      <Header image={{ src: goalImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <AddGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}
