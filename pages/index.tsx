import React, { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
import { InputToDoForm } from '../components/InputToDoForm';
import { TodoList } from '../components/ToDoList';

const Home : React.FC = () => {
  return (
    <>
      <InputToDoForm  />
      <TodoList  />
    </>
  )
}

export default Home;