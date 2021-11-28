//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    const res = [];
    while (str.length) {
        res.push(str.substr(0, n))
        str = str.slice(n)
    }
    console.log(res)
    return res
};
document.writeln(cutString('наслаждение',3))

//- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//Протестувати на значеннях
//someemail@gmail.com
//someeMAIL@gmail.com
//someeMAIL@i.ua
//some.email@gmail.com

//Примітка
//Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

const emailString = (str) => {
    const condition1 = str.includes('mail');
    const condition2 = str.includes('@');
    const condition3 = str.includes('.');
    const size1 = str.indexOf('.');
    const size2 = str.indexOf('@');
    let x = size1 - size2;
    if ((condition1 === true) && (condition2 === true) && (condition3 === true) && (x >= 2)) {
        console.log(str + '- Це електронна адреса');
    } else {
        console.log(str + '- Це не електронна адреса');
    }
    return str;
}

emailString(str);

//- є масивlet coursesArray = [
//    {
//        title: 'JavaScript Complex',
//        monthDuration: 5,
//        hourDuration: 909,
//        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//    },
//    {
//        title: 'Java Complex',
//        monthDuration: 6,
//        hourDuration: 909,
//        modules: ['html',
//            'css',
//            'js',
//            'mysql',
//            'mongodb',
//            'angular',
//            'aws',
//            'docker',
//            'git',
//            'java core',
//            'java advanced']
//    },
//    {
//        title: 'Python Complex',
//        monthDuration: 6,
//        hourDuration: 909,
//        modules: ['html',
//            'css',
//            'js',
//            'mysql',
//            'mongodb',
//            'angular',
//            'aws',
//            'docker',
//            'python core',
//            'python advanced']
//    },
//    {
//        title: 'QA Complex',
//        monthDuration: 4,
//        hourDuration: 909,
//        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//    },
//    {
//        title: 'FullStack',
//        monthDuration: 7,
//        hourDuration: 909,
//        modules: ['html',
//            'css',
//            'js',
//            'mysql',
//            'mongodb',
//            'react',
//            'angular',
//            'aws',
//            'docker',
//            'git',
//            'node.js',
//            'python',
//            'java']
//    },
//    {
//        title: 'Frontend',
//        monthDuration: 4,
//        hourDuration: 909,
//        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//    }
//];


//відсортувати його в спадаючому порядку за кількістю елементів в полі modules

const coerseModuls = (coursesArray) => {
    console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length))
    return coursesArray;
}

coerseModuls(coursesArray)


//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//    let symb = "о", str = "Астрономия это наука о небесных объектах";
//document.writeln(count(str, symb)) // 5

stringsearch = "о";
string = "Астрономия это наука о небесных объектах";
const count = (string, stringsearch) => {
    return string.split(stringsearch).length - 1;
}

document.write(count(string, stringsearch))


//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//    let str = "Сила тяжести приложена к центру масс тела";
//document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let str = "Сила тяжести приложена к центру масс тела";

const cutString = (str, n) => {
    return document.write(str.split(" ").splice(0, n).join(" "));
}

cutString("Сила тяжести приложена к центру масс тела", 5) // 'Сила тяжести приложена к центру'
