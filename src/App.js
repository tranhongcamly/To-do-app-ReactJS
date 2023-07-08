import './App.css';

import { Divider, Typography } from 'antd';

import Filters from './components/Filters';
import TodoList from './components/TodoList';

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: '15px auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO APP</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
