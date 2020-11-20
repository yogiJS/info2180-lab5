window.onload= function()
{
    searchrequest();
}
function searchrequest()
{
    
   
    document.getElementById("lookup").onclick= function()
    {
        var httpRequest = new XMLHttpRequest();
        var url = "world.php?";
        
        
        const data = "country=" + document.getElementById("country").value+"&context=";
         httpRequest.onreadystatechange = function()
        {
            if (httpRequest.readyState === XMLHttpRequest.DONE) 
            {
                if (httpRequest.status === 200) 
                {
                    
                        var response = httpRequest.responseText;
                    
                    document.getElementById("result").innerHTML= response;
                    
                    
                 } 
            }
        };

        httpRequest.open('GET', url+data,true);
        event.preventDefault();

        
        httpRequest.send();

    }
    
    
    document.getElementById("city").onclick= function()
    {
        var httpRequest = new XMLHttpRequest();
        var url = "world.php?";
        
        
        const data = "country=" + document.getElementById("country").value+"&context=cities";
         httpRequest.onreadystatechange = function()
        {
            if (httpRequest.readyState === XMLHttpRequest.DONE) 
            {
                if (httpRequest.status === 200) 
                {
                    
                        var response = httpRequest.responseText;
                    
                    document.getElementById("result").innerHTML= response;
                    
                    
                 } 
            }
        };

        httpRequest.open('GET', url+data,true);
        event.preventDefault();

        
        httpRequest.send();

    }
    
    

}