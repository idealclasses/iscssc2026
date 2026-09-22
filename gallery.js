const imageModal = document.getElementById('imageModal');

imageModal.addEventListener('show.bs.modal', (event) => {
  const button = event.relatedTarget;
  const src = button.getAttribute('data-src');
  const modalImage = document.getElementById('modalImage');
  const downloadBtn = document.getElementById('downloadBtn');

  modalImage.src = src;
  downloadBtn.href = src;
  downloadBtn.download = src;
});
