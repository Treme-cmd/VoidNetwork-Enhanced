try {
document.getElementById("voidVer").innerText = siteConfig.version
}
catch (e) {
    console.error('Error getting/setting void version:', e);
}
if (localStorage.getItem('cloaking') === 'true' && location === parent.location) {
    const popup = open("about:blank", "_blank");
    if (!popup || popup.closed) {
    alert("Please allow popup and redirects for this site, this will make about blank cloaking work");
    } 
    const doc = popup.document;
    let icon = doc.createElement("link")
    icon.rel = "icon";
    icon.type = "image/png"
    icon.href = "https://ssl.gstatic.com/classroom/favicon.png"
    iframe = popup.document.createElement("iframe")
    const style = iframe.style 
    popup.document.title = "Classes"
    iframe.src = location.href
    style.position = "fixed";
    style.top = style.bottom = style.left = style.right = 0;
    style.border = style.outline = "none";
    style.width = style.height = "100%";
    doc.head.appendChild(icon);
    doc.body.appendChild(iframe);
    location.replace("https://classroom.google.com")
}