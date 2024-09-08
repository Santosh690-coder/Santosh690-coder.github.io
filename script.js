const colpick = document.getElementById("color-picker");
const bodyElement = document.getElementById("body-element");
const parabutton = document.getElementById("paragraph");
/* const h1button = document.getElementById("h1");
const h2button = document.getElementById("h2");
const h3button = document.getElementById("h3");
const h4button = document.getElementById("h4");
const h5button = document.getElementById("h5");
const h6button = document.getElementById("h6"); */
const hbutton = document.getElementById("hStyle");
colpick.addEventListener("change", (event) => {
  const selectedColor = event.target.value;

  bodyElement.style.backgroundColor = selectedColor;
});

parabutton.addEventListener("click", () => {
  var prop = prompt("Enter the paragraph you want to enter\n");

  var para = document.createElement("p");
  para.innerHTML = prop;
  document.body.appendChild(para);
});

hbutton.addEventListener("change", (event) => {
  //const selectedtag = event.target.value;
  var prop = prompt("Enter the sentence");
  var hs = document.createElement(event.target.value);
  hs.innerHTML = prop;
  document.body.appendChild(hs);
});

const tagOptions = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"];

const optionsContainer = document.querySelector(".options");
const outputContainer = document.querySelector(".output");
const tagSelect = document.getElementById("tags");
const paragraphSlider = document.getElementById("paragraphs");
const wordSlider = document.getElementById("words");
const paragraphsValue = document.getElementById("paragraphsValue");
const wordsValue = document.getElementById("wordsValue");

function createOptionsUI() {
  tagOptions.forEach((tag) => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = `<${tag}>`;
    tagSelect.appendChild(option);
  });

  paragraphSlider.addEventListener("input", updateParagraphsValue);
  wordSlider.addEventListener("input", updateWordsValue);
  const generateButton = document.getElementById("generate");
  generateButton.addEventListener("click", generateLoremIpsum);
}

function updateParagraphsValue() {
  paragraphsValue.textContent = paragraphSlider.value;
}
function updateWordsValue() {
  wordsValue.textContent = wordSlider.value;
}
function generateLoremIpsum() {
  const paragraphs = parseInt(paragraphSlider.value);
  const tag = document.getElementById("tags").value;
  const includeHTML = document.getElementById("include").value;
  const wordsPerParagraph = parseInt(wordSlider.value);
  const LoremIpsumText = generateText(
    paragraphs,
    tag,
    includeHTML,
    wordsPerParagraph
  );
  displayLoremIpsum(LoremIpsumText);
}
function generateText(paragraphs, tag, includeHTML, wordsPerParagraph) {
  const placeHolderText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, repellendus ex. Velit excepturi iure consequuntur sed, eius nemo voluptatibus magni laborum temporibus veritatis, molestias doloribus ipsa sit. Iure, similique, molestiae distinctio officiis expedita explicabo tenetur voluptas numquam nobis beatae fugit.";
  const loremIpsumArray = new Array(paragraphs).fill("");

  for (let i = 0; i < paragraphs; i++) {
    const words = generateWords(wordsPerParagraph);
    loremIpsumArray[i] =
      includeHTML === "Yes" ? `<${tag}>${words}</${tag}>` : words;
  }
  return loremIpsumArray.join("\n");
}

function generateWords(numWords) {
  const loremIpsumText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odit atque fuga dolores facilis ab rem dolorum iusto deserunt, similique quaerat necessitatibus numquam voluptatem perferendis aspernatur sapiente impedit distinctio harum sunt. Error fugiat quia, laudantium maiores autem quaerat iste sit neque nemo recusandae. Laborum distinctio pariatur asperiores cupiditate modi consequuntur iusto aperiam, possimus quia deserunt esse, assumenda, vero maxime quas iure doloribus. Modi quis, quisquam asperiores numquam inventore esse tempora possimus consequuntur ad nemo doloribus voluptas nihil enim, ab illum repudiandae eaque necessitatibus. Ex inventore ipsum dicta voluptatibus a nemo rerum optio excepturi, sit, ducimus illum quo non quis in porro cupiditate! Reprehenderit molestiae nulla excepturi eos eveniet laboriosam quod beatae tempore dolorem quidem illum accusantium magnam laborum, dicta aliquid? Perferendis maxime labore officiis pariatur, dolores sed quos quasi recusandae consequuntur reprehenderit, dolore cupiditate voluptas tempore! Sint fugit eveniet culpa quasi omnis itaque facilis rem odit numquam assumenda. Rem odit odio, doloribus magnam ducimus quae harum id iste animi! Cum et quos quo modi, eaque quae assumenda ea doloribus ipsum numquam nostrum labore commodi nihil. Aliquid explicabo dicta eaque velit fugiat quasi autem sint, eveniet vero! Minus est, omnis magni quod a unde qui modi aliquam, ullam suscipit, possimus non.";

  const words = loremIpsumText.split(" ");

  if (numWords <= words.length) {
    return words.slice(0, numWords).join(" ");
  } else {
    return words.join(" ");
  }
}

function displayLoremIpsum(text) {
  outputContainer.innerHTML = text;
}

createOptionsUI();
