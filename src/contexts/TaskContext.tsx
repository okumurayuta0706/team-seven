import React, {createContext, useContext, useState} from "react";

export type Task = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
};

type TaskContextType ={
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    point: number;
    setSelectedTask: React.Dispatch<React.SetStateAction<Task | undefined>>;
    selectedTask: Task | undefined;
    setModdalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalOpen: boolean;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedTask, setSelectedTask] = useState<Task | undefined>();
    const [modalOpen, setModdalOpen] = useState(false);

    const point = tasks.filter((task) => task.completed).length;

    return (
        <TaskContext.Provider
        value={{
            tasks, 
            setTasks,
            selectedTask, setSelectedTask,
            modalOpen, setModdalOpen,
            point
        }}
        >
            {children}
        </TaskContext.Provider>
    );
   
};

export const useTaskContext =() => {
    const context = useContext(TaskContext);
    if (!context)
        throw new Error("useTAskContext must be used within a TaskProvider");
    return context;
};
