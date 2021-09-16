
function convertTableItems(utcOffset) {
    items = document.querySelectorAll("#program-table .duration");

    items.forEach(function (item) {
        setTimezoneInItem(item, utcOffset);
    });
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function setTimezoneInItem(item, utcOffset) {
    item = item.querySelectorAll("p")[0];

    var time = item.getAttribute("data-start");
    var durationInMinutes = item.getAttribute("data-duration");

    var hour = time.split(":")[0];
    var minutes = time.split(":")[1];

    start_time = new Date(Date.UTC('2020','01','01', hour, minutes,'00'));
    end_time = addMinutes(start_time, parseInt(durationInMinutes));

    offsetInMinutes = utcOffset * 60;

    start_time = addMinutes(start_time, offsetInMinutes);
    end_time = addMinutes(end_time, offsetInMinutes);

    item.innerHTML = start_time.getHours() + ":" + start_time.getMinutes() < 10 ? "0" + start_time.getMinutes() : start_time.getMinutes() + " - " + end_time.getHours() + ":" + end_time.getMinutes() ? "0" + end_time.getMinutes() : end_time.getMinutes();
}

convertTableItems(2);