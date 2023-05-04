var media, n1, n2, n3, n4;

n1 = prompt ('Insira a primeira nota :');
n2 = prompt ('Insira a segunra nota :');
n3 = prompt ('Insira a terceira nota :');
n4 = prompt ('Insira a quarta nota :');

n1 = eval (n1);
n2 = eval (n2);
n3 = eval (n3);
n4 = eval (n4);

media = (n1 + n2 + n3 + n4)/4; 
alert (`Sua média é : ${media}`);

if (media >= 6)
{
    alert ("Aprovado!");
}

else {
    if (media <= 5) {
        alert ("Reprovado!");
    }

    else {
        alert ("Recuperação!"); 
    }
}