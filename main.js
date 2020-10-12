var menu_list_array=["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for (var i=0; i<menu_list_array.length; i++ +"<li>"){
        htmldata-htmldata+"<ol>";
        document.getElementById("newRow").innerHTML=htmldata;
        document.getElementById("newRow").style.visibility="visible";
    }
}