function dropDown() {
    var boxes = document.querySelectorAll(".lpFaq__box");

    function openbox(box) {
        var content = box.querySelector(".lpFaq__box__content");

        box.classList.add("lpFaq__box--active");
        content.style.maxHeight = content.scrollHeight + 10 + "px";
    };

    function closebox(box) {
        var content = box.querySelector(".lpFaq__box__content");

        box.classList.remove("lpFaq__box--active");
        content.style.maxHeight = null;
    };

    boxes.forEach(function (box) {
        var handle = box.querySelector(".lpFaq__box__handle"),
            content = box.querySelector(".lpFaq__box__content");

        handle.addEventListener('click', function () {
            if (content.style.maxHeight) {
                closebox(box);
            } else {
                boxes.forEach(function (box) {
                    closebox(box);
                });
                openbox(box);
            };
        });
    });
}; dropDown()