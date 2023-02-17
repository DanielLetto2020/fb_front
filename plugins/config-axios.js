export default function ({$axios, error}) {
  $axios.onError(({response}) => {
    const code = response && response.status;
    if (+code === 500) {
      error({statusCode: 500})
    }
    if (+code === 404) {
      error({statusCode: 404})
    }
  });
}
