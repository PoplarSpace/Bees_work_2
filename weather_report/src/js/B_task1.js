var data_input = document.getElementById("data_input");
var letf_in = document.getElementById("left_in");
var right_in = document.getElementById("right_in");
var letf_out = document.getElementById("left_out");
var right_out = document.getElementById("right_out");
var view = document.getElementById("view");
var data_store = [];
//获取data 的值
function addData() {
    var data = data_input.value.trim();
    return data;
}
//更新表单
function renderList() {
    var text = [];
    for (var i = 0; i < data_store.length; i++) {
        text[i] = "<div>" + data_store[i] + "</div>";
    }
    view.innerHTML = text.join(" ");
    document.getElementById("data_input").value = '';
    console.log(data_store);
}

function delete_chlid() {
    var e = document.querySelector("#view");
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}
//点击事件
function init() {
    letf_in.addEventListener("click", function() {
        var data = addData();
        data_store.unshift(data);
        delete_chlid();
        renderList();
    })
    right_in.addEventListener("click", function() {
        var data = addData();
        data_store.push(data);
        delete_chlid();
        renderList();

    })
    letf_out.addEventListener("click", function() {
        var data = data_store.shift();
        delete_chlid();
        renderList();
        alert(data);
    })
    right_out.addEventListener("click", function() {
        var data = data_store.pop();
        delete_chlid();
        renderList();
        alert(data);
    })
}
init();