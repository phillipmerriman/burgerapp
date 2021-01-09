const burgerTemplate = (burgerName, id, devoured) => {
    const burgerContainer = $("<div>").attr({
        class: "content-burger__list",
        id: id
    });

    const name = $("<p>");

    const button = $("<button>").attr({
        "data-id": id,
        class: "btn btn-default favorites",
        "data-state": devoured
    });

    name.html(burgerName);
    button.html("Devour!");

    burgerContainer.append(name, button);

    return burgerContainer;
}

const displayNewBurger = (burger) => {
    const name = burger.burger_name;
    const id = burger.id;
    const devoured =  burger.devoured;

    const newBurger = burgerTemplate(name, id, devoured);

    $(".content-burger").prepend(newBurger);
    $("input").val("");
};

const addBurgerFail = (response) => {
    alert('No burger added.');
};

$("button[type='submit']").on("click", function (event) {
    event.preventDefault();

    const burgerName = $("input[name='burger_name']").val();

    $.ajax({
        url: '/add',
        method: 'POST',
        data: {
            burger_name: burgerName
        }
    }).then(displayNewBurger).catch(addBurgerFail);
});