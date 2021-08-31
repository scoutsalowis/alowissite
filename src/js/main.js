function copyElementText(element)
{
     /* Copy the text inside the element */
    navigator.clipboard.writeText(element.innerText);
  
    /* Alert the copied text */
    
}

const init = function ()
{
    // close nav when click outside on mobile
    const nav_menu = document.getElementById("nav-menu");
    const nav_checkbox = document.getElementById("nav-toggle");
    const toggle_label = document.getElementById("toggle-label");
    const toggle_span = document.getElementById("toggle-span");

    document.addEventListener
    (
        "click"
        , (ev) =>
            {
                if(!nav_checkbox.checked && (toggle_label === ev.target || toggle_span === ev.target))
                {
                    nav_checkbox.checked = true;
                }
                else if(nav_checkbox.checked && (toggle_label === ev.target || toggle_span === ev.target))
                {
                    nav_checkbox.checked = false;
                }
                else if(nav_menu !== ev.target && !nav_menu.contains(ev.target))
                {
                    nav_checkbox.checked = false;
                }
            }
        , {passive: true}
    )
}
  
window.onload = init;
