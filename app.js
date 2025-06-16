document.addEventListener('DOMContentLoaded', () => {
  // Header scroll hide/show
  let lastScrollTop = 0;
  const header = document.getElementById("mainHeader");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.style.top = "-80px";
    } else {
      header.style.top = "0px";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Contact form mailto
  const sendBtn = document.getElementById('sendBtn');
  if (sendBtn) {
    sendBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!fullName || !email || !message) {
        alert('Please fill out all fields before sending.');
        return;
      }

      const lineBreak = '%0D%0A';
      const subject = encodeURIComponent(`Message from ${fullName}`);
      const body =
        'Name: ' + encodeURIComponent(fullName) + lineBreak +
        'Email: ' + encodeURIComponent(email) + lineBreak + lineBreak +
        'Message:' + lineBreak + encodeURIComponent(message);

      const mailtoLink = `mailto:ridhamverma843@gmail.com?subject=${subject}&body=${body}`;

      const confirmMsg =
        `Please confirm your message:\n\n` +
        `Name: ${fullName}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}\n\n` +
        `Click OK to open your email client.`;

      if (confirm(confirmMsg)) {
        window.location.href = mailtoLink;
      }
    });
  }

  // Image hover color swap
  const img = document.getElementById('gridImage');
  if (img) {
    const bwSrc = 'images/grid1.png';
    const colorSrc = 'images/grid1Color.png';

    img.addEventListener('mouseenter', () => {
      img.src = colorSrc;
    });

    img.addEventListener('mouseleave', () => {
      img.src = bwSrc;
    });
  }

  // Video hover play/pause and hover sign
  const videoBoxes = document.querySelectorAll('.project-vidbox');
  videoBoxes.forEach(box => {
    const video = box.querySelector('video');
    const hoverSign = box.querySelector('.hover-sign');

    video.addEventListener('mouseover', () => {
      video.play();
      if (hoverSign) hoverSign.classList.add('active');
    });

    video.addEventListener('mouseout', () => {
      video.pause();
      if (hoverSign) hoverSign.classList.remove('active');
    });
  });

  // Sidebar open/close
  const menu = document.querySelector('.menu-icon');
  const sideBar = document.querySelector('.sidebar');
  const closeIcon = document.querySelector('.close-icon');

  if (menu && sideBar && closeIcon) {
    menu.addEventListener("click", () => {
      sideBar.classList.remove("close-sidebar");document.addEventListener('DOMContentLoaded', () => {
  const sendBtn = document.getElementById('sendBtn');
  const modal = document.getElementById('customModal');
  const modalMessage = document.getElementById('modalMessage');
  const modalCancel = document.getElementById('modalCancel');
  const modalConfirm = document.getElementById('modalConfirm');

  if (sendBtn && modal && modalMessage && modalCancel && modalConfirm) {
    sendBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!fullName || !email || !message) {
        alert('Please fill out all fields before sending.');
        return;
      }

      modalMessage.textContent =
        `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`;

      modal.style.display = 'flex';

      modal.dataset.fullName = fullName;
      modal.dataset.email = email;
      modal.dataset.message = message;
    });

    modalCancel.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modalConfirm.addEventListener('click', () => {
      const fullName = encodeURIComponent(modal.dataset.fullName || '');
      const email = encodeURIComponent(modal.dataset.email || '');
      const message = encodeURIComponent(modal.dataset.message || '');

      const lineBreak = '%0D%0A';
      const subject = encodeURIComponent(`Message from ${decodeURIComponent(fullName)}`);
      const body =
        'Name: ' + fullName + lineBreak +
        'Email: ' + email + lineBreak + lineBreak +
        'Message:' + lineBreak + message;

      const mailtoLink = `mailto:ridhamverma843@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;
      modal.style.display = 'none';
    });
  } else {
    // Debugging: log missing elements
    console.log('One or more modal elements not found:', {
      sendBtn, modal, modalMessage, modalCancel, modalConfirm
    });
  }
});

      sideBar.classList.add("open-sidebar");
    });

    closeIcon.addEventListener("click", () => {
      sideBar.classList.remove("open-sidebar");
      sideBar.classList.add("close-sidebar");
    });
  }


  // Smooth scroll to contact section
  const scrollContactBtn = document.getElementById('scrollContactBtn');
  const contactSection = document.getElementById('contact-section');

  if (scrollContactBtn && contactSection) {
    scrollContactBtn.addEventListener('click', function(e) {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
