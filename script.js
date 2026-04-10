// 간단한 모달으로 프로젝트 상세 표시
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

document.addEventListener('click', e => {
  if (e.target.matches('.details-btn')) {
    const id = e.target.dataset.project;
    openProjectModal(id);
  }
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

function openProjectModal(id) {
  // 현재는 'fan' 하나만 구현. 필요하면 프로젝트 데이터를 배열로 확장하세요.
  if (id === 'fan') {
    modalBody.innerHTML = `
      <h3>LapVIEW를 이용한 Fan 속도 제어</h3>
      <p><strong>Tool:</strong> LapVIEW, DAQ, Bread Board, Fan</p>
      <p>입력 주파수에 따라 출력되는 전압으로 Fan 모터의 속도를 제어했습니다. DAQ와 LapVIEW를 이용해 PWM 출력 및 PID 제어를 구현하여 주파수 제어로 속도를 조절했습니다.</p>
    `;
  } else {
    modalBody.innerHTML = `<p>프로젝트 정보를 준비 중입니다.</p>`;
  }
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  modalBody.innerHTML = '';
}
