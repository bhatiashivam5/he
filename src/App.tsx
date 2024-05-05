
import './App.css';
import JobDetails from './job-details/job-details';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div >
        <JobDetails />
      </div>
    </Provider>
  );
}

export default App;
