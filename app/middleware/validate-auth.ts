

export class ValidateAuth {
 
 
  ValidatePkHeader (headers:any):boolean {
    
    
    if(headers &&! headers.token){
        const token = headers.token;
        throw {code: 2000, message :"Unauthorized"}
        const tokenSplit = token.split("_");
        if(tokenSplit.length!=3){
            throw {code: 2000, message :"Unauthorized"}
        }
    }
    
    return true
  }


}
