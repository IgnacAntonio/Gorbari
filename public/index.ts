function getAllHumans() {
    const humansList = document.getElementById('humansList') as HTMLDivElement;

    fetch('/cementery')
        .then(response => response.json())
        .then(data => {
            humansList.innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error(error);
        });
}


function getHumanByName() {
    const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    const name = nameInput?.value?.trim();

    if (name) {
        fetch(`/cementery/${name}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 404) {
                    throw new Error('Person Not Found');
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => {
                const humanDetails = document.getElementById('humanDetails');
                if (humanDetails) {
                    humanDetails.innerHTML = JSON.stringify(data);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
}


function addPerson() {
    const firstNameInput = document.getElementById('firstNameInput') as HTMLInputElement | null;
    const lastNameInput = document.getElementById('lastNameInput') as HTMLInputElement | null;
    const yearOfBirthInput = document.getElementById('yearOfBirthInput') as HTMLInputElement | null;
    const yearOfDeathInput = document.getElementById('yearOfDeathInput') as HTMLInputElement | null;
    const isMaleInput = document.getElementById('isMaleInput') as HTMLInputElement | null;
    const placeOfBirthInput = document.getElementById('placeOfBirthInput') as HTMLInputElement | null;
    const placeOfDeathInput = document.getElementById('placeOfDeathInput') as HTMLInputElement | null;

    if (
        firstNameInput &&
        lastNameInput &&
        yearOfBirthInput &&
        yearOfDeathInput &&
        isMaleInput &&
        placeOfBirthInput &&
        placeOfDeathInput
    ) {
        const person = {
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            yearOfBirth: parseInt(yearOfBirthInput.value),
            yearOfDeath: parseInt(yearOfDeathInput.value),
            isMale: isMaleInput.checked,
            placeOfBirth: placeOfBirthInput.value.trim(),
            placeOfDeath: placeOfDeathInput.value.trim(),
        };

        fetch('/cementery/add/person', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(person),
        })
            .then(response => response.json())
            .then(data => {
                const addPersonResult = document.getElementById('addPersonResult');
                if (addPersonResult) {
                    addPersonResult.innerHTML = JSON.stringify(data);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
}
