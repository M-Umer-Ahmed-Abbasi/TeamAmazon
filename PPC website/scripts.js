 const scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.number');
  const speed = 2000000; // Adjust the speed of the counter in milliseconds

  const updateCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;
    const formattedTarget = formatNumber(target); // Format target number

    if (count < target) {
      counter.innerText = formatNumber(Math.ceil(count + increment)); // Format incremented number
      setTimeout(() => updateCount(counter), 1);
    } else {
      if (counter.parentElement.querySelector('.label').textContent.includes('Clients')) {
        counter.innerText = formattedTarget + '+';
      } else if (counter.parentElement.querySelector('.label').textContent.includes('Growth')) {
        counter.innerText = formattedTarget + 'X';
      } else {
        counter.innerText = formattedTarget;
      }
    }  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return num;
    }
  };

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const onScroll = () => {
    counters.forEach((counter) => {
      if (isElementInViewport(counter.parentElement)) {
        updateCount(counter);
        window.removeEventListener('scroll', onScroll); // Remove listener after triggering for each counter
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll(); // Trigger counters on initial page load


  
});




