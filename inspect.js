var inputs = document.querySelectorAll("[automation-type]");
console.log(inputs.length);
for(var i=0; i < inputs.length; i++){
    inputs[i].style.border = "2px dashed green ";
    
    const automation_field = inputs[i].getAttribute('automation-type');
    const automation_id = inputs[i].getAttribute('automation-id');

    inputs[i].setAttribute("tooltip", "automation field : " + automation_field  + " automation id: " + automation_id );

        var a = document.getElementsByTagName('*')
        var tip, text
        var base = document.createElement('tooltip'); //Defining all objects
        
        for (var x=0;x < a.length;x++) { //I'm using "for" loop to get all "a" elements with attribute "tooltip".
             a[x].onmouseover = function (e) {
                 text = this.getAttribute('tooltip');
                 tip = document.createTextNode(text);
                 if (text != null) {// Checking if tooltip is empty or not.
                       base.innerHTML = '';
                       base.appendChild(tip);
                       if (document.getElementsByTagName('tooltip')[0]){// Checking for any "tooltip" element
                           document.getElementsByTagName('tooltip')[0].remove();// Removing old tooltip
                       }
                       base.style.position = 'absolute';
                       base.style.left = (e.x + 20)+"px";
                       base.style.top = (e.y + 20)+"px";
                       base.style.backgroundColor="black";
                       base.style.color = "white";
                       base.style.display="inLine-block";
                       base.style.textAlign="center";
                       base.style.borderRadius= "6px";
                       base.style.width="200px"
                       base.style.padding="10px"
                       base.style.paddingTop="5px"
                       base.style.fontSize="20"
                       console.log("X locator " + e.x)
                       console.log("Y locator " + e.y)

                       console.log(base.style.top); // 👉️ "150px"
                       console.log(base.style.left); // 👉️ "150px"


                       document.body.appendChild(base);
                 }
        
             };
        }
}