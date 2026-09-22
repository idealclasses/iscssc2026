const curriculumNoticeKey = 'dhakaImperialStudentNoticeSeen';

if (!sessionStorage.getItem(curriculumNoticeKey)) {
  const notice = document.createElement('div');
  notice.className = 'curriculum-notice';
  notice.setAttribute('role', 'dialog');
  notice.setAttribute('aria-modal', 'true');
  notice.setAttribute('aria-labelledby', 'curriculumNoticeTitle');
  notice.innerHTML = `
    <div class="curriculum-notice-backdrop"></div>
    <div class="curriculum-notice-panel">
      <p class="eyebrow">Important notice</p>
      <h2 id="curriculumNoticeTitle">For Dhaka Imperial students only</h2>
      <p>All information, lessons, resources, and services provided on this website are intended for Dhaka Imperial students only. Please confirm that you are a Dhaka Imperial student before continuing.</p>
      <button class="button-primary curriculum-notice-close" type="button">Got it</button>
    </div>
  `;
  document.body.appendChild(notice);

  const closeNotice = () => {
    sessionStorage.setItem(curriculumNoticeKey, 'true');
    notice.remove();
  };
  notice.querySelector('.curriculum-notice-close').addEventListener('click', closeNotice);
  notice.querySelector('.curriculum-notice-backdrop').addEventListener('click', closeNotice);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNotice();
  }, { once: true });
  notice.querySelector('.curriculum-notice-close').focus();
}
