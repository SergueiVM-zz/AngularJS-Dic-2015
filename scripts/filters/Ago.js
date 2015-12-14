angular.module("MovieDbApp").filter("ago", function(){
    return function(value) {
        var dateParts = value.split("-");  // value -> YYYY-MM-DD
        var year = parseInt(dateParts[0]);
        var month = parseInt(dateParts[1]);
        var day = parseInt(dateParts[2]);
        var origin = new Date(year, month, day);
        var today = new Date();
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var days = Math.round(Math.abs((today.getTime() - origin.getTime())/(oneDay)));
        if (days < 7)
            return days + " days";
        var oneWeek = oneDay * 7;
        var weeks = Math.round(Math.abs((today.getTime() - origin.getTime())/(oneWeek)));
        if (weeks < 5)
            return weeks + " weeks";

        var months;
        months = (today.getFullYear() - origin.getFullYear()) * 12;
        months -= origin.getMonth() + 1;
        months += today.getMonth();
        months = months <= 0 ? 0 : months;
        if (months < 12)
            return months + " months";

        var years = Math.round(Math.abs(today.getYear() - origin.getYear()));
        return years + " years";
    };
});
