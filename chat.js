const $input = document.querySelector('input')
const $button = document.querySelector('button')
const $answer = document.querySelector('.answer')

const data = []
data.push({
    "role": "system",
    "content": "assistant는 쇼핑 정보를 알려주는 가이드."
})

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

$button.addEventListener('click', e => {
    e.preventDefault()
    // const contents = $input.value
    const destination = document.querySelector(".destination")
    const productType = document.querySelector(".productType")
    const productPrice = document.querySelector(".productPrice")
    const genderSelect = document.querySelector(".genderSelect")
    const age = document.querySelector(".year")
    data.push({
        "role": "user",
        "content": destination + "에서" + productType + productPrice + genderSelect + age + " 이 입을 거 \n 브랜드명 : \n 상품명 : \n 가격 : \n 설명 : \n 양식으로 5개 추천해줘"
    })
    $input.value = ''

    chatGPTAPI()
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
        console.log(res)
        // 답변 온 것을 assistant로 저장
        $answer.innerHTML = `<p>${res.choices[0].message.content}</p>`
    })
}