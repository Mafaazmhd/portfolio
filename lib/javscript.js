const content = document.getElementById("contents");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");

function changeContent(index) {
    if (index === 0) {
        content.innerHTML = disc[0];
        b1.style.backgroundColor = "#30364F";
        b2.style.backgroundColor = "#478B8D";
        b3.style.backgroundColor = "#478B8D";
    }else if (index === 1) {
        content.innerHTML = disc[1];
        b1.style.backgroundColor = "#478B8D";
        b2.style.backgroundColor = "#30364F";
        b3.style.backgroundColor = "#478B8D";
    }else if (index === 2) {
        content.innerHTML = disc[2];
        b1.style.backgroundColor = "#478B8D";
        b2.style.backgroundColor = "#478B8D";
        b3.style.backgroundColor = "#30364F";
    }
}

const disc = ["I am a Python developer with 5 years of hands-on experience building efficient, reliable software. Over the years, I have developed a deep proficiency in the language, focusing heavily on scripting, automation, and backend logic. My portfolio includes designing and deploying numerous command-line interface (CLI) applications aimed at streamlining workflows and parsing data, alongside building an interactive chatbot application. I am highly comfortable managing memory, optimizing code performance, and applying clean, modular design principles to solve complex programmatic challenges.",
    "Leveraging 2 years of focused experience, I have developed a strong foundation in C and C++ with a distinct emphasis on Object-Oriented Programming (OOP). My expertise lies in architecting modular and highly reusable software by effectively implementing core tenets like inheritance, polymorphism, and encapsulation. Navigating the unique landscape of C/C++, I am adept at balancing these high-level abstractions with granular, low-level control—safely managing memory through pointers, optimizing execution speeds, and engineering efficient data structures from scratch to deliver low-latency performance.",
    "I am a disciplined problem solver with a strong command of data structures and algorithms, honed through extensive practice on platforms like LeetCode. I approach complex programmatic challenges by systematically breaking them down, analyzing time and space complexities, and writing optimized code. From mastering core concepts like arrays, linked lists, and trees to implementing advanced patterns like dynamic programming, sliding windows, and two-pointer techniques, I focus on writing clean, edge-case-proof solutions. This continuous training has sharpened my analytical thinking, allowing me to quickly identify optimal strategies and engineer high-performance software under tight constraints."];

document.getElementById("contents").innerHTML = disc[0];
b1.style.backgroundColor = "#30364F";

b1.addEventListener("click", () => changeContent(0));
b2.addEventListener("click", () => changeContent(1));
b3.addEventListener("click", () => changeContent(2));