import { TWebviewSendDataType } from '../global';

export const sendDataToNative = (type: TWebviewSendDataType, data: object) => {
  if (window.webkit) {
    window.webkit.messageHandlers.sendDataToNative.postMessage({
      type,
      data,
    });
  }
};
