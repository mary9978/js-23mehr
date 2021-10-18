//tamrin 0 > print squar with n width and height
function draw_sauare(n) {
    if (n > 10) {
        return "enter number less than 10 :/"
    }
    let result = ''
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) result = " *   ".repeat(n)
        else result = " *   " + "     ".repeat(n - 2) + " *"
        console.log(result)
    }
}
draw_sauare(5)

// tamrin 1
const array = (input) => {
    if (!input && input !== 0){
        return''
    }
    input = input.toString()
    let arrInput = input.split('');
    let result = '';
    arrInput.map(num => {
        result += `${num}:`
        for (let i = 0; i < num; i++){
            result += num;
        }
        result += '\n'
    })
    return result
}

console.log(array(50843))

//tamrin 2
const reverse = (str) => {
    if (str.length === 0) {
        return ''
    }
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1))
}

console.log(reverse('computer engineer'))

//tamrin 3
function subString(str1, str2){
    if (typeof str1 == 'string' && typeof str2 == 'string'){
        if (str1.length > str2.length){
            for(let i = 0; i <= str1.length - str2.length; i++){
                for (let j = 0; j < str2.length; j++){
                    if (str1[i + j] !== str2[j]){
                        break;
                    }
                    if (j === str2.length - 1){
                        return  i
                    }
                }
            }
        }

    }
    return -1
}

console.log(subString('maryam rezayee', 'rezayee'))

//tamrin 4
const excludeArray = (arr, excluded) =>{
    return arr.filter((item) => excluded.indexOf(item) === -1)
}

console.log(excludeArray([1,2,3,4], [2,3]))

//tamrin 5
function moveItem(myArr, index, offset) {
    let arr = myArr;
    if (index + offset < 0 || index + offset >= arr.length || index < 0)
        return false

    let arr1 = arr.splice(index, 1)[0];
    arr.splice(index + offset, 0, arr1)
    console.log(arr)
}

moveItem([1, 2, 3, 4, 5, 6], 3, -1)

//tamrin 6
const neighbor = (str) =>{
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if ((str[i]) !== (str[i + 1])) {
            result += str[i];
        }
    }
    return result;
}

console.log(neighbor("hiiihytiih"))



















