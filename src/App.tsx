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
    return <RouterProvider router={router} />;
  } else
    return (
      <div className="flex justify-center">
        <MainLogo />
        <RouterProvider router={router} />
      </div>
    );
}

export default App;
