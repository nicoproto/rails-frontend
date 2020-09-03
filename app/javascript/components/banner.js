import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Eat a banana"],
    typeSpeed: 50,
    loop: true
  });
}

export {
  loadDynamicBannerText
};
