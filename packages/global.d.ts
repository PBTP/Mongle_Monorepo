declare global {
  interface Window {
    webkit: {
      messageHandlers: {
        sendDataToNative: TWebviewSendData;
      };
    };
    handleIosWebviewToken: (token: string, uuid: string) => void;
    iOSToJavaScript: (token: string, uuid: string) => void;
  }

  type TWebviewSendData = {
    postMessage: (data: { type: TWebviewSendDataType; data: object }) => void;
  };
}

export type TWebviewSendDataType = 'calendar' | 'address' | 'location';

export {};
