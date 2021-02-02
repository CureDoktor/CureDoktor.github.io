function previousPage() {
  if (document.getElementById("thirdPart").innerHTML == "02") {
    document.getElementById("div2").style.display = "none";
    document.getElementById("div1").style.display = "block";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text1").style.display = "block";
    document.getElementById("name2").style.display = "none";
    document.getElementById("name1").style.display = "block";
    document.getElementById("picture2").style.display = "none";
    document.getElementById("picture1").style.display = "block";
    document.getElementById("thirdPart").innerHTML = "01";
    document.getElementById("button1").style.backgroundColor = "#dadada";
    document.getElementById("button2").style.backgroundColor = "#eec400";
  } else if (document.getElementById("thirdPart").innerHTML == "03") {
    document.getElementById("div3").style.display = "none";
    document.getElementById("div2").style.display = "block";
    document.getElementById("text3").style.display = "none";
    document.getElementById("text2").style.display = "block";
    document.getElementById("name3").style.display = "none";
    document.getElementById("name2").style.display = "block";
    document.getElementById("picture3").style.display = "none";
    document.getElementById("picture2").style.display = "block";
    document.getElementById("thirdPart").innerHTML = "02";
    document.getElementById("button1").style.backgroundColor = "#eec400";
    document.getElementById("button2").style.backgroundColor = "#eec400";
  } else if (document.getElementById("thirdPart").innerHTML == "04") {
    document.getElementById("div4").style.display = "none";
    document.getElementById("div3").style.display = "block";
    document.getElementById("text4").style.display = "none";
    document.getElementById("text3").style.display = "block";
    document.getElementById("name4").style.display = "none";
    document.getElementById("name3").style.display = "block";
    document.getElementById("picture4").style.display = "none";
    document.getElementById("picture3").style.display = "block";
    document.getElementById("thirdPart").innerHTML = "03";
    document.getElementById("button1").style.backgroundColor = "#eec400";
    document.getElementById("button2").style.backgroundColor = "#eec400";
  }
}

function nextPage() {
  if (document.getElementById("thirdPart").innerHTML == "01") {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "block";
    document.getElementById("name1").style.display = "none";
    document.getElementById("name2").style.display = "block";
    document.getElementById("picture1").style.display = "none";
    document.getElementById("picture2").style.display = "block";
    document.getElementById("thirdPart").innerHTML = "02";
    document.getElementById("button1").style.backgroundColor = "#eec400";
    document.getElementById("button2").style.backgroundColor = "#eec400";
  } else if (document.getElementById("thirdPart").innerHTML == "02") {
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "block";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "block";
    document.getElementById("name2").style.display = "none";
    document.getElementById("name3").style.display = "block";
    document.getElementById("picture2").style.display = "none";
    document.getElementById("picture3").style.display = "block";
    document.getElementById("thirdPart").innerHTML = "03";
    document.getElementById("button2").style.backgroundColor = "#eec400";
    document.getElementById("button1").style.backgroundColor = "#eec400";
  } else if (document.getElementById("thirdPart").innerHTML == "03") {
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "block";
    document.getElementById("text3").style.display = "none";
    document.getElementById("text4").style.display = "block";
    document.getElementById("name3").style.display = "none";
    document.getElementById("name4").style.display = "block";
    document.getElementById("picture3").style.display = "none";
    document.getElementById("picture4").style.display = "block";
    document.getElementById("thirdPart").innerHTML = "04";
    document.getElementById("button2").style.backgroundColor = "#dadada";
    document.getElementById("button1").style.backgroundColor = "#eec400";
  }
}
