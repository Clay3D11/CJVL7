var sliderIndex = 0;
var sliderItems = [
    "Clainer Ventura",
    "Frontend Dev",
    "Game Dev",
    "UX/UI & Graphics ",
    "Designer",
    "3D Artist",
    "Video Editor",

];
var textSlider = document.querySelector("#dynamicSlider");
var dynamicTextElement = document.querySelector("#dynamicText");

function slideText() {
    if (sliderIndex >= sliderItems.length) {
        sliderIndex = 0;
    }

    dynamicTextElement.innerHTML = "";
    dynamicTextElement.classList.remove("holder-fade");
    void dynamicTextElement.offsetWidth;
    dynamicTextElement.classList.add("holder-fade");

    for (i = 0; i < sliderItems[sliderIndex].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderItems[sliderIndex][i];
        if (letterDiv.innerHTML == " ") {
            letterDiv.innerHTML = " ";
        }
        letterDiv.classList.add("hidden");
        letterDiv.classList.add("text-animation");
        letterDiv.style.animationDelay = i / 8 + "s";
        dynamicTextElement.appendChild(letterDiv);
    }

    sliderIndex++;
}

slideText();
setInterval(slideText, 4000);









