$("form").submit(e => {
    e.preventDefault()

    const firstName = $("#firstName").val()
    const lastName = $("#lastName").val()

    if(firstName === "" || lastName === "") {
        alert("Please fill all the fields")
        return
    }

    console.log({firstName, lastName})
    $("#firstName").val("")
    $("#lastName").val("")
})