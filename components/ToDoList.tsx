import React, { useState, useEffect } from 'react';
import { useAddTodo } from '../Hooks/useAddTodo';

export const TodoList : React.FC = () => {
  const {todos, fetchTodos} = useAddTodo()
  // console.log(todos);

  return (
    <>
      <div>todoリスト</div>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  )
}