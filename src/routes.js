import loadable from 'react-loadable';
import Loading from './Components/pages/Loading/Loading';


export const AsyncLogin = loadable ({
  loader: () => import('./Components/pages/Login/Login'),
  loading: Loading
})

export const AsyncHome = loadable ({
  loader: () => import('./Components/pages/Home/Home'),
  loading: Loading
})