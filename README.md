# ShoppingHow 
# 쇼핑 팁! 쇼핑하우

어떤 상품을 구매할지 고민될때 상황에 맞는 쇼핑 아이템 추천해드립니다.

**1. 목표와 기능**

**1.1 목표**
- 어떤 옷을 구매 할지 모르는 사람을 위한 안내 서비스

**1.2 기능**
- 조건에 맞는 옷 브랜드를 추천 받을 수 있음.
    원하는 상품 종류, 가격대, 착용 할 장소 등을 적어서 추천 받을 수 있습니다.

- 내용 요청시 구체적인 질문을 할수록 보다 구체적인 답변을 얻을 수 있습니다.
    ex) 상품 종류 입력란에 "신발과 자켓 그리고 비슷한 옷들" 입력

- 정해진 틀에서 검색하지 않고 자유도 있는 질문을 원하면 "내용 직접 입력" 버튼을 누른 후 자유롭게 질문이 가능합니다.
    ex) 집들이 선물로 30대가 좋아할만한 상품 추천해줘

  
**2. 개발 환경 및 배포 URL**

**2.1 개발 환경**
- JavaScript
  
**서비스 배포 환경**
- github page

**2.2 배포 URL** 
- https://abcdqwer1.github.io/Project-ShoppingHow/

**3. 프로젝트 구조와 개발 일정**

**3.2 개발 일정**


**3.2 프로젝트 구조**

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
            

**4. 역할 분담**
- 개인 프로젝트


**5. UI / BM**


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


**6. 트러블 슈팅**

1. https 인증에러

배포한 내용을 확인해보니 메인화면에 나이 선택박스에 아무것도 나오지 않았음.
로컬에서 라이브서버를 띄워 다시 확인해봐도 정상으로 나오는데 github pages로 호스팅한 웹페이지에서만 나오지 않았다.
한참을 확인한 후 결국 로그를 확인해본 결과 

Mixed Content: The page at 'https://abcdqwer1.github.io/Project-ShoppingHow/' was loaded over HTTPS, but requested an insecure script 'http://code.jquery.com/jquery-latest.min.js'. This request has been blocked; the content must be served over HTTPS.

출생년도를 입력받기 위해 사용한 제이쿼리 선언이 문제였다.
github pages로 호스팅한 웹페이지는 ssl인증서가 적용된 상태이기 때문에 http://로 불러온 url이 문제가 되었다.
문제가되는 url을 https://로 수정해준 후 정상 동작 되는것을 확인 했으며, 별거 아닌 문제로 시간을 많이 잡아먹어 후회하며 앞으로는 빠른 로그 확인이 필요하다고 생각했다.

* https는 선택이 아닌 필수 항상 확인하자
* log 확인하는 습관을 기르자
  

**7. 개발하며 느낀점**


**1. 왜 이렇게 모르는게 많을까?**

   프로젝트를 하며 HTML, CSS, JavaScript를 배웠던것들이 기억에 나질 않아 정말 답답했다.
   머리로는 생각한 디자인과 기능들이 막상 코딩을 할때 기억나지 않아 교안을 찾아보고, 구글링하고, chatGPT에 물어보고 한줄의 코딩에 한시간에 시간을 쏟다보니 기억하지 못하는게 정말 많구나 라는 생각이 들었다.
   공부는 머리로 하지만 기억은 머리가 아닌 정리된 내용에서 나온다는 것을 많이 느꼈고, 검색하고 찾을 줄 아는것도 중요하지만 **"사용해본 코드는 정리해놓는게 좋겠다"** 라는 생각을 했다.
   노션과 깃허브의 중요성을 더욱 깨닫는 프로젝트였다.


**2. 됐다가 안됐다가**

   날 너무 힘들게 한 건 Ctrl+S 이다. 새로운 코드를 작성하고 저장만 하면 방금 전까지 동작하던 코드들이 이상해지거나 나타나질 않았다.
   시작하면서 기획했던 많은 것들이 살이 빠져 결국 앙상한 코드들로 변해가는게 너무 안타까웠다.
   처음에는 모듈화된 프로그래밍을 목표했지만 끊임없이 생겨나는 에러들로 조금씩 포기하게 되었고, 완성은 해야겠다는 조급한 마음이 남아 내가 생각했던 만큼 되지 못했다.
   욕심부리다 보통도 가지 못할바엔 상황(개발 기간, 요구 사항, 가용 인원 수 등)에 맞는 기획이 필요하다고 생각이 든다.
  

**3. 코딩만큼 중요한 것들**

   나의 이번 프로젝트 목표는 배워왔던것들을 토대로 개발하여 내 코딩 실력을 늘리는 것 이었다.
   프로젝트를 하며 느낀 건 "개발은 코딩으로만 하는게 아니다" 라는 생각이 들었다.
   코딩을 시작하기 위해 요구사항에 충족하는 기획을하고 개발 일정을 만들고 디자인을 하고 정말 할게 많다고 생각 들었다.
   이번 프로젝트에서는 코딩 실력만 늘리는것이 전부가 아니라 프로젝트의 전반적인 과정을 이해했고 많은 것을 얻었다고 생각한다.
