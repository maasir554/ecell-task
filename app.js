let linkGroup = document.querySelector("#link-group");

console.log(linkGroup.children);

for (let i=0; i<linkGroup.children.length; i++){
    console.log(linkGroup.children[i]);

    console.log(linkGroup.children[i].children[0]);

    linkGroup.children[i].addEventListener("mouseover", () => {
        linkGroup.children[i].children[0].style.display = "block";
    })

    linkGroup.children[i].addEventListener("mouseout", () => {
        linkGroup.children[i].children[0].style.display = "none";
    })
}

let hamburgerIsClosed = true;

const hamburgerButton = document.querySelector('.hamburger')
console.log(hamburgerButton);

hamburgerButton.addEventListener('click', () => {
    if(hamburgerIsClosed){
        hamburgerIsClosed = false;
        hamburgerButton.children[0].style.transform = "rotate(45deg) translateY(-50%)";
        hamburgerButton.children[0].style.position = "absolute";
        hamburgerButton.children[0].style.top = "50%";
        hamburgerButton.children[1].style.display = "none";
        hamburgerButton.children[2].style.transform = "rotate(-45deg) translateY(-50%)";
        hamburgerButton.children[2].style.position = "absolute";
        hamburgerButton.children[2].style.top = "50%";
        hamburgerButton.style.alignItems = 'center'
        hamburgerButton.style.justifyContent = 'center'
        hamburgerButton.style.gap= '0'

        document.querySelector('#hamburger-overlay').style.display = 'block';
        document.querySelector('#hamburger-expanded').style.display = 'flex';

    }
    else{
        hamburgerIsClosed = true;
        hamburgerButton.children[0].style.transform = "";
        hamburgerButton.children[0].style.position = "";
        hamburgerButton.children[0].style.top = "";
        hamburgerButton.children[1].style.display = "";
        hamburgerButton.children[2].style.transform = "";
        hamburgerButton.children[2].style.position = "";
        hamburgerButton.children[2].style.top = "";
        hamburgerButton.style.alignItems = ''
        hamburgerButton.style.justifyContent = ''
        hamburgerButton.style.gap= ''
        document.querySelector('#hamburger-overlay').style.display = 'none';
        document.querySelector('#hamburger-expanded').style.display = 'none';
    }
})
