const buttons = document.querySelectorAll("button"); 
const output = document.querySelector(".output"); 
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        output.textContent = eval(output.textContent);
      } catch {
        output.textContent = "Error";
      }
    } else if (value === "C") {
      output.textContent = "";
    } else if (value === "BS") {
      output.textContent = output.textContent.slice(0, -1);
    } else {
      output.textContent += value;
    }
  });
});

