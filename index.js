//Front end development
//default function
 const labelsArray = ["Firstname", "Lastname", "Phone", "Address", "Emailaddress"]    
//The default function's job is to call other functions to do their jobs      
function init()
{
    renderPageTitle("A new Page title", "Page's sub title!");
    renderInputFields(labelsArray);
    $("main").append(`<br>`);
    //render submit button
    renderButton("submit", "Submit", "submitButton");
    //immediately attach an event to submit button
    submitForm();
    renderButton("reset", "Reset", "resetButton");
    resetForm();
}

function renderInputFields(labelArray)
{
    labelArray.forEach((label)=>{
        //jQuery we want you to render this content on the main html element which is on the DOM
        $("main").append(`
        <label for="${label}">${label}:</label><br>
        <input type="text" id="${label}" name="${label}" value=""><br>
        `)
    })
}

function renderButton(type, label, id)
{
    $("main").append(`
    <input type="${type}" value="${label}" id="${id}">
    `);
}

function renderPageTitle(title, subtitle)
{
    //# for id
    $("#pgTitle").html(title);
    $("#pgTitle").addClass("changeColor");
    //period for classes
    $(".subTitle").html(subtitle);
    $(".subTitle").addClass("strikeLine");
}

function submitForm()
{
    $("#submitButton").click(()=>{
        
        //retrieved the values
        let Firstname = getValue("Firstname");
        let Lastname = getValue("Lastname");
        let Phone = getValue("Phone");
        let Address = getValue("Address");
        //we displayed the values
        $("#result").html(`
            Firstname:  ${Firstname}
            <br>
            Lastname:  ${Lastname}
            <br>
            Phone:  ${Phone}
            <br>
            Address:  ${Address}
            <br>
        `)
    });

    /*$("#submitButton").on("click", ()=> {
        console.log("Button clicked!");
    });*/
}

function getValue(field)
{
    return $(`#${field}`).val();
}

function resetForm() {
    $("#resetButton").click(()=> {
       labelsArray.forEach((label)=> {clearField(label) })

    })

}

function clearField(text) {
     $(`#${text}`).val("");
}
//Invoke my default function with jquery
$(init);