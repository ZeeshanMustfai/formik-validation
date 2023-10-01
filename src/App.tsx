import reactLogo from './assets/react.svg';
import './App.css';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
      <div>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <div>
        <BookingForm />
      </div>
    </>
  );
}

export default App;
