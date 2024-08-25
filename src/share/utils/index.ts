export * from './big';

/* 延迟timeout再resolve */
export const delay = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
