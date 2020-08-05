$("#search").submit((event) => {
    alert("search in progress");
    event.preventDefault();
});
$("#home p").html(new Date())