export interface studData{
    name:string,
    dept:string
    gen:string,
    phy:number,
    chem:number,
    bio:number
};

var studinfo:studData[] = [
    {
        name:'Sahil',
        dept:'Science',
        gen:'male',
        phy:86,
        chem:90,
        bio:55
    },
     {
        name:'Soniya',
        dept:'Science',
        gen:'female',
        phy:86,
        chem:90,
        bio:55
    },
    {
        name:'Dildar',
        dept:'Science',
        gen:'female',
        phy:86,
        chem:90,
        bio:55
    }
]

studinfo.forEach((val:studData, ind:number)=>{

    console.log(`Name:${val['name']} Dept:${val['dept']} Gen:${val['gen']} Phy:${val['phy']} Chem:${val['chem']} Bio:${val['bio']} Total Marks:${val['phy']+val['chem']+val['bio']}  `)
})