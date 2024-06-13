import ReactDOM from 'react-dom';

interface PortalTransitionProps {
  children: React.ReactNode;
}

const Portal = ({ children }: PortalTransitionProps) => {
  const element = typeof window !== 'undefined' && document.querySelector('#portal');
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
