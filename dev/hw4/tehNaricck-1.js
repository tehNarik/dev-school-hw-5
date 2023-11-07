class VigenèreCipher{
    constructor(clue, alphabet){
        this.clue = clue;
        this.alphabet = alphabet;
    }
    encode(text){
        var clue_row = '';
        var space=0;
        for(let i=0; i<text.length; i++){
            clue_row += this.clue[(i-space)%this.clue.length];
        }
        console.log(clue_row);

        var res = '';
        space = 0;
        for(let i=0; i<text.length; i++){
            if(!this.alphabet.includes(text[i]) && text[i]!==' '){
                res += text[i];
                space++;
                continue;
            }
            if(text[i]===' '){
                res += ' ';
                space++;
                continue;
            }
            res += this.alphabet[(this.alphabet.indexOf(clue_row[i])+this.alphabet.indexOf(text[i]))%this.alphabet.length];
        }
        return res;
    }

    decode(text){
        var clue_row = '';
        var space=0;
        for(let i=0; i<text.length; i++){
            clue_row += this.clue[(i-space)%this.clue.length];
        }


        var res = '';
        space = 0;
        for(let i=0; i<text.length; i++){
            if(!this.alphabet.includes(text[i]) && text[i]!==' '){
                res += text[i];
                space++;
                continue;
            }
            if(text[i]===' '){
                res += ' ';
                space++;
                continue;
            }
            let index = this.alphabet.indexOf(text[i])-this.alphabet.indexOf(clue_row[i]);
            if(index<0){
                index += this.alphabet.length;
            }
            res += this.alphabet[index];
        }
        return res;
    }

}



var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';
var c = new VigenèreCipher(key, alphabet);
console.log(c.encode('codewars уаоукща  уак'));
console.log(c.decode('laxxhsj'));