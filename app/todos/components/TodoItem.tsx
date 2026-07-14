import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import { Todo } from '../interfaces/todo';

import styles from './TodoItem.module.css';
interface Props {
    todo: Todo;
    //TODO: Acciones que quiero llamar
}

export const TodoItem = ({ todo }: Props) => {
    return (
        <div className={todo.complete ? styles.todoDone : styles.todoPending}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
                <div className={`
                    flex p-1 rounded-md cursor-pointer
                    hover:bg-opacity-60
                    ${todo.complete ? 'bg-blue-100' : 'bg-red-100'} 
                `}>
                    {
                        todo.complete
                            ? <IoCheckboxOutline size={25} />
                            : <IoSquareOutline size={25} />
                    }
                </div>
                <div className="text-center sm:text-left">
                    {todo.description}
                </div>
            </div>
        </div>
    )
}