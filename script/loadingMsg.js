function loadingMsg() {
    // const $productSearch = document.querySelector('.productSearch');
    const $loadingMessage = document.getElementById('loading_msg');
    
    // 버튼 클릭 시 로딩 메시지 표시
    $loadingMessage.style.display = 'block';

    // 비동기 작업 (예: 내용 입력, 처리)을 시뮬레이트하기 위해 setTimeout 사용
    setTimeout(function () {
        // 내용 입력이 완료되면 로딩 메시지 숨김
        $loadingMessage.style.display = 'none';
        
        // 여기에서 원하는 작업을 수행하십시오.
        // 예: 내용 입력 후 처리

        // 이 코드는 내용 입력 후 원하는 작업을 수행하는 부분입니다.

    }, 2000); // 2초 후에 내용 입력이 완료되었다고 가정
}