export default class FormOverrider {
    constructor()
    {
        
    }

    OverrideFormSubmit() {
        Array.from(document.querySelectorAll('form')).forEach(function(formElem)
        {
            formElem.onsubmit = function(e) {
                e.preventDefault();
                e.stopPropagation();
        
                var ancestor = e.srcElement.parentNode;
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() 
                { 
                    if(this.readyState == XMLHttpRequest.DONE) 
                    {
                        if (this.status === 200) 
                        {
                            ancestor.querySelector('form').style.display = 'none';
                            ancestor.querySelector('.w-form-done').style.display = 'block';
                            ancestor.querySelector('.w-form-fail').style.display = 'none';
                        } 
                        else  
                        {
                            ancestor.querySelector('.w-form-fail').style.display = 'block';  
                        }
        
                        ancestor.querySelector('input[type=submit]').value = 'Submit';
                    }
                    else
                    {
                        ancestor.querySelector('input[type=submit]').value = 'Please wait...';
                    }
                }

                xhr.open("POST", e.srcElement.action, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("x-functions-key", "RJeLWq3CX6HwzABElC47NrWkm3CYBHfcaPYqVo9i66wTXfgpEbC3Eg==")
                
                var object = {};
                Array.from(new FormData(e.srcElement)).forEach((value, i) => {object[i] = value});
                var payload = JSON.stringify(object);

                xhr.send(payload)

                return false;
            };
        });
    }
}