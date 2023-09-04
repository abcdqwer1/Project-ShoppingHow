const userInput = document.getElementById('productType');
const outputElement = document.querySelector('.answerItem');

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

// 폼 제출 이벤트 처리
document.querySelector('.productSearch').addEventListener('submit', async function (e) {
    e.preventDefault(); // 기본 제출 동작 방지

    // 사용자 입력값 가져오기
    const userMessage = userInput.value;

    // GPT-3 API 요청
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${url}`,
        },
        body: JSON.stringify({
            prompt: `브랜드명 : \n상품명 : \n가격 : \n설명 : \n양식으로 5개 추천해줘`,
            max_tokens: 150, // 응답으로 받을 최대 토큰 수 지정
            temperature: 0.7, // 다양한 응답을 얻기 위한 온도 설정 (조절 가능)
        }),
    });

    const responseData = await response.json();
    const recommendedProducts = responseData.choices[0].text;

    // 추천 상품 목록 출력
    outputElement.textContent = recommendedProducts;
});