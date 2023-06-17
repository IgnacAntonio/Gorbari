function getAllHumans() {
    var humansList = document.getElementById('humansList');
    fetch('/cementery')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        humansList.innerHTML = JSON.stringify(data);
    })["catch"](function (error) {
        console.error(error);
    });
}
function getHumanByName() {
    var _a;
    var nameInput = document.getElementById('nameInput');
    var name = (_a = nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) === null || _a === void 0 ? void 0 : _a.trim();
    if (name) {
        fetch("/cementery/".concat(name))
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else if (response.status === 404) {
                throw new Error('Person Not Found');
            }
            else {
                throw new Error('Something went wrong');
            }
        })
            .then(function (data) {
            var humanDetails = document.getElementById('humanDetails');
            if (humanDetails) {
                humanDetails.innerHTML = JSON.stringify(data);
            }
        })["catch"](function (error) {
            console.error(error);
        });
    }
}
function addPerson() {
    var firstNameInput = document.getElementById('firstNameInput');
    var lastNameInput = document.getElementById('lastNameInput');
    var yearOfBirthInput = document.getElementById('yearOfBirthInput');
    var yearOfDeathInput = document.getElementById('yearOfDeathInput');
    var isMaleInput = document.getElementById('isMaleInput');
    var placeOfBirthInput = document.getElementById('placeOfBirthInput');
    var placeOfDeathInput = document.getElementById('placeOfDeathInput');
    if (firstNameInput &&
        lastNameInput &&
        yearOfBirthInput &&
        yearOfDeathInput &&
        isMaleInput &&
        placeOfBirthInput &&
        placeOfDeathInput) {
        var person = {
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            yearOfBirth: parseInt(yearOfBirthInput.value),
            yearOfDeath: parseInt(yearOfDeathInput.value),
            isMale: isMaleInput.checked,
            placeOfBirth: placeOfBirthInput.value.trim(),
            placeOfDeath: placeOfDeathInput.value.trim()
        };
        fetch('/cementery/add/person', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            var addPersonResult = document.getElementById('addPersonResult');
            if (addPersonResult) {
                addPersonResult.innerHTML = JSON.stringify(data);
            }
        })["catch"](function (error) {
            console.error(error);
        });
    }
}
