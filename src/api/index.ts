/* eslint-disable */
// import axios from 'axios';

async function jsonp(url: string) {
  return new Promise((resolve, reject) => {
    const callbackName = `jsonp`;
    const script = document.createElement('script');
    script.src = `${url}${url.includes('?') ? '&' : '?'}`;
    document.body.appendChild(script);

    (window as any)[callbackName] = (data: any) => {
      delete (window as any)[callbackName];
      document.body.removeChild(script);
      resolve(data);
    };

    script.addEventListener('error', () => {
      delete (window as any)[callbackName];
      document.body.removeChild(script);
      reject(new Error('JSONP request failed'));
    });
  });
}

/**
 * 通过编码和地址获取日数据
 * code 编码，例: 002304
 * 发行地: 0 深圳 1 上海
 */
async function getKlineByCode(code: string, base: string) {
  const url = `https://push2his.eastmoney.com/api/qt/stock/kline/get?fields1=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13&fields2=f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61&beg=0&end=20500101&ut=fa5fd1943c7b386f172d6893dbfba10b&rtntype=6&secid=${base}.${code}&klt=101&fqt=1&cb=jsonp`;
  const res = await jsonp(url);
  return res;
}

export { getKlineByCode };
