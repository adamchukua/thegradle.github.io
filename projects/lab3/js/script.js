var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var result = document.getElementById("result");
var colors = ["red", "green", "blue", "cyan", "magenta", "black", "navy", "blueviolet", "chocolate", "darkolivegreen", "darkorange", "darkslateblue"];
var count = 1; // number of graphs

function Strip(number, precision)
{
    return (parseFloat(number).toPrecision(precision));
}

function GetRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function GetRandomColor()
{
    return colors[GetRandomInt(0, colors.length)];
}

function DrawGraph()
{
    canvas.width = 560;
    canvas.height = 560;

    // Графік
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(30, 520);
    ctx.lineTo(520, 520);
    ctx.lineWidth = 2;
    ctx.stroke();

    // Стрілки графіка
    ctx.beginPath();
    ctx.moveTo(20, 50);
    ctx.lineTo(30, 30);
    ctx.lineTo(40, 50);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(500, 510);
    ctx.lineTo(520, 520);
    ctx.lineTo(500, 530);
    ctx.lineWidth = 2;
    ctx.stroke();

    // Позначки графіка
    ctx.fillRect(23, 469, 14, 2);
    ctx.fillRect(23, 419, 14, 2);
    ctx.fillRect(23, 369, 14, 2);
    ctx.fillRect(23, 319, 14, 2);
    ctx.fillRect(23, 269, 14, 2);
    ctx.fillRect(23, 219, 14, 2);
    ctx.fillRect(23, 169, 14, 2);
    ctx.fillRect(23, 119, 14, 2);
    ctx.fillRect(23, 69, 14, 2);

    ctx.fillRect(80, 513, 2, 14);
    ctx.fillRect(130, 513, 2, 14);
    ctx.fillRect(180, 513, 2, 14);
    ctx.fillRect(230, 513, 2, 14);
    ctx.fillRect(280, 513, 2, 14);
    ctx.fillRect(330, 513, 2, 14);
    ctx.fillRect(380, 513, 2, 14);
    ctx.fillRect(430, 513, 2, 14);
    ctx.fillRect(480, 513, 2, 14);

    // Легенда графіка
    ctx.font = "600 19px serif";
    ctx.fillText("0", 10, 530);
    ctx.fillText("1", 10, 275);
    ctx.fillText("1", 275, 545);
    ctx.fillText("y", 5, 70);
    ctx.fillText("x", 480, 545);
}

function ClearGraph()
{
    DrawGraph();
    result.style.display = "none";
    count = 1;

    while (result.firstChild)
    {
        result.removeChild(result.lastChild);
    }
}

// ############ РОЗРАХУНОК ТОЧОК ТА ПОБУДОВА ГРАФУ ############

DrawGraph();

function BuildGraph()
{
    var from = parseFloat(document.getElementById("from").value);
    var to = parseFloat(document.getElementById("to").value);
    var step = parseFloat(document.getElementById("step").value);
    var color = GetRandomColor();

    if(isNaN(from) || isNaN(to) || isNaN(step))
    {
        alert("Введіть всі значення!");
        return;
    }

    result.style.display = "block";

    var title = document.createElement("p");
    var text = document.createTextNode("Точки " + count++ + ":");
    title.className = "text-title";
    title.style.color = color;
    title.appendChild(text);
    result.appendChild(title);

    var dots = document.createElement("ol");
    dots.id = "dots";
    result.appendChild(dots);

    // З’єднання точок графіка
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(30 + from * 250, 520 - Math.pow(Math.E, Math.pow(0.2 * from, 2)) * 250);
    ctx.fillStyle = color;

    for(var x = from; x <= to; x += step)
    {
        var func = Math.pow(Math.E, Math.pow(0.2 * x, 2));
        var li = document.createElement("li");
        var text = document.createTextNode("f(" + Strip(x, 1) + ") = " + func);
        li.appendChild(text);
        dots.appendChild(li);

        // Додавання точок та їх з’єднання
        ctx.fillRect(30 + x * 250 - 2.5, 520 - func * 250 - 2.5, 5, 5);
        ctx.lineTo(30 + x * 250, 520 - func * 250);
    }

    /*var x = from;
    while(x <= to)
    {
        var func = Math.pow(Math.E, Math.pow(0.2 * x, 2));
        var li = document.createElement("li");
        var text = document.createTextNode("f(" + Strip(x, 1) + ") = " + func);
        li.appendChild(text);
        dots.appendChild(li);

        // Додавання точок та їх з’єднання
        ctx.fillRect(30 + x * 250 - 2.5, 520 - func * 250 - 2.5, 5, 5);
        ctx.lineTo(30 + x * 250, 520 - func * 250);
        x += step;
    }*/

    /*var x = from;
    do {
        var func = Math.pow(Math.E, Math.pow(0.2 * x, 2));
        var li = document.createElement("li");
        var text = document.createTextNode("f(" + Strip(x, 1) + ") = " + func);
        li.appendChild(text);
        dots.appendChild(li);

        // Додавання точок та їх з’єднання
        ctx.fillRect(30 + x * 250 - 2.5, 520 - func * 250 - 2.5, 5, 5);
        ctx.lineTo(30 + x * 250, 520 - func * 250);
        x += step;
    } while (x <= to);*/

    ctx.strokeStyle = color;
    ctx.stroke();
}