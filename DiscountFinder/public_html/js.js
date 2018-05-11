angular.module("discountApp", []);
angular.module("discountApp").controller("discountController", function($scope){
    

    $scope.newDiscount = {};    
    $scope.message = "";

    
    $scope.discounts = [{
        shopName: "Lidl",
        productType: "Élelmiszer",
        productName: "Zott Jogobella Gyümölcsjoghurt",
        unitPrice: "727Ft/kg",
        unitType: "150g",
        priceBefore: "159Ft",
        price: "109Ft",
        save: "-31%",
        address: "Pécs, Siklósi út 52/A, 7632"       
    },{
        shopName: "Jisk",
        productType: "Lakberendezés",
        productName: "Jungen Tálaló",
        unitPrice: "",
        unitType: "1db",
        priceBefore: "59900Ft",
        price: "40000Ft",
        save: "-32%",
        address: "Pécs, Makay István út 13, 7634"       
        
    },{
        shopName: "Spar",
        productType: "Sport",
        productName: "Jógaszőnyeg",
        unitPrice: "",
        unitType: "1db",
        priceBefore: "2999Ft",
        price: "2499Ft",
        save: "",
        address: "Pécs, Ybl Miklós u. 10, 7633"         
        
    },{
        shopName: "Media Markt",
        productType: "Műszaki cikk",
        productName: "Apple iPad wifi 32GB (2017)",
        unitPrice: "",
        unitType: "1db",
        priceBefore: "139999",
        price: "119999Ft",
        save: "-17%",
        address: "Pécs, Bajcsy-Zsilinszky u. 11, 7622"       
        
    },{
        shopName: "Decathlon",
        productType: "Sport",
        productName: 'Gyermek kerékpár 18"',
        unitPrice: "",
        unitType: "1db",
        priceBefore: "29999Ft",
        price: "26999Ft",
        save: "-30%",
        address: "Pécs, Makay István út 7, 7634"         
        
    },{
        shopName: "Tesco",
        productType: "Élelmiszer",
        productName: "Teljes kiőrlésű zsemle",
        unitPrice: "",
        unitType: "1db",
        priceBefore: "69Ft",
        price: "49Ft",
        save: "",
        address: "Pécs, Makay István út 1, 7634"       
        
    },{
        shopName: "Sipo Patika",
        productType: "Egészség",
        productName: "Voltaren Dolo gél",
        unitPrice: "",
        unitType: "150g",
        priceBefore: "4399Ft",
        price: "3799Ft",
        save: "-31%",
        address: "Pécs, Ybl Miklós u. 9, 7633"         
        
    }];
    
    $scope.saveDiscount = function(){
        console.log("bent");
        $scope.discounts.push($scope.newDiscount);
        $scope.newDiscount = {};
        $scope.message = "Új akció sikeresen hozzáadva!";        
    }; 

    $scope.showOnMap = function(discount){        
        
        var changeMap = document.querySelector('.mapDOM');
        changeMap.src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBn6EdoYLEA-Zyb6g-W7_mA8vuL0XODTIw&q=" + discount.address + '"';

    };

    $scope.clearMessage = function(){
        $scope.message = "";
    };
});



var newUser ={};

var registeredUsers = [{
    email: "test@gmail.com",
    usrName: "test",
    pwd: "12345"
}];

function signUp(){
    var pwd1 = document.getElementById("signUpPwd1").value;
    var pwd2 = document.getElementById("signUpPwd2").value;
    var email = document.getElementById("email").value;
    var usrName = document.getElementById("signUpUsrName").value;

    if (pwd1 !== pwd2){
        alert("A beírt jelszavak nem egyeznek!");       
    } else {
        newUser.email = email;
        newUser.usrName = usrName;
        newUser.pwd = pwd1;

        registeredUsers.push(newUser);
        newUser = {};
        alert("Sikeres regisztráció!");
    }
    
    document.getElementById("signUpPwd1").value = "";
    document.getElementById("signUpPwd2").value = "";
    document.getElementById("email").value = "";
    document.getElementById("signUpUsrName").value = "";    
};

function loginCheck(){
    var loginUsrName = document.getElementById("loginUsrName").value;
    var loginPwd = document.getElementById("loginPwd").value;

    for (i=0;i<registeredUsers.length;i++){
        if(registeredUsers[i].usrName == loginUsrName && registeredUsers[i].pwd == loginPwd){           
            alert("Sikeres bejelentkezés!");
            document.querySelector(".plusButton").style.visibility = "visible";
        } else {            
            alert("Sikertelen bejelentkezés!");            
            document.querySelector(".plusButton").style.visibility = "hidden";
        }
        document.getElementById("loginUsrName").value = "";
        document.getElementById("loginPwd").value = "";
    }   
};

