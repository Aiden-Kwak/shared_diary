import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup, Login, ProfileCreate, ProfileDetail } from './account';
import { RandingPage } from './randingpage';
import { Myspace } from './myspace';
import { Header, Footer, NotFound } from './_components';
import { DiaryContext } from './diary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<RandingPage/>}/>
            <Route path="/accounts/signup" element={<Signup/>}/>
            <Route path="/accounts/login" element={<Login/>}/>
            <Route path="/profile/create" element={<ProfileCreate/>}/>
            <Route path="/profile/detail" element={<ProfileDetail/>}/>
            <Route path="/diary" element={<DiaryContext/>}/>
            <Route path="/myspace" element={<Myspace/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
