function populateSize() {
    var sizes = calc.size();
    var select = document.getElementById("size");
    for (index in sizes) {
        select.options[select.options.length] = new Option(sizes[index], index);
    }
}

function submitForm() {
    // Get values from the input fields
    var size = document.getElementById("size").value;
    var quantity = document.getElementById("quantity").value;

    // create table with the values from calculate keys
    var materialRequired = calc.calculate();
    var columns = materialRequired[size];
    var str = "<tr><th></th>"
    for (var key in columns) {
        str += "<th>" + key + "</th>";
    }
    str += "</tr>";
    document.getElementById("tablehead").innerHTML = str;

    var str = "<tr><td>Required</td>"
    for (var key in columns) {
        str += "<td>" + (quantity / columns[key]).toFixed(2) + "</td>";
    }
    str += "</tr>";
    document.getElementById("tablebody").innerHTML = str;
    document.getElementById("result").removeAttribute("hidden");

    // add the input field to calculate the loss
    var str = "<tr>"
    for (var key in columns) {
        str += "<td><div class='form-group col-md-2'><input type='number' class='form-control' id='" + key + "' placeholder = '" + key + "'></div></td>";
    }
    str += "</tr>";
    document.getElementById("lossCalc").innerHTML = str;
    document.getElementById("lossForm").removeAttribute("hidden");
}

function lossCalc() {
    // Get values from the input fields
    var size = document.getElementById("size").value;
    var quantity = document.getElementById("quantity").value;
    var materialRequired = calc.calculate();
    var avgLoss = 0;
    var count = 0;
    var columns = materialRequired[size];
    var str2 = "<tr><td>Used</td>"
    var str1 = "<tr><td>Loss %</td>"
    for (var key in columns) {
        var required = (quantity / columns[key]).toFixed(2);
        var used = document.getElementById(key).value;
        var loss = (((required - used) / required) * 100).toFixed(2);
        count++;
        avgLoss += parseInt(loss);
        str1 += "<td>" + loss + "% </td>";
        str2 += "<td>" + used + "</td>";
    }
    str1 += "</tr>";
    str2 += "</tr>";
    document.getElementById("avgLoss").innerHTML += (avgLoss / count).toFixed(2) + "%";
    document.getElementById("tablebody").innerHTML += str2;
    document.getElementById("tablebody").innerHTML += str1;
    document.getElementById("lossForm").setAttribute("hidden", true);
}