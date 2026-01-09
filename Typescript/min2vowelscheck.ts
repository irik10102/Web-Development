var words:string[] = ['AI', 'SEO', 'Unlk', "like", "people",'ep'];

var vowelArr:string[] = words.filter((val:string, indts:number)=>{
    let word:string[] = val.toLowerCase().split("");
    var count:number = 0;
    
    word.forEach((val:string, ind:number)=>{
        val = val.toLowerCase();
        if(val == 'a'||val=='e'||val=='i'||val == 'o'|| val=='u')
            count++;
    })

    if(count>=2)
        return word;
})

console.log(vowelArr);