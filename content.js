// content.js
console.log("Loaded FlashSeatsPlus Chrome extension!");

const MAIN_FORM_JQUERY_ID = "#form1";
const TOTAL_PAGES_LABEL_ID = "ctl00_ctl02_fsPagerBottom_lbTotalPages";
const EVENT_TARGET_INPUT_JQUERY_ID = "#__EVENTTARGET";
const VIEW_ALL_HYPERLINK_EVENT_VALUE = "ctl00$ctl02$fsPagerBottom$viewAllHyperLink";
const PAGINATION_MAIN_DIV_JQUERY_ID = "#ctl00_ctl02_pnlOfferListing";

if(document.getElementById(TOTAL_PAGES_LABEL_ID).innerHTML != "1"){
    // TODO //////////////////////////
    // display some sort of "Loading FlashSeatsPlus animation"
    // var loadingScreen = $()
    // keep following this https://stackoverflow.com/questions/2852276/make-div-overlay-entire-page-not-just-viewport
    //////////////////////////////////
    $(EVENT_TARGET_INPUT_JQUERY_ID).val(VIEW_ALL_HYPERLINK_EVENT_VALUE);
    $(MAIN_FORM_JQUERY_ID).submit();
}

// remove original pagination from the page
$( ".pagination" ).remove();

// create new input elements
var newFilterSection = $("<div id='flash_seats_plus'><p>Hello</p></div>");

// inject new elements into page
$(PAGINATION_MAIN_DIV_JQUERY_ID).prepend(newFilterSection);







