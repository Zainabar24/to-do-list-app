type todo = {
    id: number;
    title: string;
    completed: boolean;
  };
type todoProps = {
    todos: todo;
    onSwitch: (id: number) => void;
    onReset: (id: number) => void;
};

export default function Zainab({ todos, onSwitch, onReset }: todoProps) {
    return (
        <main className="flex items-center justify-between rounded-lg border bg-white p-4">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={todos.completed}
                    onChange={() => onSwitch(todos.id)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span 
                className={
                    todos.completed ? "line-through text-red-500" : "text-gray-700"}>{todos.title}
                </span>
            </div>
            <button 
                onClick={() => onReset(todos.id)}
                className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
            >
                Reset
            </button>
        </main>
    );
}