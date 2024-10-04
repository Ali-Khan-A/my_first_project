let userInfo = [];

document.getElementById('submit').addEventListener('click', ()=>{
    
    userInfo.push(document.getElementById('firstName').value);
    userInfo.push(document.getElementById('lastName').value);
    userInfo.push(document.getElementById('age').value);
    userInfo.push(document.getElementById('gender').value);
    userInfo.push(document.getElementById('occupation').value);

    document.getElementById('output-box').innerHTML=(
        `My name is ${userInfo[0]} ${userInfo[1]}.<br>
        I am ${userInfo[2]} years old.<br>
        I am a ${userInfo[3]}.<br>
        My occupation is ${userInfo[4]}.<br>`
    )
});