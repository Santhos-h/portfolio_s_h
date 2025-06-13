const text = baffle(".data");
text.set({
  characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
  speed: 140
});

text.start();
text.reveal(4000);
// TEXT REVEAL ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const text = "As a passionate web developer, I specialize in creating visually stunning and user-friendly websites. With a keen eye for detail and a strong foundation in graphic design, I bring ideas to life through innovative layouts and engaging visuals. My goal is to enhance user experience while ensuring brand consistency. I am eager to collaborate with clients to transform their visions into reality. Let's work together to create a digital presence that stands out and resonates with your audience.";
  const typewriter = document.getElementById("typewriter");

  let index = 0;

  const revealText = () => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        typewriter.textContent += text[index];
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealText();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(typewriter);
});

document.addEventListener("DOMContentLoaded", () => {
  const text = "Govt High School, Kaveriyammapatty.";
  const typewriter = document.getElementById("ten");

  let index = 0;

  const revealText = () => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        typewriter.textContent += text[index];
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 80);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealText();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(typewriter);
});

document.addEventListener("DOMContentLoaded", () => {
  const text = "Govt Higher Secondary School, Kallimanthayam.";
  const typewriter = document.getElementById("twel");

  let index = 0;

  const revealText = () => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        typewriter.textContent += text[index];
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 80);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealText();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(typewriter);
});

document.addEventListener("DOMContentLoaded", () => {
  const text = "Madurai Kamaraj University";
  const typewriter = document.getElementById("cg");

  let index = 0;

  const revealText = () => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        typewriter.textContent += text[index];
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 80);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealText();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(typewriter);
});

document.addEventListener("DOMContentLoaded", () => {
  const text = "A bike showroom is a retail space where customers can explore and purchase a variety of bicycles, ranging from road bikes to mountain bikes, electric bikes, and more. It typically features a wide selection of models, along with accessories such as helmets, gears, and parts. Showrooms may also offer services like test rides, bike repairs, and maintenance.";
  const typewriter = document.getElementById("bike");

  let index = 0;

  const revealText = () => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        typewriter.textContent += text[index];
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 30);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealText();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(typewriter);
});

document.addEventListener("DOMContentLoaded", () => {
  const text = "A social media website allows users to interact with each other by posting updates, photo videos, and thoughts. Users can follow friends, family, or other profiles to stay updated on their activities. Features often include messaging, liking and commenting on posts, and sharing content with a larger audience. Examples include Facebook, Instagram, and Twitter.";
  const typewriter = document.getElementById("so");

  let index = 0;

  const revealText = () => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        typewriter.textContent += text[index];
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 30);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealText();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(typewriter);
});

document.addEventListener("DOMContentLoaded", () => {
  const text = "Welcome to Website, where luxury meets fragrance. Explore our carefully curated collection of timeless classics and modern scents, perfect for every occasion. Indulge in the art of fine perfumery and find your signature scent today!";
  const typewriter = document.getElementById("perfum");

  let index = 0;

  const revealText = () => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        typewriter.textContent += text[index];
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 30);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealText();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(typewriter);
});

document.addEventListener("DOMContentLoaded", () => {
  const text = "A clothing shop website is an online platform that displays and sells apparel. It allows users to browse products, filter by category or size, add items to a cart, and complete purchases securely. It offers a convenient way to shop for clothes anytime, anywhere.";
  const typewriter = document.getElementById("cloth");

  let index = 0;

  const revealText = () => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        typewriter.textContent += text[index];
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 30);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealText();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(typewriter);
});


// ANIMATION
document.addEventListener("DOMContentLoaded", function() {
  const photo = document.querySelector('.content .photo');
  photo.classList.add('slide-in-photo');
});
// ANIMATION TRIGGER
const animateMeElements = document.querySelectorAll("#animate-me");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-photo");
    }
  });
});

animateMeElements.forEach(element => {
  observer.observe(element);
});
// ANIMATION TRIGGER 2
const animateMeElement = document.querySelectorAll("#animate-over");
const observers = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-next-photo");
    }
  });
});

animateMeElement.forEach(element => {
  observers.observe(element);
});
// ANIMATION TRIGGER 3
const animateMeElementes = document.querySelectorAll("#animate-up");
const observerse = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-up");
    }
  });
});

animateMeElementes.forEach(element => {
  observerse.observe(element);
});
// ANIMATION TRIGGER 4
const animateMeElementese = document.querySelectorAll("#scale-up");
const observerses = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scale-out");
    }
  });
});

animateMeElementese.forEach(element => {
  observerses.observe(element);
});

// BUBBLE ON CURSOR

// 
