import React , {useState} from "react";

interface obj{
    len:number,
    br:number,
    hg:number,
    state:boolean,
    ar:number,
    vol:number
}

const AreaVolCalc = ()=>{

    const [shape, setShape] = useState<obj>({len:0, br:0,hg:0,state:false,ar:0,vol:0});
   
    const Update = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target; 
        setShape({...shape, [name]:value})
    }

    const calc = ()=>{
        setShape({...shape,['ar']:shape.len*shape.br, ['vol']:shape.len*shape.br*shape.hg,['state']:true})
    }

    return(
        <>
            <table>
                <tr>
                    <td>Enter Length:</td>
                    <td><input type="number" name="len" onChange={Update}/></td>
                </tr>
                <tr>
                    <td>Enter Breadth:</td>
                    <td><input type="number" name="br" onChange={Update}/></td>
                </tr>
                <tr>
                    <td>Enter Height:</td>
                    <td><input type="number" name="hg" onChange={Update}/></td>
                </tr>
            </table>
            <button  onClick={calc}>Result</button>
            <table>
                {(shape.state)?<tr><td>Area:{shape.ar}</td><td>Volume:{shape.vol}</td></tr>:null}
            </table>
        </>
    )
}
export default AreaVolCalc;