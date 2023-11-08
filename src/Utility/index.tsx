// ? PARTIAL

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

// const todo1 = {
//   title: "organize desk",
//   description: "clear clutter",
// };

// const todo2 = updateTodo(todo1, {
//   description: "throw out trash",
// });

// ? REQUIRED
// interface Props {
//   a?: number;
//   b?: string;
// }

// const obj: Props = { a: 5 };

// const obj2: Required<Props> = { a: 5,b:'3' };

// ? PICK

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// };

// // ? OMIT

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: number;
// }

// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
//   createdAt: 1615544252770,
// };

// // todo;

// // const todo: TodoPreview;

// // type TodoInfo = Omit<Todo, "completed" | "createdAt">;

// // const todoInfo: TodoInfo = {
// //   title: "Pick up kids",
// //   description: "Kindergarten closes at 5pm",
// // };

// todoInfo;

// // ? EXCLUDE
// type T0 = Exclude<"a" | "b" | "c", "a">;

// type T0 = "b" | "c";
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

// type T1 = "c";
// type T2 = Exclude<string | number | (() => void), Function>;

// type T2 = string | number;

// type Shape =
//   | { kind: "circle"; radius: number }
//   | { kind: "square"; x: number }
//   | { kind: "triangle"; x: number; y: number };

// type T3 = Exclude<Shape, { kind: "circle" }>;

// type T3 =
//   | {
//       kind: "square";
//       x: number;
//     }
//   | {
//       kind: "triangle";
//       x: number;
//       y: number;
//     };
