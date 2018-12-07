export default function (domain: string) {
  return (path: string, data?: any) => fetch(
    urlJoin(domain, path), formdata(data)
  ).then((res: Response) => {
    if (res.ok) return res.json();
    throw res.statusText;
  });
}

function formdata(data?: any) {
  const options: any = {
    credentials: 'include',
    method: 'GET',
    mode: 'cors'
  };

  if (data) {
    options.method = 'POST';
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json'
    };
  }
  return options;
}

function urlJoin(base: string, path: string) {
  switch ([base.slice(-1), path.slice(0, 1)].filter(c => c === '/').length) {
    case 2:
      return base + path.slice(1);
    case 1:
      return base + path;
    default:
      return base + '/' + path;
  }
}
