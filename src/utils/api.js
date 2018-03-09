export const callApi = (url, options) =>
  fetch(url)
    .then(handleResponse)
    .then(data => data)
    .catch(error => error);

const handleResponse = response => {
  const contentType = response.headers.get('content-type');
  if (contentType.includes('application/json')) {
    return handleJSON(response);
  } else if (contentType.includes('text/html')) {
    return handleText(response);
  }
  throw new Error(`${contentType} is not supported`);
};

const handleJSON = response =>
  response.json().then(json => {
    if (response.ok) {
      return json;
    }
    return Promise.reject(
      Object.assign({}, json, {
        status: response.status,
        statusText: response.statusText,
      }),
    );
  });

const handleText = response =>
  response.text().then(text => {
    if (response.ok) {
      return text;
    }
    return Promise.reject({
      status: response.status,
      statusText: response.statusText,
      err: text,
    });
  });
