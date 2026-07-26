export const dynamic = 'force-dynamic';
export const revalidate= 0;

import prisma from "@/app/lib/prisma";
import { NewTodo, TodosGrid } from "@/app/todos";

export const metadata = {
  title: 'Listado de Todos',
  description: 'Esto es un listado de todos',
};


export default async function ServerTodosPage() {
  
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  
  return (
    <>

      <span className="text-3xl mb-10 text-black">Server Actions</span>

      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos}/>
    </>
  );
}