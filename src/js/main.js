console.log("start");

const init = function ()
{
    // close nav when click outside on mobile
    const nav_menu = document.getElementById("nav-menu");
    const nav_checkbox = document.getElementById("nav-toggle");
    const toggle_label = document.getElementById("toggle-label");

    console.log("ready");
    document.onclick = (ev) =>
    {
        console.log("click");
        if(!nav_checkbox.checked && toggle_label === ev.target)
        {
            console.log("box was unchecked + close");
            nav_checkbox.checked = true;
        }
        else if(nav_checkbox.checked && toggle_label === ev.target)
        {
            console.log("box was checked");
            nav_checkbox.checked = false;
        }
        else if(nav_menu !== ev.target && !nav_menu.contains(ev.target))
        {
            console.log("close");
            nav_checkbox.checked = false;
        }
    }
}
  
window.onload = init;
