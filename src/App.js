import styles from './styles/App.module.css';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import {useState} from 'react';

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className={styles.App}>
      <Header />
      <Form setTask={setTask}/>
      <List task={task} setTask={setTask} />
    </div>
  );
}

export default App;
