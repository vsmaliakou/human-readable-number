module.exports = function toReadable (number) {
    let result = ""
    let one = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"        
    }
    let ten = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    }
    let twenty = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    }

    if(number == 0) {
        result = "zero"
    }
    if(number > 0 && number < 10) {
        result = one[number]
    } else if(number >= 10 && number < 20) {
        result = ten[number]
    } else if (number >= 20 && number <= 99) {
        let strNumber = number.toString()
        result = twenty[Number(strNumber[0])] + " " + one[Number(strNumber[1])]
    } else if (number >= 100 && number <= 999) {
        let strNumber = number.toString()
        let strNumberTen = strNumber.slice(1)
        if(Number(strNumber[1]) == 0 && Number(strNumber[2]) == 0) {
            result = one[Number(strNumber[0])] + " hundred"
        } else if(Number(strNumber[1]) == 0) {
            result = one[Number(strNumber[0])] + " hundred " + one[Number(strNumber[2])]
        } else if(Number(strNumber[1]) == 1) {
            result = one[Number(strNumber[0])] + " hundred " + ten[Number(strNumberTen)]
        } else {
            result = one[Number(strNumber[0])] + " hundred " + twenty[Number(strNumber[1])] + " " + one[Number(strNumber[2])]
        }        
    }
    return result.trim()
}
