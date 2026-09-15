type todo = {
  id: number;
  title: string;
  completed: boolean;
};

type todoProps = {
  todo: todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function Zainab({ todo, onToggle, onDelete }: todoProps) {
  return (
    <main className="flex items-center justify-between rounded-lg border bg-white p-4">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />

        <span
          className={
            todo.completed ? "line-through text-red-500" : "text-gray-700"
          }
        >
          {todo.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
      >
        Delete
      </button>
    </main>
  );
}