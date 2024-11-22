import { useEffect } from 'react';
import { RootRouter } from './router/RootRouter';
import { setUserAuth } from './stores/useAuthStore';
import { showiOSInfo, webviewInit } from './webview/utils';
import { ErrorBoundary } from 'react-error-boundary';

if (!window.handleIosWebviewToken) {
  window.handleIosWebviewToken = (token, uuid) => {
    showiOSInfo(`token:${token},uuid:${uuid}`);
    if (token) {
      setUserAuth(token, uuid);
      return 'success';
    }
    return 'fail';
  };
}

function App() {
  useEffect(() => {
    webviewInit();
  }, []);

  return;
  <ErrorBoundary>
    <RootRouter />;
  </ErrorBoundary>;
}

export default App;
