import { createContext, ReactNode, useContext, useReducer } from "react";
type Time = {
  name: string;
  duration: number;
};
type TimerState = {
  isRunning: boolean;
  timers: Time[];
};
const initialState:TimerState={
    isRunning:true,
    timers:[]

};
type TimerContextValue = TimerState & {
  addTimer: (timerData: Time) => void;
  startTimer: () => void;
  stopTimer: () => void;
};
export const TimersContext = createContext<TimerContextValue | null>(null);
type TimersContectProviderProps = {
  children: ReactNode;
};
export function useTimersContext() {
  const timersCtx = useContext(TimersContext);
  if (timersCtx === null) {
    throw new Error("Timer context is null,that should not be the case");
  }
  return timersCtx;
}
type StartTimerAction={
    type:'START_TIMER'
}
type StopTimerAction={
    type:'STOP_TIMER'
}
type AddTimerAction={
    type:'ADD_TIMER',
    payload:Time
}
type Action=StartTimerAction|StopTimerAction|AddTimerAction;
function timerReducer(state:TimerState,action:Action):TimerState{
    if(action.type==='START_TIMER'){
        return{
            ...state,
            isRunning:true
        }
    }
    if(action.type==='STOP_TIMER'){
        return{
            ...state,
            isRunning:false
        }
    }
    if(action.type==='ADD_TIMER'){
        return{
            ...state,
            timers :[
                ...state.timers,
                {
                    name:action.payload.name,
                    duration:action.payload.duration
    
                }
            ]
        }
    }
    return state;
}
export function TimersContextProvider({
  children,
}: TimersContectProviderProps) {
    const[timerState,dispatch]=useReducer(timerReducer,initialState);
  const ctx: TimerContextValue = {
    timers: timerState.timers,
    isRunning: timerState.isRunning,
    addTimer(timerData) {
        dispatch({type:'ADD_TIMER',payload:timerData})
    },
    startTimer() {
        dispatch({type:'START_TIMER'})
    },
    stopTimer() {
        dispatch({type:'STOP_TIMER'})
    },
  };
  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
}
