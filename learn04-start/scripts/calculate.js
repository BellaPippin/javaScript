function addDate() {

    let today = new Date();
    document.getElementById("myDate").innerHTML = today;

    // Add values to the onload function so they reset on page refresh
    document.getElementById("name").value = '';
    document.getElementById("rm1length").value = '';
    document.getElementById("rm1width").value = '';
    document.getElementById("rm1height").value = '';
    document.getElementById("rm1cost").value = '';
    document.getElementById("rooms").value = '1';
}

function estimate(){

    // Get value of selected # of rooms
    let option = document.getElementById("rooms").value;

    if (option == '1') {

        let name = document.getElementById("name").value;
        let length = parseFloat(document.getElementById("rm1length").value);
        let width = parseFloat(document.getElementById("rm1width").value);
        let height = parseFloat(document.getElementById("rm1height").value);
        let totalSqft = ((length * height * 2) + (length * width * 2))
        let cost = (totalSqft * .65);
        document.getElementById("rm1cost").value = cost;


        var totalCost = cost;
        document.getElementById("estimate").innerHTML = (name + ", your total cost estimate is $ " + totalCost);
    }

    if (option == '2') {

        let name = document.getElementById("name").value;
        let length1 = parseFloat(document.getElementById("rm1length").value);
        let width1 = parseFloat(document.getElementById("rm1width").value);
        let height1 = parseFloat(document.getElementById("rm1height").value);
        let totalSqft1 = ((length1 * height1 * 2) + (length1 * width1 * 2))
        let cost1 = (totalSqft1 * .65);
        document.getElementById("rm1cost").value = cost1;

        
        let length2 = parseFloat(document.getElementById("rm2length").value);
        let width2 = parseFloat(document.getElementById("rm2width").value);
        let height2 = parseFloat(document.getElementById("rm2height").value);
        let totalSqft2 = ((length2 * height2 * 2) + (length2 * width2 * 2))
        let cost2 = (totalSqft2 * .65);
        document.getElementById("rm2cost").value = cost2;

        


        var totalCost = cost1 + cost2;
        document.getElementById("estimate").innerHTML = (name + ", your total cost estimate is $ " + totalCost);
    }

    if (option == '3') {

        let name = document.getElementById("name").value;
        let length1 = parseFloat(document.getElementById("rm1length").value);
        let width1 = parseFloat(document.getElementById("rm1width").value);
        let height1 = parseFloat(document.getElementById("rm1height").value);
        let totalSqft1 = ((length1 * height1 * 2) + (length1 * width1 * 2))
        let cost1 = (totalSqft1 * .65);
        document.getElementById("rm1cost").value = cost1;

        
        let length2 = parseFloat(document.getElementById("rm2length").value);
        let width2 = parseFloat(document.getElementById("rm2width").value);
        let height2 = parseFloat(document.getElementById("rm2height").value);
        let totalSqft2 = ((length2 * height2 * 2) + (length2 * width2 * 2))
        let cost2 = (totalSqft2 * .65);
        document.getElementById("rm2cost").value = cost2;

        
        let length3 = parseFloat(document.getElementById("rm3length").value);
        let width3 = parseFloat(document.getElementById("rm3width").value);
        let height3 = parseFloat(document.getElementById("rm3height").value);
        let totalSqft3 = ((length3 * height3 * 2) + (length3 * width3 * 2))
        let cost3 = (totalSqft3 * .65);
        document.getElementById("rm3cost").value = cost3;

        


        var totalCost = cost1 + cost2 + cost3;
        document.getElementById("estimate").innerHTML = (name + ", your total cost estimate is $ " + totalCost);
    }
    


}

function toggleRooms(){

    let option = document.getElementById("rooms").value;
    console.log(option);

    if (option == "1") {
        document.getElementById("room2").style.display = "none";
        document.getElementById("room3").style.display = "none";
    }

    if (option == "2") {
        document.getElementById("room2").style.display = "block";
    }

    else if (option == "3") {
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "block";
    }
    
}

