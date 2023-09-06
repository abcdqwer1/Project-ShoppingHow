const $button = document.querySelector('button');
const QUESTION_KEY = 'questions';
const ANSWER_KEY = 'answers';
const $history = document.getElementById('history');
const $history_print = document.getElementById('history_print');
const answerElement = document.querySelector('.answer');
const answerContent = document.getElementById('answerContent');

const data = [
    {
    "role": "system",
    "content": "assistant는 상품 추천 전문가이다."
}
];

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;


$button.addEventListener('click', (e) => {
    e.preventDefault();

    const productType = document.getElementById('productType').value;
    const productPrice = document.getElementById('productPrice').value;
    const destination = document.getElementById('destination').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = document.getElementById('year').value;

    
    if (!productType || !productPrice || !destination || !gender || !age) {
        alert('모든 입력 필드를 작성하세요.');
        return;
    }
    
    const question = `패션상품 추천 여러개 해줘 착용장소:${destination} 상품종류:${productType} 상품가격:${productPrice} 성별:${gender} 나이:${age}년생 양식은 다음과 같이 브랜드명: 상품명: 가격: 설명: `

    data.push({
        "role": "user",
        "content": question,
    })

    // input.value = ''

    chatGPTAPI()
})

function chatGPTAPI() {
    const loadingMessage = document.getElementById('loading_msg');
    loadingMessage.style.display = 'block';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow',
        max_tokens: 150, // 응답으로 받을 최대 토큰 수 지정
        temperature: 0.7, // 다양한 응답을 얻기 위한 온도 설정 (조절 가능)
    })
    .then(res => res.json())
    .then(res => {
        
        loadingMessage.style.display = 'none';
        answerElement.style.display = 'flex';
        const answer = res.choices[0].message.content.replace(/\n/g, '<br>');
        answerContent.innerHTML = `<p>${answer}</p>`;

        saveQuestion(data[data.length - 1].content);
        saveAnswer(answer);
    })
    .catch((err) => {
        console.log(err);
    });
}

$history.addEventListener('click', (e) => {
    // e.preventDefault();
    $history_print.innerHTML = `<p>${questions}<p>
    <p>${answer}<p>`

})

function saveQuestion(question) {
    const questions = JSON.parse(localStorage.getItem(QUESTION_KEY)) || [];
    questions.push(question);
    localStorage.setItem(QUESTION_KEY, JSON.stringify(questions));
}

function saveAnswer(answer) {
    const answers = JSON.parse(localStorage.getItem(ANSWER_KEY)) || [];
    answers.push(answer);
    localStorage.setItem(ANSWER_KEY, JSON.stringify(answers));
}
