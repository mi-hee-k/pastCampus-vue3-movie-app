exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'MiHee',
      age: 10,
      email: 'ukoko@naver.com',
    }),
  };
};
