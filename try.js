const jk = (file) => {
    const fs = require("fs");
    const jokes = fs
      .readFileSync(file, "utf8")
      .split("Q:")
      .map((i) => {
        i.trim();
        return `Q: ${i}`;
      });
    return jokes;
  };
  
  const random = (jokes) => {
    const random = Math.floor(Math.random() * jokes.length);
    return jokes[random];
  };
  
  
  const jokes = jk("jokes.txt");
  
  console.log(random(jokes));
  