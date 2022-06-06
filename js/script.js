let contentBox = document.querySelector(".content .container");

let contentObj = [
  {
    image: "images/01.jpeg",
    title: "Agency",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque laudantium nemo laborum deleniti veritatis saepe eligendi quam dolorem necessitatibus eum vitae accusantium, repellat commodi quaerat, culpa, tempora amet quidem!",
    link: "https://github.com/yosssef/Agency",
    status: "pending",
  },
  {
    image: "images/02.jpeg",
    title: "XGames",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque laudantium nemo laborum deleniti veritatis saepe eligendi quam dolorem necessitatibus eum vitae accusantium, repellat commodi quaerat, culpa, tempora amet quidem!",
    link: "https://github.com/yosssef/Yat-Project-Team",
    status: "pending",
  },
];

contentObj.forEach((e) => {
  let box = document.createElement("div");
  box.className = "box";

  let imageBox = document.createElement("div");
  imageBox.className = "image-box";

  let mainImage = document.createElement("img");
  mainImage.src = e.image;
  mainImage.setAttribute("alt", "Project Image");

  imageBox.appendChild(mainImage);

  let textBox = document.createElement("div");
  textBox.className = "text-box";

  let title = document.createElement("h3");
  title.textContent = e.title;

  let paragraph = document.createElement("p");
  paragraph.textContent = e.paragraph;

  let link = document.createElement("a");
  link.textContent = "View";
  link.href = e.link;
  link.setAttribute("target", "_blank");

  textBox.appendChild(title);
  textBox.appendChild(paragraph);
  textBox.appendChild(link);

  box.appendChild(imageBox);
  box.appendChild(textBox);

  contentBox.appendChild(box);
});

// Mouse Animation
document.addEventListener("mousemove", (e) => {
  var elem = document.createElement("div");
  elem.setAttribute("class", "trail");
  elem.setAttribute(
    "style",
    `left: ${e.clientX - 10}px; top: ${e.clientY - 10}px;`
  );

  elem.onanimationend = () => {
    elem.remove();
  };

  document.body.insertAdjacentElement("beforeend", elem);
});
