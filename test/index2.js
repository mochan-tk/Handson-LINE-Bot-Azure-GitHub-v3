'use strict';

const axios = require('axios')

const openai_key = '0e10eb24d9c24a79a91c6312fc0e7918';
const query = 'シアトルの観光名所を英語で教えてさらに日本語訳にして';
const url = "https://azureopenaiservices0226.openai.azure.com/openai/deployments/text-davinci-003-deployment/completions?api-version=2022-12-01";

const client = axios.create({
  headers: {
    'api-key': openai_key,
  },
});

const params = {
  model: "text-davinci-003",
  prompt: query,
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0
};

client
  .post(url, params)
  .then((result) => {
    console.log(result.data.choices[0].text);
  })
  .catch((err) => {
    console.log(err);
  });

/*

const sendGetRequest = async () => {
  try {
      const resp = await axios.post(url, {
          headers: {
            'api-key': openai_key,
            'Content-Type': 'application/json;'
          },
          data: JSON.stringify({
            "prompt": query,
            "max_tokens": 5,
            })
      });

      console.log(resp.data);
  } catch (err) {
      // Handle Error Here
      console.error(err.response);
  }
};

sendGetRequest();

*/

/*

const https = require('https');



(async () => {
    // API に POST リクエストする
    const postResult = await https.request(url, {
      method: 'POST',
      headers: {
        'api-key': openai_key,
        'Content-Type': 'application/json; charset=utf-8'
      },
      // タイムアウトを指定する
      timeout: 5000,
      // リクエストボディは以下のように書く
      body: JSON.stringify({
        "model": "text-davinci-003",
        "prompt": query,
        "temperature": 0.7,
        "max_tokens": 256,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
        })
    });
    // レスポンスは文字列なので、JSON 文字列の場合は適宜パースする
    console.log(postResult);
    let jsonResult = JSON.parse(postResult);
    console.log(jsonResult);
  })();
*/

/*
curl https://azureopenaiservices0226.openai.azure.com/openai/deployments/text-davinci-003-deployment/completions?api-version=2022-12-01\
  -H "Content-Type: application/json" \
  -H "api-key: 0e10eb24d9c24a79a91c6312fc0e7918" \
  -d "{
  \"prompt\": \"Once upon a time\",
  \"max_tokens\": 5
}"
*/