document.getElementById('weather').addEventListener('change', checkInputs);
document.getElementById('temperature').addEventListener('input', checkInputs);

function checkInputs() {
    const weather = document.getElementById('weather').value;
    const temperature = document.getElementById('temperature').value;
    document.getElementById('recommendButton').disabled = !(weather && temperature && temperature >= -20 && temperature <= 40);
}

document.getElementById('recommendButton').addEventListener('click', function() {
    const weather = document.getElementById('weather').value;
    const temperature = parseFloat(document.getElementById('temperature').value);
    let recommendation = '';

    if (temperature < 0) {
        recommendation = '따뜻한 코트와 모자를 추천합니다.';
    } else if (temperature < 15) {
        recommendation = '자켓과 긴팔 티를 추천합니다.';
    } else {
        recommendation = '반팔 티와 반바지를 추천합니다.';
    }

    if (weather === '비') {
        recommendation += ' 우산을 챙기세요.';
    } else if (weather === '눈') {
        recommendation += ' 눈이 많이 오면 부츠를 추천합니다.';
    }

    document.getElementById('recommendation').innerText = recommendation;
});