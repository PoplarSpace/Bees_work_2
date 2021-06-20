/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var str_city = document.getElementById("aqi-city-input").value.trim();
    var str_aqi = document.getElementById("aqi-value-input").value.trim();
    if (!str_city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
        alert("城市名必须是中英文字符！");
        return;
    }
    if (!str_aqi.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！");
        return;
    }
    //定义对象属性
    aqiData[str_city] = str_aqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table = document.getElementById("aqi-table");
    table.innerHTML = "";
    //如果表格中还不存在数据，则创建表格头目
    for (var str_city in aqiData) {
        if (table.children.length === 0) {
            table.innerHTML = "<tr> <td>城市</td> <td>空气质量</td> <td>操作</td> </tr>";
        }
        //创建tr
        var tr = document.createElement("tr");
        var td_1 = document.createElement("td");
        td_1.innerHTML = str_city; //添加城市
        tr.appendChild(td_1);
        var td_2 = document.createElement("td");
        td_2.innerHTML = aqiData[str_city];
        tr.appendChild(td_2);
        var td_3 = document.createElement("td");
        //创建删除按钮
        td_3.innerHTML = "<button class='btn_delete'>删除</button>";
        tr.appendChild(td_3);
        table.appendChild(tr);
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(target) {
    // do sth.
    var tr = target.parentElement.parentElement;
    //获取第一个子元素的值
    var str_city = tr.children[0].innerHTML;
    delete aqiData[str_city];
    //更新显示
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

    //添加部分
    var btn_add = document.getElementById("add-btn");
    btn_add.onclick = addBtnHandle;
    //删除部分
    var table = document.getElementById("aqi-table");
    var btn_delete = table.getElementsByClassName("btn_delete");
    table.addEventListener("click", function(e) {
        //删除目标节点
        if (e.target && e.target.nodeName === "BUTTON") {
            delBtnHandle(e.target);
        }
    })
}
init();