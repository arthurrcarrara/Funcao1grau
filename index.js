let funcoes = {

    
    a : 0,
    b : 0,
    checkFuncao: false,
    X1: 0,
    Y1: 0,
    X2: 0,
    Y2: 0,
    
    valueStrings:['x1', 'y1', 'x2', 'y2', 'X', 'Y'],
    divString:['funcao', 'resultadoX', 'resultadoY'],
    
    encontrar(){
    
        this.X1 = document.getElementById('x1').value
        this.Y1 = document.getElementById('y1').value
    
        this.X2 = document.getElementById('x2').value;
        this.Y2 = document.getElementById('y2').value;
    
    
        this.a = (this.Y2 - this.Y1) / (this.X2 - this.X1);
    
        this.b = (this.Y1 * this.X2) - (this.Y2 * this.X1) / (this.X2 - this.X1);
    
        // funcao = `F(x) = ${a}.x + ${b}`;
    
        document.getElementById('funcao').innerHTML = `<p>F(x) = ${this.a}.x + ${this.b}</p>`;
    
        this.checkFuncao = true;
    },
    
    calcX(){
        if( this.checkFuncao ===  true){

            let Y = document.getElementById('Y').value
            

            let x = (Y - this.b) / this.a;
            
    
            document.getElementById('resultadoX').innerHTML = `<p> Valor X: ${x}</p>`;
        } else {
            alert('[ERRO] Nao foi possivel! Encontre a funcao! ')
        }
    
    },
    
    calcY(){
        if( this.checkFuncao ===  true){
            
            let X = document.getElementById('X').value
            
            let y = (this.a * X) + this.b;
           
    
            document.getElementById('resultadoY').innerHTML = `<p> Valor Y: ${y}</p>`;
        } else {
            alert('[ERRO] Nao foi possivel! Encontre a funcao! ')
        }
        
    },

    limparCampos(){
       
        this.a = 0;
        this.b = 0;

        for(i = 0; i < this.valueStrings.length; i++){
            let stringID = this.valueStrings[i];
            console.log(stringID);
            document.getElementById(stringID).value = ``;
        }

        for(i = 0; i< this.divString.length; i++){
            let divID = this.divString[i];
            document.getElementById(divID).innerHTML = ``;
        }

    }
    
}