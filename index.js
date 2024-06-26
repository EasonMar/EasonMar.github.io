let speed = 50; // 打字速度（每个字符的延迟时间）
const TextDom = document.querySelector(".text");
const Conversation = [
  `Hi there ~`,
  `I'm Eason ~`,
  `Finally, here I am ~`,
  `I miss you so much ~`,
  `Please waite for my masterpiece ~`,
  `I won't let you down ~`,
  `Coming soon ! ☺`,
];

async function typeWriter() {
  for (text of Conversation) {
    let i = 0;
    TextDom.innerHTML = "";
    while (i < text.length) {
      const t = speed + Math.floor(Math.random() * 100);
      await sleep(t); // 打字速度在50 ~ 150 ms 之间
      TextDom.innerHTML += text.charAt(i);
      i++;
    }

    // 说完一句话等2s
    await sleep(2000);
  }
}

function sleep(t) {
  return new Promise((res) => {
    setTimeout(res, t);
  });
}

+(async function () {
  while (true) {
    await typeWriter();
    await sleep(2000);
  }
})();
