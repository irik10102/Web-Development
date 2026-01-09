var words = ['AI', 'SEO', 'Unlk', "like", "people", 'ep'];
var vowelArr = words.filter(function (val, indts) {
    var word = val.toLowerCase().split("");
    var count = 0;
    word.forEach(function (val, ind) {
        val = val.toLowerCase();
        if (val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u')
            count++;
    });
    if (count >= 2)
        return word;
});
console.log(vowelArr);
