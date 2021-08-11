fetch("http://api.nobelprize.org/v1/prize.json")
.then(res => res.json())
.then(output => {
    const data = output;
    result = [];
    data.prizes.forEach((prize) => {
        if (prize.category === "chemistry" && parseInt(prize.year) > 1999 && parseInt(prize.year) < 2020) {
            // console.log(prize.laureates);

            prize.laureates.forEach((person) => {
                result.push(person.firstname + " " + person.surname);
            });
        }
    });
    console.log(result);
});

