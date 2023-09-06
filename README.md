# Project-ShoppingHow 
# 쇼핑 팁! 쇼핑하우
어떤 상품을 구매할지 고민될때 상황에 맞는 쇼핑 아이템 추천해드립니다.

1. 목표와 기능

1.1 목표
- 어떤 옷을 구매 할지 모르는 사람을 위한 안내 서비스

1.2 기능
- 조건에 맞는 옷 브랜드를 추천 받을 수 있음.
    원하는 상품 종류, 가격대, 착용 할 장소 등을 적어서 추천 받을 수 있습니다.

- 내용 요청시 구체적인 질문을 할수록 보다 구체적인 답변을 얻을 수 있습니다.
    ex) 상품 종류 입력란에 "신발과 자켓 그리고 비슷한 옷들" 입력

- 정해진 틀에서 검색하지 않고 자유도 있는 질문을 원하면 "내용 직접 입력" 버튼을 누른 후 자유롭게 질문이 가능합니다.
    ex) 집들이 선물로 30대가 좋아할만한 상품 추천해줘

  
2. 개발 환경 및 배포 URL

2.1 개발 환경
- JavaScript
- 서비스 배포 환경
- github page

2.2 배포 URL

3. 프로젝트 구조와 개발 일정

3.2 개발 일정


3.2 프로젝트 구조

    │  index.html
    │  README.md
    │  search.html
    │
    ├─css
    │      search.css
    │      style.css
    │
    ├─img
    └─script
            chat.js
            chatGPTAPI.js
            chat_1.js
            loadingMsg.js
            mvSearchHome.js
            paging.js
            setDateYear.js

4. 역할 분담
- 개인 프로젝트


5. UI / BM


![image](https://github.com/abcdqwer1/Project-ShoppingHow/assets/68181016/18bc1e2f-422a-4425-ac2a-68282468f4aa)

- 메인화면으로 상품 종류, 가격대, 착용 장소, 성별, 나이를 입력하여 조건에 맞는 상품을 추천 받을 수 있습니다.

![image](https://github.com/abcdqwer1/Project-ShoppingHow/assets/68181016/b5ac9d98-b2c1-4375-962a-8e3e0d04971c)

- 모든 칸에 내용이 채워지지 않으면 "모든 입력 필드를 작성하세요." 라는 얼럿을 띄우며 텍스트 입력이 되지않은것을 알려줍니다.

![image](https://github.com/abcdqwer1/Project-ShoppingHow/assets/68181016/25113a1f-c344-420d-9728-5e82796b5f42)

- 검색을 누르면 화면 하단에 "답변을 작성 중 입니다. 잠시만 기다려주세요." 라는 문구가 답변이 완료될때까지 안내됩니다.

![image](https://github.com/abcdqwer1/Project-ShoppingHow/assets/68181016/dcec83a5-ef5d-4292-9393-ec17393da98f)

- 각 input 값으로 들어 갈 수 있는 내용은 자유도가 높은편이며, 다소 허무맹랑한 내용도 chatGPT에 의해 답변을 받을 수 있습니다.
- 답변은 브랜드명: 상품명: 가격: 설명: 4가지 요소로 제공됩니다.

![image](https://github.com/abcdqwer1/Project-ShoppingHow/assets/68181016/60256107-e2bc-439b-a775-120da6be8460)

![image](https://github.com/abcdqwer1/Project-ShoppingHow/assets/68181016/25cdb48d-20c9-425d-a815-2cb5c1fbe95e)

![image](https://github.com/abcdqwer1/Project-ShoppingHow/assets/68181016/f99629da-684f-4808-9d24-fe7de5c162d8)
