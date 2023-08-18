const textarea = document.querySelector("textarea"),
FileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
    //getting selected option text
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text; 
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
});

saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    //URL.createObjectURL creates a url that represent passed object
    const fileURL = URL.createObjectURL(blob);
    const link = document.createElement("a"); //creating <a> tag
    link.download = FileNameInput.value;    // passing filename as download of link
    link.href = fileURL; // passing fileUrl as href value  of link
    link.click(); //clicking link so the file downlad
    console.log(fileURL);
});