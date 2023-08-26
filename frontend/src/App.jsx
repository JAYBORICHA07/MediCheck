import { Box } from '@mui/material'
// import CloudUploadIcon from '';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Analysis from '../pages/Analysis';


function App() {


  return (
    <>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'grey',
          m:0
        }}
      >
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/analysis" element={<Analysis />} />
          </Routes>
          <ToastContainer />
        </Router>

      </Box>
    </>
  )
}

export default App
