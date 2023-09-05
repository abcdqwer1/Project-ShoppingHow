// 폼 제출 이벤트 처리
document.querySelector('.productSearch').addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 제출 동작 방지

    // 사용자 입력값 가져오기
    const productType = document.getElementById('productType').value;
    const productPrice = document.getElementById('productPrice').value;
    const destination = document.getElementById('destination').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = document.getElementById('year').value;

    // 사용자 입력값을 기반으로 추천 상품 목록 생성
    const recommendedProducts = generateRecommendations(productType, productPrice, destination, gender, age);

    // 추천 상품 목록을 출력하기 위한 요소 가져오기
    const outputElement = document.getElementById('output');

    // 추천 상품 목록 출력
    outputElement.innerHTML = ''; // 이전 내용 초기화
    for (const product of recommendedProducts) {
        const productInfo = `
            <h3>브랜드명: ${product.brand}</h3>
            <p>상품명: ${product.productName}</p>
            <p>가격: ${product.price}</p>
            <p>설명: ${product.description}</p>
        `;
        const productDiv = document.createElement('div');
        productDiv.innerHTML = productInfo;
        outputElement.appendChild(productDiv);
    }
});

// 사용자 입력값을 기반으로 추천 상품 목록 생성하는 함수
function generateRecommendations(productType, productPrice, destination, gender, age) {
    // 여기에서 추천 로직을 구현하세요.
    // 예를 들어, 미리 정의된 데이터나 외부 데이터베이스를 기반으로 추천 상품을 가져올 수 있습니다.
    // 이 함수에서는 더미 데이터를 사용하도록 하겠습니다.

    // 더미 데이터 (실제 데이터로 대체하세요)
    const dummyData = [
        {
            brand: 'Brand 1',
            productName: 'Product 1',
            price: '100,000원',
            description: '상품 1 설명'
        },
        {
            brand: 'Brand 2',
            productName: 'Product 2',
            price: '50,000원',
            description: '상품 2 설명'
        },
        {
            brand: 'Brand 3',
            productName: 'Product 3',
            price: '80,000원',
            description: '상품 3 설명'
        },
        {
            brand: 'Brand 4',
            productName: 'Product 4',
            price: '120,000원',
            description: '상품 4 설명'
        },
        {
            brand: 'Brand 5',
            productName: 'Product 5',
            price: '70,000원',
            description: '상품 5 설명'
        }
    ];

    return dummyData; // 추천 상품 목록 반환
}
