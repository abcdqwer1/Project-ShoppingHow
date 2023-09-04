const $input = document.querySelector('input')
const $button = document.querySelector('button')
const $answer = document.querySelector('.answer')

const data = []
// data.push({
//     "role": "system",
//     "content": "assistant는 쇼핑 정보를 알려주는 가이드."
// })

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

const answerElement = document.querySelector('.answer');
const answerContent = document.getElementById('answerContent');


$button.addEventListener('click', async(e) => {
    e.preventDefault();

    const productType = document.getElementById('productType').value;
    const productPrice = document.getElementById('productPrice').value;
    const destination = document.getElementById('destination').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById('year').value;

    const question = `${destination} + "에서" + ${productType} + ${productPrice} + ${gender} + ${age} + " 이 입을 거 \n 브랜드명 : \n 상품명 : \n 가격 : \n 설명 : \n 양식으로 추천해줘"`

    data.push({
        "role": "user",
        "content": question,
    })

    // $input.value = ''

    // chatGPTAPI()
})

function chatGPTAPI() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    })
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        // 답변 온 것을 assistant로 저장
        answerElement.style.display = 'flex';
        // answerContent.innerHTML = `<p>${res.choices[0].message.content}</p>`
        answerContent.textContent = res;
    })
}