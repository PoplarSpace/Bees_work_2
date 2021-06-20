/*
 * @Author: your name
 * @Date: 2021-06-20 20:08:24
 * @LastEditTime: 2021-06-20 21:08:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work3/src/index.js
 */
const $ = (dom, type = "single") => {
    switch (type) {
        case "single":
            return document.querySelector(dom)
        case "more":
            return document.querySelectorAll(dom)
    }
}
const textarea = $("textarea")
const insert = $(".insert")
const search = $(".search")
const input = $("input")
const txt = $(".txt")
const addEvent = (dom, fun) => {
    dom.addEventListener("click", fun)
}
const render = (text) => {
    let div = document.createElement("div")
    div.innerHTML = text
    txt.appendChild(div)
}
const showFind = (target) => {
    // nodelist 转 数组
    const tags = Array.from($(".txt div", "more"))
    console.log(tags);
    // 遍历数组
    tags.map(e => {
        let reg = new RegExp(target, "g")
        e.innerHTML = e.innerHTML.replace(reg, `<span class='ontarget'>${target}</span>`)
    })
}
addEvent(insert, () => {
    let text = textarea.value
    var list = text.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(item) {
        if (item != null && item.length != 0) {
            return true;
        } else {
            return false;
        }
    })
    list.map(e => {
        render(e)
    })
    textarea.value = ""
})
addEvent(search, () => {
    let target = input.value
    showFind(target)
    input.value = ""
})