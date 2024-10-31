const emailForm = document.getElementById('emailForm');
const spinner = document.getElementById('spinner');

emailForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;

  // 요청 시작 시 스피너 표시
  spinner.style.display = 'block';

  try {
    const response = await fetch(
      'https://on-off-mix-scraper.vercel.app/api/email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert('구독 신청이 완료되었습니다.');
    } else {
      alert('등록에 실패했습니다. 다시 시도해주세요.');
    }
    emailForm.reset();
  } catch (e) {
    console.error(e);
    alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  } finally {
    // 요청 완료 후 스피너 숨기기
    spinner.style.display = 'none';
  }
});
