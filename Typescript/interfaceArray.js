"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var studinfo = [
    {
        name: 'Sahil',
        dept: 'Science',
        gen: 'male',
        phy: 86,
        chem: 90,
        bio: 55
    },
    {
        name: 'Soniya',
        dept: 'Science',
        gen: 'female',
        phy: 86,
        chem: 90,
        bio: 55
    },
    {
        name: 'Dildar',
        dept: 'Science',
        gen: 'female',
        phy: 86,
        chem: 90,
        bio: 55
    }
];
studinfo.forEach(function (val, ind) {
    console.log("Name:".concat(val['name'], " Dept:").concat(val['dept'], " Gen:").concat(val['gen'], " Phy:").concat(val['phy'], " Chem:").concat(val['chem'], " Bio:").concat(val['bio'], " Total Marks:").concat(val['phy'] + val['chem'] + val['bio'], "  "));
});
