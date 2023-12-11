// 페이지 로딩 시 현재 계절 표시
window.onload = function () {
    getCurrentSeason();
}

function getCurrentSeason() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript에서 월은 0부터 시작하므로 +1 해줍니다.

    let season = '';

    if (currentMonth >= 3 && currentMonth <= 5) {
        season = '봄';
    } else if (currentMonth >= 6 && currentMonth <= 8) {
        season = '여름';
    } else if (currentMonth >= 9 && currentMonth <= 11) {
        season = '가을';
    } else {
        season = '겨울';
    }

    // getElementById로 해당 ID를 가진 요소를 찾아서 존재할 때만 innerHTML을 설정하도록 수정
    const seasonDisplayElement = document.getElementById('seasonDisplay');
    if (seasonDisplayElement) {
        seasonDisplayElement.innerHTML = `현재 계절은 ${season}입니다.`;
    }
}

function changeButtonColor(button, color) {
    button.style.backgroundColor = color;
}

function resetButtonColor(button) {
    button.style.backgroundColor = '';
}

function changePage(season) {
    if (season === 'spring') {
        window.location.href = 'spring.html';
    } else if (season === 'summer') {
        window.location.href = 'summer.html';
    } else if (season === 'fall') {
        window.location.href = 'fall.html';
    } else if (season === 'winter') {
        window.location.href = 'winter.html';
    } else {
        const contentElement = document.getElementById('content');
        if (contentElement) {
            contentElement.innerHTML = `선택한 계절은 ${season}입니다.`;
        }
    }
    // 페이지 변경 시 상단 제목 갱신
    document.getElementById('seasonTitle').innerHTML = season;
}
