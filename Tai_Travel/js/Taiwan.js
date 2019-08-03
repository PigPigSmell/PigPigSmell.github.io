function changeValue(x)
{
    if(x == "div_Keelung"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Keelung")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Taipei"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Taipei")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Taoyuan"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Taoyuan")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Hsinchu"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Hsinchu")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Yilan"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Yilan")
        y.innerHTML = country.innerHTML
    }
    
    else if(x == "div_Miaoli"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Miaoli")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Taichung"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Taichung")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Changhua"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Changhua")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Nantou"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Nantou")
        y.innerHTML = country.innerHTML
    }
    
    else if(x == "div_Yunlin"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Yunlin")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Chiayi"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Chiayi")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Tainan"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Tainan")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Kaohsiung"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Kaohsiung")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Pingtung"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Pingtung")
        y.innerHTML = country.innerHTML
    }
    
    else if(x == "div_Hualien"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Hualien")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Taitung"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Taitung")
        y.innerHTML = country.innerHTML
    }
    
    else if(x == "div_Liouciou_Island"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Liouciou_Island")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Lanyu"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Lanyu")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Green_Island"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Green_Island")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Guishan_Island"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Guishan_Island")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Mazu"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Mazu")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Kinmen"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Kinmen")
        y.innerHTML = country.innerHTML
    }
    else if(x == "div_Penghu"){
        var y=document.getElementById("R_content")
        var country = document.getElementById("R_Penghu")
        y.innerHTML = country.innerHTML
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}