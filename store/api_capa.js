
let parseString = require('react-native-xml2js').parseString;
let parseJson = require('xml2js').parseString;


const url = 'http://www.grupochama.com.br/app/capas.xml';

const data_capas = [];


const list_capas =async () =>{
     await fetch(url)
     .then(response =>{
        return response.text();    
     })
     .then(text=>{
         return text;
     })
     .then(xml=>{
        parseString(xml, function (err, result) {
            result.capas.item.forEach((r)=>{
                data_capas.push(r);
            })
                       
        });
     })
     
   
 
}


export const listAll = () =>{
    list_capas();
    return data_capas;

}
 