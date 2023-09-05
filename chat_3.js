// chat.js 파일
const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $answer = document.querySelector('.answer');

const data = [];
const url = 'https://estsoft-openai-api.jejucodingcamp.workers.dev/'; 

$button.addEventListener('click', async (e) => {
    e.preventDefault();

    // 사용자 입력 데이터 가져오기
    const productType = document.getElementById('productType').value;
    const productPrice = document.getElementById('productPrice').value;
    const destination = document.getElementById('destination').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById('year').value;

    if (!productType || !productPrice || !destination || !gender || !age) {
        alert('모든 입력 필드를 작성하세요.');
        return;
    }

    // 질문 생성
    const question = `${destination}에서 ${productType} ${productPrice} ${gender.value} ${age}년생이 입을 거\n브랜드명 :\n상품명 :\n가격 :\n설명 :\n양식으로 추천해줘`;

    console.log(question);

    // 사용자 질문을 데이터에 추가
    data.push({
        role: 'user',
        content: question,
    });

    // GPT-3 API 호출
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: data.map(item => item.content).join('\n'),
        }),
    });

    const responseData = await response.json();
    const answer = responseData.choices[0].text;

    // 답변을 화면에 표시
    const answerContent = document.getElementById('answerContent');
    answerContent.textContent = answer;
    $answer.style.display = 'block';
});