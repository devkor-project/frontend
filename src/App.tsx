import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { ReactComponent as MainLogo } from './assets/mainLogo.svg';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
function App() {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Width를 기반으로 왼쪽에 메인 로고를 띄울지 말지 결정
  if (width < 810) {
    return (
      <div className="w-full h-full flex justify-center">
        <RouterProvider router={router} />
      </div>
    );
  } else
    return (
      <div className="flex justify-center w-full h-full">
        <MainLogo width="400px" height="688px" />

        <RouterProvider router={router} />
      </div>
    );
}

export default App;
