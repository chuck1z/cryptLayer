
/* 
sha-3 generated text (as encryptext)
in = encryptext[:n]
arr[12]
for(int i=0; i++; i<12) {
    temp = in[:i*2]
    temp = hextoint(temp)
    temp -= 33
    temp %= 93
    arr[i] = inttohex(temp)
}
*/

encryptor = message => {
    let encryptedMessage;

    const messageArr = message.split("");
    console.log("message array", messageArr);

    let encryptedMessageArr = [];

    for (i = 0; i < messageArr.length; i++) {

        let letter;
        switch (messageArr[i]) {
            case 
        }
    }

}