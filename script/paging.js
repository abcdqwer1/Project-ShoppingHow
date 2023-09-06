
const $productSearch = document.querySelector('.productSearch');
// const $btn = document.querySelector('.btn2');

// let page = 1;

const page1 = `

<label for="productType">원하시는 상품 종류가 무엇인가요?</label>
<input in="productType" id="productType" type="text" placeholder="예) 신발, 자켓, 없음" autocomplete="on">

<label for="productPrice">원하시는 가격대가 얼마인가요?</label>
<input in="productPrice" id="productPrice" type="text" placeholder="예) 10만원대, 5만원 이상">

<label for="destination">착용 장소가 어떻게 되나요?</label>
<input in="destination" id="destination" type="text" placeholder="예) 바다여행, 제주도, 라이딩">

<div class="genderSelect" required="on">
    <legend>성별</legend>
    <div>
        <label for="gender">남</label>
        <input in="gender" name="gender" id="male" value="male" type="radio" >
        <label for="gender">여</label>
        <input in="gender" name="gender" id="females" value="females" 
        type="radio">
    </div>
</div>

<div class="selectYear">
    <label for="age">나이</label>
    <select in="age" name="age" id="year" required="on"></select>
</div>

<button class="btn1" type="submit">검색</button>

<button class="btn2" type="button">내용 직접 입력</button>


`;

const page2 = `

<label for="prompt"></label>
<input id="question_prompt" in="prompt" type="text">

<button class="btn1" type="submit">검색</button>

<button class="btn2" id="back_btn" type="button">뒤로 가기</button>

`;


$productSearch.innerHTML = page1;

let currentPage = page1;

const pageChange = $productSearch.querySelector('.btn2')
        pageChange.addEventListener('click',function(){

            if (currentPage === page1) {
                $productSearch.innerHTML = page2;
                currentPage = page2;
                // PageRender2()
            } else {
                $productSearch.innerHTML = page1;
                currentPage = page1;
                // PageRender1();
            }
        });

        const backButton = document.getElementById('back_btn');

        backButton.addEventListener('click', function () {
        if (currentPage === page2) {
            $productSearch.innerHTML = page1;
            currentPage = page1;
        } else {
            $productSearch.innerHTML = page1;
            currentPage = page1;
        }
        });



