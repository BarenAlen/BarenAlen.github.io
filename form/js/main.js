(function() {
    "use strict";
    var purchaseForm = document.forms.purchase_form,
        telInput = purchaseForm.elements.tel,
        regExpEmail = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;

    purchaseForm.noValidate = true;

    purchaseForm.onsubmit = function(event) {
        validate(event, this);
    };

    telInput.onkeyup = function() {
        formatTel(this);
    };

    function validate(event, form) {
        var elems = form.elements,
            isEmpty,
            isValid,
            msg = [];

        resetError(elems, form);

        if (!elems.username.value) {
            elems.username.parentNode.classList.add("form-error");
            isEmpty = true;
        }

        if (!elems.tel.value) {
            elems.tel.parentNode.classList.add("form-error");
            isEmpty = true;
        }

        if (elems.tel.value.length !== 17) {
            elems.tel.parentNode.classList.add("form-error");
            msg.push("Неправильный формат номера телефона!");
            isValid = true;
        }

        if (!elems.email.value) {
            elems.email.parentNode.classList.add("form-error");
            isEmpty = true;
        }
        if (!regExpEmail.test(elems.email.value)) {
            elems.email.parentNode.classList.add("form-error");
            msg.push("Неправильный адрес элетронной почты");
            isValid = true;
        }

        if (!elems.requisites.value) {
            elems.requisites.parentNode.classList.add("form-error");
            isEmpty = true;
        }

        if (isEmpty || isValid) {
            event.preventDefault();

            if (isEmpty) {
                msg.push("Внимание! Необходимо заполнить все обязательные поля!");
            }
            showErrorMsg(form, msg);
        }
    }

    function resetError(elems, form) {
        var msgElem = form.querySelector(".form-msg-error");

        [].forEach.call(elems, function(item) {
            item.parentNode.classList.remove("form-error");
        });

        if (msgElem) {
            form.removeChild(msgElem);
        }
    }

    function showErrorMsg(form, msg) {
        var msgElem = document.createElement("p"),
            msgCloseElem = document.createElement("span");

        msgElem.className = "form-msg-error";
        msgCloseElem.className = "msg-close";
        msgCloseElem.innerHTML = "&times;"
        msgElem.innerText = msg.join("\n");
        msgElem.appendChild(msgCloseElem);

        form.insertBefore(msgElem, form.lastElementChild);

        msgCloseElem.addEventListener("click", function() {
        	form.removeChild(msgElem);
        });
    }

    function formatTel(telElem) {

        var num = telElem.value.replace("+7", "").replace(/\D/g, "").split(/(?=.)/),
            i = num.length;

        if (0 <= i) num.unshift("+7");

        if (1 <= i) num.splice(1, 0, "(");

        if (3 <= i) num.splice(5, 0, ") ");

        if (6 <= i) num.splice(9, 0, "-");

        if (8 <= i) num.splice(12, 0, "-");

        if (11 <= i) num.splice(15, num.length - 15);

        telElem.value = num.join("");
    };
})();