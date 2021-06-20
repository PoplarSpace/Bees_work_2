/*
 * @Author: your name
 * @Date: 2021-06-20 19:45:01
 * @LastEditTime: 2021-06-20 20:06:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /index/src/B_task2.js
 */
let data_input = document.getElementById("data_input");
let letf_in = document.getElementById("left_in");
let right_in = document.getElementById("right_in");
let letf_out = document.getElementById("left_out");
let right_out = document.getElementById("right_out");
let sort = document.getElementById("sort");
let random = document.getElementById("random");
let view = document.getElementById("view");
let data_store = [];
//获取data 的值
function addData() {
    let data = data_input.value.trim();
    console.log("input" + data);
    return data;
}
//更新表单
function renderList() {
    console.log(data_store);
    console.log(data_store.length);
    for (let i = 0; i < data_store.length; i++) {
        let new_div = document.createElement("div")
        new_div.style.height = data_store[i] + 'px';
        view.appendChild(new_div)
    }
    document.getElementById("data_input").value = '';
    console.log(data_store);
}

function delete_chlid() {
    let e = document.querySelector("#view");
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

function Sort() {
    //判断是否为数组
    var is_data = function(data) {
            if (Object.prototype.toString.call(data) === "[object Array]") {
                return true;
            } else {
                return false;
            }
        }
        //冒泡排序
    var bubbleSort = function(data, type, showSort) {
        //输入检测
        if (!isArray(data)) {
            throw Error("the input of bubbleSort is not a array");
            return;
        }
        //深拷贝，不改动输入数组
        var out = [];
        for (let i = 0; i < data.length; i++) {
            out[i] = data[i];
        }
        //order==false为升序，否则为降序
        //		var order = type!==true?1:-1;
        for (let i = 1; i < out.length; i++) {
            for (let j = 0; j < out.length - i; j++) {
                if (typeof showSort === "function") {
                    showSort(out, j, j + 1);
                }
                if (order * out[j] > order * out[j + 1]) {
                    let tem = out[j];
                    out[j] = out[j + 1];
                    out[j + 1] = tem;
                }
                if (typeof showSort === "function") {
                    showSort(out, null, null);
                }
            }
        }
        //console.log(out);
        return out;
    }
}
//点击事件
function init() {
    letf_in.addEventListener("click", function() {
        let data = addData();
        console.log(data);
        data_store.unshift(data);
        delete_chlid();
        renderList();
    })
    right_in.addEventListener("click", function() {
        let data = addData();
        data_store.push(data);
        delete_chlid();
        renderList();

    })
    letf_out.addEventListener("click", function() {
        let data = data_store.shift();
        delete_chlid();
        renderList();
        alert(data);
    })
    right_out.addEventListener("click", function() {
        let data = data_store.pop();
        delete_chlid();
        renderList();
        alert(data);
    })
    sort.addEventListener("click", function() {
        let data = data_store.pop();
        delete_chlid();
        renderList();
        alert(data);
    })
}
init();